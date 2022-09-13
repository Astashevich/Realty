import {
    GET_HOUSES_LOADING_IN_PROGRESS,
    GET_HOUSES_SUCCESS,
    GET_HOUSES_ERROR,
    Href_HouseController_GetAll
} from './houseIndexConstants.jsx';

import 'isomorphic-fetch';

export function startReceiving() {
    return {
        type: GET_HOUSES_LOADING_IN_PROGRESS
    };
}

export function receiveHouse(data) {
    return {
        type: GET_HOUSES_SUCCESS,
        housesInfo: data.housesInfo
    };
}

export function errorReceiveHouse(data) {
    return {
        type: GET_HOUSES_ERROR,
        error: data
    };
}

export function getHouses() {
    return (dispatch) => {
        dispatch(startReceiving());

        fetch(Href_HouseController_GetAll)
            .then((response) => {
                var parsedJson = response.json();
                return parsedJson;
            })
            .then((data) => {
                dispatch(receiveHouse(data));
            })
            .catch((ex) => {
                dispatch(errorReceiveHouse(ex))
            })
    };
}
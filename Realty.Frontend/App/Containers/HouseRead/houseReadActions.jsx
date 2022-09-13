import {
    GET_HOUSE_LOADING_IN_PROGRESS,
    GET_HOUSE_SUCCESS,
    GET_HOUSE_ERROR,
    Href_HouseController_GetSingle
} from './houseReadConstants.jsx';

import 'isomorphic-fetch';

export function startReceiving() {
    return {
        type: GET_HOUSE_LOADING_IN_PROGRESS
    };
}

export function receiveHouse(data) {
    return {
        type: GET_HOUSE_SUCCESS,
        houseInfo: data.houseInfo
    };
}

export function errorReceiveHouse(data) {
    return {
        type: GET_HOUSE_ERROR,
        error: data
    };
}

export function getHouse(id) {
    return (dispatch) => {
        dispatch(startReceiving());

        fetch(Href_HouseController_GetSingle + id)
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
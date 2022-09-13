import {
    GET_APARTMENTS_LOADING_IN_PROGRESS,
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_ERROR,
    Href_ApartmentController_GetAll
} from './apartmentIndexConstants.jsx';

import 'isomorphic-fetch';

export function startReceiving() {
    return {
        type: GET_APARTMENTS_LOADING_IN_PROGRESS
    };
}

export function receiveApartment(data) {
    return {
        type: GET_APARTMENTS_SUCCESS,
        apartmentsInfo: data.apartmentsInfo
    };
}

export function errorReceiveApartment(data) {
    return {
        type: GET_APARTMENTS_ERROR,
        error: data
    };
}

export function getApartments() {
    return (dispatch) => {
        dispatch(startReceiving());

        fetch(Href_ApartmentController_GetAll)
            .then((response) => {
                var parsedJson = response.json();
                return parsedJson;
            })
            .then((data) => {
                dispatch(receiveApartment(data));
            })
            .catch((ex) => {
                dispatch(errorReceiveApartment(ex))
            })
    };
}
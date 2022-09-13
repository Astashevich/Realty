import {
    GET_APARTMENT_LOADING_IN_PROGRESS,
    GET_APARTMENT_SUCCESS,
    GET_APARTMENT_ERROR,
    Href_ApartmentController_GetSingle
} from './apartmentReadConstants.jsx';

import 'isomorphic-fetch';

export function startReceiving() {
    return {
        type: GET_APARTMENT_LOADING_IN_PROGRESS
    };
}

export function receiveApartment(data) {
    return {
        type: GET_APARTMENT_SUCCESS,
        apartmentInfo: data.apartmentInfo
    };
}

export function errorReceiveApartment(data) {
    return {
        type: GET_APARTMENT_ERROR,
        error: data
    };
}

export function getApartment(id) {
    return (dispatch) => {
        dispatch(startReceiving());

        fetch(Href_ApartmentController_GetSingle + id)
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
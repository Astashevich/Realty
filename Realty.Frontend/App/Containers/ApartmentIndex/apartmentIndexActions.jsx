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
        apartmentsInfo: data.apartmentsInfo,
        totalCount: data.totalCount
    };
}

export function errorReceiveApartment(data) {
    return {
        type: GET_APARTMENTS_ERROR,
        error: data
    };
}

export function getApartments(pagination) {
    let targetPage = !pagination.current ? 1 : pagination.current;
    let pageSize = !pagination.pageSize ? 10 : pagination.pageSize;

    return (dispatch) => {
        let queryTrailer = '?page=' + targetPage + '&pageSize=' + pageSize;
        dispatch(startReceiving());

        fetch(Href_ApartmentController_GetAll + queryTrailer)
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
import {
    GET_APARTMENTS_LOADING_IN_PROGRESS,
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_ERROR
} from './apartmentIndexConstants.jsx';

const initialState = {
    apartmentsInfo: [
        { id: 1, address: null, buildYear: null, wallMaterial: null, maxFloor: null }
    ],
    isLoading: false,
    error: null
};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case GET_APARTMENTS_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_APARTMENTS_SUCCESS:
            return { ...state, isLoading: false, apartmentsInfo: action.apartmentsInfo };

        case GET_APARTMENTS_ERROR:
            return { ...state, isLoading: false, error: action.error };

        default:
            return state;
    }
}

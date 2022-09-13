import {
    GET_APARTMENT_LOADING_IN_PROGRESS,
    GET_APARTMENT_SUCCESS,
    GET_APARTMENT_ERROR
} from './apartmentReadConstants.jsx';

const initialState = {
    apartmentInfo: {
        id: 1, address: null, buildYear: null, wallMaterial: null, maxFloor: null
    },
    isLoading: false,
    error: null
};

export default function apartment(state = initialState, action) {
    switch (action.type) {
        case GET_APARTMENT_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_APARTMENT_SUCCESS:
            return { ...state, isLoading: false, apartmentInfo: action.apartmentInfo };

        case GET_APARTMENT_ERROR:
            return { ...state, isLoading: false, error: action.error };

        default:
            return state;
    }
}
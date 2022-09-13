import {
    GET_HOUSES_LOADING_IN_PROGRESS,
    GET_HOUSES_SUCCESS,
    GET_HOUSES_ERROR
} from './houseIndexConstants.jsx';

const initialState = {
    housesInfo: [
        { id: 1, address: null, buildYear: null, wallMaterial: null, maxFloor: null }
    ],
    isLoading: false,
    error: null
};

export default function houses(state = initialState, action) {
    switch (action.type) {
        case GET_HOUSES_LOADING_IN_PROGRESS:
            return { ...state, isLoading: true };

        case GET_HOUSES_SUCCESS:
            return { ...state, isLoading: false, housesInfo: action.housesInfo };

        case GET_HOUSES_ERROR:
            return { ...state, isLoading: false, error: action.error };

        default:
            return state;
    }
}

import { GET_MOVIE_LIST } from '../Actions/types';

const initialState = {
    movieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.payload
            }
        default:
            return state;
    }
}
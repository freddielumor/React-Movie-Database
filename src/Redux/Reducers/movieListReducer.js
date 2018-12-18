import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from '../Actions/types';

const initialState = {
    movies: [],
    moviesLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_LIST_REQUEST:
            return {
                ...state
            }
        case GET_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                moviesLoaded: true
            }
        case GET_MOVIE_LIST_ERROR:
            return {
                ...state,
                requestingMovieListError: action.payload
            }
        default:
            return state;
    }
}
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from '../Actions/types';

const initialState = {
    movieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_LIST_REQUEST:
            return {
                ...state,
                requestingMovieList: true
            }
        case GET_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                movieList: action.payload
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
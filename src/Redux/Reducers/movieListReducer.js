import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from '../Actions/types';

const initialState = {
    movieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_LIST_REQUEST:
            return {
                ...state,
                requestingMovieList: true,
                requestingMovieListSuccess: false,
                requestingMovieListError: false
            }
        case GET_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                requestingMovieList: false,
                movieList: action.payload,
                requestingMovieListError: false
            }
        case GET_MOVIE_LIST_ERROR:
            return {
                ...state,
                requestingMovieList: false,
                requestingMovieListError: action.payload
            }
        default:
            return state;
    }
}
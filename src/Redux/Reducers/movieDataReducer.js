import { GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR } from '../Actions/types';

const initialState = {
    movie: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DATA_REQUEST:
            return {
                ...state,
                requestingMovieData: true,
                requestingMovieDataSuccess: false,
                requestingMovieDataError: false
            }
        case GET_MOVIE_DATA_SUCCESS:
            return {
                ...state,
                requestingMovieData: false,
                movie: action.payload,
                requestingMovieDataError: false
            }
        case GET_MOVIE_DATA_ERROR:
            return {
                ...state,
                requestingMovieData: false,
                requestingMovieDataError: action.payload
            }
        default:
            return state;
    }
}
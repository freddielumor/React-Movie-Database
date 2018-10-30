import { GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR } from '../Actions/types';

const initialState = {
    movie: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DATA_REQUEST:
            return {
                ...state,
                requestingMovieData: true
            }
        case GET_MOVIE_DATA_SUCCESS:
            return {
                ...state,
                movie: action.payload
            }
        case GET_MOVIE_DATA_ERROR:
            return {
                ...state,
                requestingMovieDataError: action.payload
            }
        default:
            return state;
    }
}
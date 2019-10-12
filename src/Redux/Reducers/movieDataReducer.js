import {
  GET_MOVIE_DATA_REQUEST,
  GET_MOVIE_DATA_SUCCESS,
  GET_MOVIE_DATA_ERROR,
  RESET_MOVIE_DATA
} from "../Actions/constants";

const initialState = {
    movie: {},
    movieLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DATA_REQUEST:
            return {
                ...state
            }
        case GET_MOVIE_DATA_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                movieLoaded: true
            }
        case GET_MOVIE_DATA_ERROR:
            return {
                ...state,
                requestingMovieDataError: action.payload
            }
        case RESET_MOVIE_DATA:
            return {
                ...state,
                movie: [],
                movieLoaded: false
            }
        default:
            return state;
    }
}
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from './constants';
import axios from 'axios';

export function getMovieListPending() {
    return {
      type: GET_MOVIE_LIST_REQUEST
    };
}

export function getMovieListFailure(payload) {
    return {
      type: GET_MOVIE_LIST_ERROR,
      payload
    };
}

export function getMovieListSuccess(payload) {
    return {
        type: GET_MOVIE_LIST_SUCCESS,
        payload
    };
}

export function getMovieList(url) {
    return async dispatch => {
        dispatch(getMovieListPending());

        const response = await axios.get(url);
        const {data} = response;

        if (response.status !== 200) {
            dispatch(getMovieListFailure(response.statusText));
            return;
        }

        dispatch(getMovieListSuccess(data.results));
    }
}
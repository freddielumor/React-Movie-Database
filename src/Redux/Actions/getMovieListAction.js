import axios from 'axios';
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from './constants';

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

export function getMovieList() {
    return async dispatch => {
        dispatch(getMovieListPending());

        const response = await axios.get(
          'api.themoviedb.org/3/discover/movie?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&page=1&include_adult=false'
        );
        const { data } = response;

        if (response.status !== 200) {
            dispatch(getMovieListFailure(response.statusText));
            return;
        }

        dispatch(getMovieListSuccess(data.results));
    };
}

import axios from 'axios';
import { GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR } from './constants';

export function getMovieDataPending() {
    return {
      type: GET_MOVIE_DATA_REQUEST
    };
}

export function getMovieDataFailure(payload) {
    return {
      type: GET_MOVIE_DATA_ERROR,
      payload
    };
}

export function getMovieDataSuccess(payload) {
    return {
      type: GET_MOVIE_DATA_SUCCESS,
      payload
    };
}

export function getMovieData(movieId) {
    return async dispatch => {
        dispatch(getMovieDataPending());
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&append_to_response=credits,videos`);

        if (response.status !== 200) {
          dispatch(getMovieDataFailure(response.statusText));
        return;
        }

        dispatch(getMovieDataSuccess(response.data));
    };
}

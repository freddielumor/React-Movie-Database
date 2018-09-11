import { GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR } from './types';
import axios from 'axios';

export function getMovieData(url) {
    return dispatch => {
        dispatch({ type: GET_MOVIE_DATA_REQUEST });
        return axios
            .get(url)
            .then(function (response) {
                if (response) {
                    dispatch({
                        type: GET_MOVIE_DATA_SUCCESS,
                        payload: response.data
                    });
                } else {
                    dispatch({
                        type: GET_MOVIE_DATA_ERROR,
                        payload: 'There was a problem fetching the movie data.'
                    });
                }
            })
            .catch(function (err) {
                dispatch({ type: GET_MOVIE_DATA_ERROR, payload: err });
            });
    };
}
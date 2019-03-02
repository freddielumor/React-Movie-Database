import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from './types';
import axios from 'axios';

export function getMovieList(url) {
    return async dispatch => {

        dispatch({ type: GET_MOVIE_LIST_REQUEST });

        let result = await axios.get(url)
            .then(function (response) {
                if (response) {
                    dispatch({
                        type: GET_MOVIE_LIST_SUCCESS,
                        payload: response.data.results
                    });
                } else {
                    dispatch({
                        type: GET_MOVIE_LIST_ERROR,
                        payload: 'There was a problem fetching the movie list.'
                    });
                }
                return result
            })
            .catch(function (err) {
                dispatch({ type: GET_MOVIE_LIST_ERROR, payload: err });
            });
    };
}
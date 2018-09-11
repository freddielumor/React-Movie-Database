import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_ERROR } from './types';
import axios from 'axios';

export function getMovieList(url) {
    return dispatch => {
        dispatch({ type: GET_MOVIE_LIST_REQUEST });
        return axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&page=1&include_adult=false')
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
            })
            .catch(function (err) {
                dispatch({ type: GET_MOVIE_LIST_ERROR, payload: err });
            });
    };
}
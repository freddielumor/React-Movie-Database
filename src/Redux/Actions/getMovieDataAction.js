import { GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR } from './types';
import axios from 'axios';

export function getMovieData(movieId) {
    // Use Async Await
    return async dispatch => {

        dispatch({ type: GET_MOVIE_DATA_REQUEST });

        let result = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&append_to_response=credits,videos`)

            .then(function (response) {
                console.log({ response })
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
                return result
            })

            .catch(function (err) {
                dispatch({ type: GET_MOVIE_DATA_ERROR, payload: err });
            });
    };
}
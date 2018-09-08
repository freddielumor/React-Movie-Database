import { GET_MOVIE_LIST } from './types';
import axios from 'axios';

export const getMovieList = () => dispatch => {
    axios
        .get(
            'https://api.themoviedb.org/3/discover/movie?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&page=1&include_adult=false')
        .then(
            movieList => dispatch({
                type: GET_MOVIE_LIST,
                payload: movieList.data.results
            }))
        .catch(err => console.log(err));
}
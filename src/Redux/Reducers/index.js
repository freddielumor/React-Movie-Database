import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';
import movieDataReducer from './movieDataReducer';

export default combineReducers({
    movieList: movieListReducer,
    movieData: movieDataReducer
});
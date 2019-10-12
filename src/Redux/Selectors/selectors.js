import { createSelector } from "reselect";

export const movieListSelector = state => state.movieList.movies;
export const moviesListLoadedSelector = state => state.movieList.moviesLoaded;

export const movieDataSelector = state => state.movieData.movie;
export const movieLoadedSelector = state => state.movieData.movieLoaded;


import React from 'react';

// Components
import MovieSearch from '../../Components/Search/MovieSearch';
import MovieList from '../../Components/Movies/MovieList';


const HomePage = props => (
    <main className="app__homepage">
        <MovieSearch />
        <MovieList />
    </main>
);

export default HomePage;
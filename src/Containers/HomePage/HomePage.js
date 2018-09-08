import React from 'react';

// Components
import Search from '../../Components/Search/Search';
import MovieList from '../../Components/Movies/MovieList';


const HomePage = props => (
    <main className="app__homepage">
        <Search />
        <MovieList />
    </main>
);

export default HomePage;
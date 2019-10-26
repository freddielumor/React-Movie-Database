import React from 'react';

// Components
import Search from '../../Components/Search/Search.jsx';
import MovieList from '../../Components/Movies/MovieList.jsx';


const HomePage = () => (
    <main className="app__homepage">
        <Search />
        <MovieList />
    </main>
);

export default HomePage;

import React, { Component } from 'react';

// Components
import SearchInput from '../Search/SearchInput';
import SearchResults from '../Search/SearchResults';


const Main = () => (
    <main className="app__main">
        <div className="row">
            <div className="col s12">
                <SearchInput />
                <SearchResults />
            </div>
        </div>
    </main>
);

export default Main;
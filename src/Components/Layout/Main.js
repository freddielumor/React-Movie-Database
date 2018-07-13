import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

// Components
import MovieSearch from '../Search/MovieSearch';
import MovieList from '../Movies/MovieList';


const Main = () => (
    <main className="app__main">
        <Grid>
            <Row>
                <Col xs={24}>
                    <MovieSearch />
                    <MovieList />
                </Col>
            </Row>
        </Grid>
    </main>
);

export default Main;
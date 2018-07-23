import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

                    <Switch>
                        <Route exact path="/" component={MovieList} />
                        <Route path="/about" component={MoviePath} />
                        {/* <Route component={NoMatch} /> */}
                    </Switch>
                </Col>
            </Row>
        </Grid>
    </main>
);

export default Main;
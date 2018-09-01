import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';
import './App.scss';

// Containers
import HomePage from './Containers/HomePage/HomePage';
import MoviePage from './Containers/MoviePage/MoviePage';
import ErrorPage from './Containers/ErrorPage/ErrorPage';

// Components
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Grid>
                    <Row>
                        <Col xs={24}>
                            <Header />
                            {/* App Routes */}
                            <Switch>
                                <Route exact path="/" exact
                                    render={props => <HomePage {...props} />}
                                />
                                <Route path="/movie/:id"
                                    render={props => <MoviePage {...props} />}
                                />
                                <Route render={props => <ErrorPage {...props} />}
                                />
                            </Switch>
                            <Footer />
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Router>
    )
}

export default App;
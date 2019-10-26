import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'rsuite';
import store from './Redux/store';
import './App.scss';

// Containers
import HomePage from './Containers/HomePage/HomePage.jsx';
import MoviePage from './Containers/MoviePage/MoviePage.jsx';
import ErrorPage from './Containers/ErrorPage/ErrorPage.jsx';

// Components
import Header from './Components/Layout/Header.jsx';
import Footer from './Components/Layout/Footer.jsx';

const App = () => (
        <Provider store={store}>
            <div className="app">
                <Grid>
                    <Row>
                        <Col xs={24}>
                            <Header />
                            <Router>
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        render={props => <HomePage {...props} />}
                                    />
                                    <Route
                                        path="/movie/:id"
                                        render={props => <MoviePage {...props} />}
                                    />
                                    <Route render={props => <ErrorPage {...props} />} />
                                </Switch>
                            </Router>
                            <Footer />
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Provider>
);


export default App;

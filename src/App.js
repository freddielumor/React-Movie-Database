import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';
import './App.scss';

// Containers
import HomePage from './Containers/HomePage/HomePage';
import MoviePage from './Containers/MoviePage/MoviePage';

// Components
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

class App extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Grid>
                        <Row>
                            <Col xs={24}>
                                <Header />
                                <Switch>
                                    <Route exact path="/"
                                        render={props => <HomePage {...props} />}
                                    />
                                    <Route path="/movie/:id"
                                        render={props => <MoviePage {...props} />}
                                    />
                                </Switch>
                                <Footer />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Container,
    Grid,
    Row,
    Col
} from 'rsuite';
import './App.css';

// Components;
import Header from './Components/Layout/Header';
import Main from './Components/Layout/Main';
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
                                <Main />
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

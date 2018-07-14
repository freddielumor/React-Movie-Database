import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Container,
    Grid,
    Row,
    Col
} from 'rsuite';
import './App.css';

// Components
import DefaultLayout from './Components/Layout/DefaultLayout';

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
                                <DefaultLayout />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;

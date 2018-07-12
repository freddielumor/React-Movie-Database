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
                    <Container>
                        <Row>
                            <Col xs={24}>
                                <DefaultLayout />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;

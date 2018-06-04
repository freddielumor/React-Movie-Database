import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <DefaultLayout />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

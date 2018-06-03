import React, { Component } from 'react';
import './App.css';

// Components

class App extends Component {
    constructor() {
        super();
        
        this.state = {
        };
    }

    render() {
        return (
            <div className="app">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h1>Movies!</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;

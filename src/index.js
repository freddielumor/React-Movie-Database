import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import App from './App';
import './index.scss';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
    <Router history={hashHistory}>
        <App />
    </Router>,
    document.getElementById('root')
);
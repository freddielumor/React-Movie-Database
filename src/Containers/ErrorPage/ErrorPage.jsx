import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => (
    <main className="app__error">
        <h1>PAGE NOT FOUND</h1>

        <div className="app__error--link">
            <Link to="/">
                HOMEPAGE
            </Link>
        </div>
    </main>
);

export default ErrorPage;

import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { Link } from 'react-router-dom';

import './MovieCard.scss';

class MovieCard extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        const {id, image, title, description, releaseDate} = this.props;
        return (
            <Link to={`/movie/${id}`} className="movie-card" id={id}>
                <img src={`https://image.tmdb.org/t/p/w342${image}`} />
                <div className="movie-card__details">
                    <p>{title}</p>
                    <p>{releaseDate}</p>
                </div>
            </Link>
        )
    }
}

export default MovieCard;
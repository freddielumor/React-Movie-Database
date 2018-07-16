import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { Link } from 'react-router-dom';
import './MovieSearchCard.scss';

class MovieSearchCard extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const { id, image, title, description, releaseDate } = this.props;
        return (
            <Link to={`/movie/${id}`} className="movie-search-card" id={id}>
                <img src={`https://image.tmdb.org/t/p/w342${image}`} />
                <div className="movie-search-card__details">
                    <h3 className="movie-search-card__details-title">{title}</h3>
                    <h4 className="movie-search-card__details-description">{description}</h4>
                    <h4 className="movie-search-card__details-release-date">{releaseDate}</h4>
                </div>
            </Link>
        )
    }
}

export default MovieSearchCard;
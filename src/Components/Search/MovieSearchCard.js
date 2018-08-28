import React from 'react';
import { Link } from 'react-router-dom';
import './MovieSearchCard.scss';

const MovieSearchCard = props => {
    return (
        <Link to={`/movie/${props.id}`} className="movie-search-card" id={props.id}>
            <img src={`https://image.tmdb.org/t/p/w342${props.image}`} />
            <div className="movie-search-card__details">
                <h3 className="movie-search-card__details-title">{props.title}</h3>
                <h4 className="movie-search-card__details-description">{props.description}</h4>
                <h4 className="movie-search-card__details-release-date">{props.releaseDate}</h4>
            </div>
        </Link>
    )
}

export default MovieSearchCard;
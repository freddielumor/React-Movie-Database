import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = props => {
    return (
        <Link to={`/movie/${props.id}`} className="movie-card" id={props.id}>
            <img src={`https://image.tmdb.org/t/p/w342${props.image}`} />
            <div className="movie-card__details">
                <h3 className="movie-card__details-title">{props.title}</h3>
                <h4 className="movie-card__details-release-date">{props.releaseDate}</h4>
            </div>
        </Link>
    )
}

export default MovieCard;
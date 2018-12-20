import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ id, title, image, releaseDate }) => {
    return (
        <Link to={`/movie/${id}`} className="movie-card" id={id}>
            <img src={`https://image.tmdb.org/t/p/w342${image}`} />
            <div className="movie-card__details">
                <h3 className="movie-card__details-title">{title}</h3>
                <h4 className="movie-card__details-release-date">{releaseDate}</h4>
            </div>
        </Link>
    )
}

export default MovieCard;
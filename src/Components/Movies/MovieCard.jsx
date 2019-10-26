import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({
 id, title, image, releaseDate,
}) => (
<Link to={`/movie/${id}`} className="movie-card" id={id}>
    <img src={`https://image.tmdb.org/t/p/w342${image}`} alt="Movie Card" />
    <div className="movie-card__details">
        <h3 className="movie-card__details-title">{title}</h3>
        <h4 className="movie-card__details-release-date">{releaseDate}</h4>
    </div>
</Link>
);

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default MovieCard;

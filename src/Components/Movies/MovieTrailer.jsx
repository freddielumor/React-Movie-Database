import React from 'react';
import PropTypes from 'prop-types';
import './MovieTrailer.scss';

const MovieTrailer = ({ id, videoId }) => (
    <div className="movie-trailer" id={id}>
    <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        modestbranding="true"
        title="Movie Trailer"
    />
    </div>
);

MovieTrailer.propTypes = {
  id: PropTypes.number.isRequired,
  videoId: PropTypes.number.isRequired
};

export default MovieTrailer;

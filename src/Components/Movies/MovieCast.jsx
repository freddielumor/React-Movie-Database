import React from 'react';
import PropTypes from 'prop-types';
import './MovieCast.scss';

const MovieCast = ({
    id, name, character, profile_path: profileImage,
 }) => (
    <figure className="movie-cast" id={id}>
      <img
        src={
          profileImage === null
            ? 'http://via.placeholder.com/300x450'
            : `https://image.tmdb.org/t/p/w185${profileImage}`
        }
        alt={name}
      />
      <figcaption className="movie-cast__actor-name">{name}</figcaption>
      <figcaption>{character}</figcaption>
    </figure>
);

MovieCast.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};

MovieCast.defaultProps = {
  id: undefined,
  name: '',
  character: '',
  profile_path: '',
};


export default MovieCast;

import React, { Component } from 'react';
import './MovieCast.scss';

class MovieCast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, character, profile_path } = this.props;

        return (
            <figure className="movie-cast" id={id}>
                <img src={profile_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w185${profile_path}`} alt={`${name} image`} />
                <figcaption>{name}</figcaption>
                <figcaption>{character}</figcaption>
            </figure>
        )
    }
}

export default MovieCast;

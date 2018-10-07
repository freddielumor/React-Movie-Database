import React, { Component } from 'react';
import './MovieCast.scss';

class MovieCast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, character, profile_path } = this.props;

        return (
            <div className="movie-cast swiper-slide" id={id}>
                <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt={`${name} image`} />
                <p>{name}</p>
                <p>{character}</p>
            </div>
        )
    }
}

export default MovieCast;

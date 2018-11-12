import React from 'react';
import './MovieTrailer.scss';

const MovieTrailer = props => {
    return (
        <div className="movie-trailer" id={props.id}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen modestbranding="true"></iframe>
        </div>
    )
}

export default MovieTrailer;

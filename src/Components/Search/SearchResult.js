import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.scss';

const SearchResult = props => {
    return (
        <Link to={`/movie/${props.id}`} className="search-result" id={props.id}>
            <img src={`https://image.tmdb.org/t/p/w342${props.image}`} />
            <div className="search-result__details">
                <h3 className="search-result__details-title">{props.title}</h3>
                <h4 className="search-result__details-description">{props.description}</h4>
                <h4 className="search-result__details-release-date">{props.releaseDate}</h4>
            </div>
        </Link>
    )
}

export default SearchResult;
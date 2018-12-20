import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.scss';

const SearchResult = ({ id, image, title, description, releaseDate }) => {
    return (
        <Link to={`/movie/${id}`} className="search-result" id={id}>
            <img src={`https://image.tmdb.org/t/p/w342${image}`} />
            <div className="search-result__details">
                <h3 className="search-result__details-title">{title}</h3>
                <h4 className="search-result__details-description">{description}</h4>
                <h4 className="search-result__details-release-date">{releaseDate}</h4>
            </div>
        </Link>
    )
}

export default SearchResult;
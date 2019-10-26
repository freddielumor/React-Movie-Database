import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchResult.scss';

const SearchResult = ({
     id, image, title, description, releaseDate
     }) => (
        <Link to={`/movie/${id}`} className="search-result" id={id}>
            <img src={`https://image.tmdb.org/t/p/w342${image}`} alt="Search Result" />
            <div className="search-result__details">
                <h3 className="search-result__details-title">{title}</h3>
                <h4 className="search-result__details-description">{description}</h4>
                <h4 className="search-result__details-release-date">{releaseDate}</h4>
            </div>
        </Link>

);

SearchResult.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  releaseDate: PropTypes.string
};

SearchResult.defaultProps = {
  id: undefined,
  image: '',
  title: '',
  description: '',
  releaseDate: '',
};


export default SearchResult;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'rsuite';
import { connect } from 'react-redux';
import { getMovieList } from '../../Redux/Actions/getMovieListAction';
import {
  movieListSelector,
  moviesListLoadedSelector,
} from '../../Redux/Selectors/selectors';

// Components
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
    componentDidMount() {
        const { isLoaded } = this.props;
        // Get movies if not already loaded
        if (!isLoaded) {
            getMovieList();
        }
    }

    render() {
        const { movies, isLoaded } = this.props;

        // Movie Loading State
        if (!isLoaded) {
            return <h1 style={{ color: '#fff' }}>Loading...</h1>;
        }

        // Map over results & return data
        const movieListMapped = movies.map((item) => (
              <Col xs={12} md={6} key={item.id}>
                <MovieCard
                  id={item.id}
                  image={item.poster_path}
                  title={item.title}
                  description={item.overview}
                  releaseDate={item.release_date}
                />
              </Col>
        ));

        return (
            <div className="movie-list">
                <Grid fluid>
                    <Row>
                        <Col xs={24}><h2>Latest Releases</h2></Col>
                    </Row>
                    <Row>
                        {movieListMapped}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = {
  getMovieList,
};

const mapStateToProps = state => ({
  movies: movieListSelector(state),
  isLoaded: moviesListLoadedSelector(state),
});

MovieList.propTypes = {
  isLoaded: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    releaseDate: PropTypes.string
  })),
};

MovieList.defaultProps = {
  isLoaded: false,
  movies: []
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

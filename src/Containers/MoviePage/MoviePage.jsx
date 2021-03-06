import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'rsuite';
import { connect } from 'react-redux';
import { getMovieData } from '../../Redux/Actions/getMovieDataAction';
import { resetMovieData } from '../../Redux/Actions/resetMovieDataAction';
import {
  movieDataSelector,
  movieLoadedSelector
} from '../../Redux/Selectors/selectors';
import './MoviePage.scss';

// Components
import MovieCast from '../../Components/Movies/MovieCast.jsx';
import MovieTrailer from '../../Components/Movies/MovieTrailer.jsx';


class MoviePage extends Component {
    // Get movie id when page is loaded
    componentDidMount() {
        const {
          match: {
            params: { id }
          },
          getMovie
        } = this.props;
        getMovie(id);
    }

    // Reset movie data when leaving page
    componentWillUnmount() {
        resetMovieData();
    }

    render() {
        const { movie, isLoaded } = this.props;
        const {
          title,
          poster_path: posterPath,
          release_date: releaseDate,
          backdrop_path: backdropPath,
          overview,
          credits,
          videos,
        } = movie;
        const background = `https://image.tmdb.org/t/p/w1280${backdropPath}`;

        // Set page loading state while awaiting data
        if (!isLoaded) {
            return <h1 style={{ color: '#fff' }}>Loading...</h1>;
        }

        // Map & Return Cast Data
        const movieCastMapped = [];
        credits.cast.slice(0, 6).map((item) => (
            movieCastMapped.push(
              <Col xs={12} sm={6} md={4} key={item.id}>
                <MovieCast
                  id={item.id}
                  name={item.name}
                  character={item.character}
                  profile_path={item.profile_path}
                />
              </Col>
            )
        ));

        // Map & Return Trailers
        const movieTrailersMapped = [];
        videos.results.slice(0, 2).map((item) => (
            movieTrailersMapped.push(
              <Col xs={24} md={12} key={item.id}>
                <MovieTrailer id={item.id} videoId={item.key} />
              </Col>
            )
        ));

        return (
            <div className="movie-page">
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <h4 className="movie-page__back-btn"><a href="/">BACK</a></h4>
                            <div
                                className="movie-page__hero"
                                style={{
                                    backgroundImage: `url(${background === null ? 'http://via.placeholder.com/300x450' : background})`
                                }}
                            />
                            <div className="movie-page__details">
                                <div className="movie-page__details--poster">
                                    <img src={posterPath === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w185${posterPath}`} alt={`${title} poster`} />
                                </div>
                                <div className="movie-page__details--content">
                                    <h1 className="movie-page__details--title">{title}</h1>
                                    <h1 className="movie-page__details--release">{releaseDate}</h1>
                                    <p className="movie-page__details--description">{overview}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <div className="movie-page__cast">
                                <h2>Casts</h2>
                                <Row>
                                    {movieCastMapped}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <div className="movie-page__trailer">
                                <h2>Trailers</h2>
                                <Row>
                                    {movieTrailersMapped}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = {
  getMovie: getMovieData,
  resetMovieData
};

const mapStateToProps = state => ({
  movie: movieDataSelector(state),
  isLoaded: movieLoadedSelector(state)
});

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    credits: PropTypes.shape({
      cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        character: PropTypes.string,
        profile_path: PropTypes.string
      })),
    }),
    videos: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
      }))
    })
  }),
  isLoaded: PropTypes.bool,
  getMovie: PropTypes.func
};

MoviePage.defaultProps = {
  match: {
    params: {
      id: undefined
    }
  },
  movie: [],
  isLoaded: false,
  getMovie: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

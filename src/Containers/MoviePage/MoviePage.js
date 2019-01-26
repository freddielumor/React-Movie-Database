import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'rsuite';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getMovieData } from '../../Redux/Actions/getMovieDataAction';
import { resetMovieData } from '../../Redux/Actions/resetMovieDataAction';
import './MoviePage.scss';

// Components
import MovieCast from '../../Components/Movies/MovieCast';
import MovieTrailer from '../../Components/Movies/MovieTrailer';


class MoviePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieId: ''
        };
    }

    // Get movie id when page is loaded
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.setState({
            movieId: movieId
        }, () => {
            this.props.getMovieData(movieId)
        });
    }

    componentWillUnmount() {
        this.props.resetMovieData();
    }

    render() {

        const { movie } = this.props;
        const { title, poster_path, release_date, overview, credits, videos } = this.props.movie;
        const Background = `https://image.tmdb.org/t/p/w1280${this.props.movie.backdrop_path}`;

        // Map & Return Cast Data
        let movieCastMapped = [];
        if (credits !== undefined) {
            credits.cast.slice(0, 6).map((item, index) => {
                movieCastMapped.push(
                    <Col xs={12} sm={6} md={4} key={index}>
                        <MovieCast
                            id={item.id}
                            name={item.name}
                            character={item.character}
                            profile_path={item.profile_path}
                        />
                    </Col>
                )
            });
        }

        // Map & Return Trailers
        let movieTrailersMapped = [];
        if (videos !== undefined) {
            videos.results.slice(0, 2).map((item, index) => {
                movieTrailersMapped.push(
                    <Col xs={24} md={12} key={index}>
                        <MovieTrailer
                            id={item.id}
                            videoId={item.key}
                        />
                    </Col>
                )
            });
        }

        return (
            <div className="movie-page">
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <h4 className="movie-page__back-btn"><a href="/">BACK</a></h4>
                            <div className="movie-page__hero" style={{
                                backgroundImage: `url(${Background === null ? 'http://via.placeholder.com/300x450' : Background})`
                            }}></div>
                            <div className="movie-page__details">
                                <div className="movie-page__details--poster">
                                    <img src={poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title} poster`} />
                                </div>
                                <div className="movie-page__details--content">
                                    <h1 className="movie-page__details--title">{title}</h1>
                                    <h1 className="movie-page__details--release">{release_date}</h1>
                                    <p className="movie-page__details--description">{overview}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <div className="movie-page__cast">
                                <h2>Cast</h2>
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
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovieData,
    resetMovieData
}, dispatch);

const mapStateToProps = state => ({
    movie: state.movieData.movie,
    isLoaded: state.movieData.movieLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getMovieData } from '../../Redux/Actions/getMovieDataAction';
import './MoviePage.scss';

class MoviePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieId: this.props.match.params.id
        };
    }


    // 1. Get movie id when page is loaded
    componentDidMount() {
        // this.getMovieId(this.props.match.params.id);
        this.props.getMovieData(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&append_to_response=credits,videos`)
    }

    componentWillReceiveProps = (nextProps, movieId) => {
        if (nextProps.movie !== this.props.movie) {
            this.props.getMovieData(this.state.movieId)
        }
    }

    // 2. Set the movie id to state then run get movie data action
    // getMovieId = movieId => {
    //     this.setState({
    //         movieId: movieId
    //     }, () => {
    //         this.props.getMovieData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&append_to_response=credits,videos`)
    //     });
    // }

    render() {
        const { title, poster_path, release_date, overview } = this.props.movie;
        const Background = `https://image.tmdb.org/t/p/w1280${this.props.movie.backdrop_path}`;
        return (
            <div className="movie-page">
                <Grid fluid>
                    <Row>
                        <Col>
                            <div className="movie-page__hero" style={{
                                backgroundImage: `url(${Background})`
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
                </Grid>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovieData
}, dispatch);

const mapStateToProps = state => ({
    movie: state.movieData.movie
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
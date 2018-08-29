import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'rsuite';
import './MoviePage.scss';

class MoviePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'https://api.themoviedb.org/3/movie',
            apiKey: 'e0c15850977d1058ff053d4726ac46f1',
            movieId: window.location.pathname.substring(7),
            movie: {
                genres: [],
                credits: {
                    cast: [],
                    crew: []
                }
            }
        };
        this.getMovieData = this.getMovieData.bind(this);
    }

    // Get movie data
    getMovieData = () => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${this.state.apiKey}&language=en-US&append_to_response=credits,videos`)

            .then(res => {
                if (res.status !== 200) {
                    console.log('Error: ' + res.status);
                    return;
                } else {
                    const movie = res.data;
                    this.setState({ movie });
                }
            })
            .catch(err => {
                console.log('GET Error:', err);
            })
    }

    // Run get movie data function after page is rendered
    componentDidMount = () => {
        this.getMovieData();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.movie !== this.state.movie) {
            this.getMovieData();
        }
    }

    render() {
        const { title, poster_path, release_date, overview } = this.state.movie;
        const Background = `https://image.tmdb.org/t/p/w1280${this.state.movie.backdrop_path}`;

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

export default MoviePage;
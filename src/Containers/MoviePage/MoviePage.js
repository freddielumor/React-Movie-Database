import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import './MoviePage.scss';

// Components


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

    getMovieData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=${this.state.apiKey}&language=en-US&append_to_response=credits`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const movie = data;
                    this.setState({ movie });
                });

            })
            .catch(err => {
                console.log('Fetch Error :-S', err);
            })
    }

    componentDidMount = () => {
        this.getMovieData();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.movie !== this.state.movie) {
            this.getMovieData();
        }
    }

    render() {
        console.log(this.state.movie);

        return (
            <div className="movie-page">
                <Grid fluid>
                    <Row>
                        <Col>
                            <h1>{this.state.movie.title}</h1>
                            {/* <div className="movie-page__hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${this.state.movie.backdrop_path})` }}>
                            </div> */}
                            <div className="poster">
                                <img src={this.state.movie.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`} alt={`${this.state.movie.title} poster`} className="posterImg" />
                            </div>

                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default MoviePage;
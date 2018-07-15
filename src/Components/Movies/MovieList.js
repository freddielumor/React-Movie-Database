import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import axios from 'axios';

// Components
import MovieCard from './MovieCard';

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            initialApiUrl: 'https://api.themoviedb.org/3/discover/movie',
            apiUrl: 'https://api.themoviedb.org/3/search/movie',
            apiKey: 'e0c15850977d1058ff053d4726ac46f1',
            movieList: [],
            movieListPage: 1
        };
        // this.loadNextPage = this.loadNextPage.bind(this);
        // this.loadPreviousPage = this.loadPreviousPage.bind(this);
    }

    // Populate movie list on page load
    componentDidMount() {
        axios
            .get(
            `${this.state.initialApiUrl}?api_key=${this.state.apiKey}&language=en-US&page=${this.state.movieListPage}&include_adult=false`)
            .then(res => this.setState({ movieList: res.data.results }))
            .catch(err => console.log(err))
        
    }

    // loadNextPage() {
    //     axios
    //         .get(
    //         `${this.state.initialApiUrl}?api_key=${this.state.apiKey}&language=en-US&page=${this.state.movieListPage + 1}&include_adult=false`
    //         )
    //         .then(res => this.setState({ movieList: res.data.results }))
    //         .catch(err => console.log(err));
    // }

    // loadPreviousPage() {
    //     axios
    //         .get(
    //             `${this.state.initialApiUrl}?api_key=${this.state.apiKey}&language=en-US&page=${this.state.movieListPage - 1}&include_adult=false`
    //         )
    //         .then(res => this.setState({ movieList: res.data.results }))
    //         .catch(err => console.log(err));
    // }

    render() {

        const { movieList, movieListPage } = this.state;
        console.log({ movieList });
        const filteredMovieList = movieList.slice(1, 17);
        console.log({ filteredMovieList });
        // console.log({ movieListPage });
        

        // Map over results & return data
        let movieListMapped = movieList.map((item, index) => {
            return (
                <Col xs={24} sm={12} md={6} key={index}>
                    <MovieCard
                        id={item.id}
                        image={item.poster_path}
                        title={item.title}
                        description={item.overview}
                        releaseDate={item.release_date}
                    />
                </Col>
            );
        });

        return (
            <div className="movie-list">
                <Grid fluid>
                    <Row>
                        <Col xs={24}><h2>Latest Releases</h2></Col>
                    </Row>
                    <Row>
                        {movieListMapped}
                    </Row>
                    {/* <Row>
                        <Col xs={24}>
                            {movieListPage >= 1 &&
                            <React.Fragment>
                                <Button 
                                    appearance="primary"
                                    onClick={this.loadNextPage}
                                >
                                    NEXT PAGE
                                </Button>

                                <Button
                                    appearance="primary"
                                    onClick={this.loadPreviousPage}
                                >
                                    PREVIOUS PAGE
                                </Button>
                            </React.Fragment>
                            }

                            {movieListPage.length <= 1 &&
                                <React.Fragment>

                                    <Button
                                        appearance="primary"
                                onClick={this.loadNextPage}
                                    >
                                        NEXT PAGE
                                </Button>
                                </React.Fragment>
                            }
                        </Col>
                    </Row> */}
                </Grid>
            </div>
        )
    }
}

export default MovieList;
import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
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
            movieList: []
        };
    }

    // Populate movie list on page load
    componentDidMount() {
        axios
            .get(
                `${this.state.initialApiUrl}?api_key=${this.state.apiKey}&language=en-US&page=1&include_adult=false`)
            .then(res => this.setState({ movieList: res.data.results }))
            .catch(err => console.log(err))

    }

    render() {
        const { movieList } = this.state;
        const filteredMovieList = movieList.slice(1, 17);

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
                </Grid>
            </div>
        )
    }
}

export default MovieList;
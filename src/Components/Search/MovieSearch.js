import React, { Component } from 'react';
import { Grid, Row, Col, Input, InputGroup } from 'rsuite';
import axios from 'axios';
import './MovieSearch.scss';

// Components
import MovieCard from '../Movies/MovieCard';

class MovieSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            initialSearchTerm: '',
            initialApiUrl: 'https://api.themoviedb.org/3/discover/movie',
            apiUrl: 'https://api.themoviedb.org/3/search/movie',
            apiKey: 'e0c15850977d1058ff053d4726ac46f1',
            initialMovieList: []
        };
    }

    // Populate movie list on page load
    componentDidMount() {
        axios
            .get(
                `${this.state.initialApiUrl}?api_key=${this.state.apiKey}&primaryreleasedate.gte=2016-01-01`
            )
            .then(res => this.setState({ initialMovieList: res.data.results }))
            .catch(err => console.log(err));
    }
    render() {
        const { initialMovieList} = this.state;
        console.log({initialMovieList});

        // Map over search results & return data
        let movieListMapped = initialMovieList.map((item, index) => {
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
            <div className="search-bar">
                <form>
                    <Input
                        placeholder="Search for a movie..."
                    />
                </form>
                <div className="search-results">
                    <Grid fluid>
                        <Row>
                            <Col xs={24}><h2>Latest Releases</h2></Col>
                        </Row>
                        <Row>
                            {movieListMapped}
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default MovieSearch;
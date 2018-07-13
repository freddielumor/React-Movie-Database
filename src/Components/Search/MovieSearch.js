import React, { Component } from 'react';
import { Grid, Row, Col, Input, InputGroup } from 'rsuite';
import axios from 'axios';

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
            apiKey: 'e0c15850977d1058ff053d4726ac46f1'
        };
    }

    // Populate movie list on page load
    componentDidMount() {
        axios
            .get(
                `${this.state.initialApiUrl}?api_key=${this.state.apiKey}&primaryreleasedate.gte=2016-01-01`
            )
            .then(res => this.setState({ initialImages: res.data.hits }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="search-input">
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
                            <Col xs={24} sm={12} md={6}>
                                <MovieCard />
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <MovieCard />
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <MovieCard />
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <MovieCard />
                            </Col>
                        </Row>
                    </Grid>
                </div >
            </div>
        )
    }
}

export default MovieSearch;
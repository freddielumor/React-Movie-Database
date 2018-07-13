import React, { Component } from 'react';
import { Input, InputGroup } from 'rsuite';

// Components
import MovieCard from '../Movies/MovieCard';

class MovieSearch extends Component {

    constructor() {
        super();
        this.state = {
        };
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
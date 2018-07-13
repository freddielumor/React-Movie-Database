import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

// Components
import MovieCard from './MovieCard';

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="movie-list">
                <Grid fluid>
                    <Row>
                        <Col xs={24}><h2>Latest Releases</h2></Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={12} md={6}>
                            <SearchResultCard />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <SearchResultCard />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <SearchResultCard />
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                            <SearchResultCard />
                        </Col>
                    </Row>
                </Grid>
            </div >
        )
    }
}

export default MovieList;
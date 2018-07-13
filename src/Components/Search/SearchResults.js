import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

// Components
import SearchResultCard from './SearchResultCard';

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="search-results">
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

export default SearchResults;
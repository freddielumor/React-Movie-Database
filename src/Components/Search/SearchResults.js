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
            <h2>Latest Releases</h2>
            <Grid>
                <Row>
                    <Col xs={24} sm={12}>
                        <SearchResultCard />
                    </Col>
                    <Col xs={24} sm={12}>
                        <SearchResultCard />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
}

export default SearchResults;
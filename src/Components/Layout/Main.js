import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

// Components
import SearchInput from '../Search/SearchInput';
import SearchResults from '../Search/SearchResults';


const Main = () => (
    <main className="app__main">
        <Grid>
            <Row>
                <Col xs={24}>
                    <SearchInput />
                    <SearchResults />
                </Col>
            </Row>
        </Grid>
    </main>
);

export default Main;
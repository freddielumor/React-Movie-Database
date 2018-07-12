import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

const Footer = () => (
    <footer className="app__footer">
        <Grid>
            <Row>
                <Col xs={24}>
                    <p>React Movie Database. Data from the TMBD API </p>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
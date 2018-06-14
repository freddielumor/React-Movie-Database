import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

const Footer = () => (
    <footer className="app__footer">
        <Grid>
            <Row>
                <Col xs={24}>
                    <p>Developed by Freddie</p>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
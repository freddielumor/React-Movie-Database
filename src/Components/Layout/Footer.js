import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import './Footer.scss';

const Footer = () => (
    <footer className="app__footer">
        <Grid>
            <Row>
                <Col xs={24}>
                    <p>Data from the <a href="https://www.themoviedb.org/" target="_blank"> TMBD API</a>.  Made by <a className="app__footer--freddie" href="https://github.com/freddielumor" target="_blank">Freddie</a></p>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
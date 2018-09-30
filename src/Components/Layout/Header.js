import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    Nav,
    Icon,
    Divider
} from 'rsuite';
import './Header.scss';

// Components
import Search from '../../Components/Search/Search';


const Header = () => (
    <header className="app__header">
        <Grid>
            <Row>
                <Col xs={24}>
                    <h1><a className="app__header--headline" href="/"> React Movie Database</a></h1>
                    <p>Made by <a className="app__footer--freddie" href="https://github.com/freddielumor" target="_blank">Freddie</a></p>
                    <Divider className="app__divider" />
                    <Search />
                    {/* <Nav>
                        <Nav.Item
                            icon={<Icon icon="home" />}
                            componentClass={Link}
                            to="/"
                        >
                            Home
                    </Nav.Item>
                        <Nav.Item
                            componentClass={Link}
                            to="/new-releases"
                        >
                            New
                    </Nav.Item>
                        <Nav.Item
                            componentClass={Link}
                            to="/categories"
                        >
                            Categories
                    </Nav.Item>
                    </Nav> */}
                </Col>
            </Row>
        </Grid>

    </header>
);

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    Nav,
    Dropdown,
    Icon,
    Divider
} from 'rsuite';
import './Header.scss';


const Header = () => (
    <header className="app__header">
        <Grid>
            <Row>
                <Col xs={24}>
                    <h1 className="">React Movie Database</h1>
                    <Divider className="app__divider" />
                    <Nav>
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
                    </Nav>
                </Col>
            </Row>
        </Grid>

    </header>
);

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Dropdown, Icon } from 'rsuite';
import { Divider } from 'rsuite';

const Header = () => (
    <header className="app__header">
        <div className="row">
            <div className="col s12">
                <h1 className="">React Movie Database!</h1>
                <Divider />
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
            </div>
        </div>
    </header>
);

export default Header;
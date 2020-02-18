import React from "react";
import { Grid, Row, Col, Divider } from "rsuite";
import "./Header.scss";

const Header = () => (
  <header className="app__header">
    <Grid>
      <Row>
        <Col xs={24}>
          <h1>
            <a
              className="app__header--headline"
              href="/"
              data-testid="appHeader"
            >
              React Movie Database
            </a>
          </h1>
          <p data-testid="appAuthor">
            Made by{" "}
            <a
              className="app__header--freddie"
              href="https://github.com/freddielumor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freddie
            </a>
          </p>
          <Divider className="app__divider" />
        </Col>
      </Row>
    </Grid>
  </header>
);

export default Header;

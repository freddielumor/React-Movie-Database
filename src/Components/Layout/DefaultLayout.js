import React, { Component } from 'react';
import { Container, Grid, Row, Col } from 'rsuite';

// Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="layout">
          <Header />
          <Main />
          <Footer />
      </div>
    )
  }
}

export default DefaultLayout;
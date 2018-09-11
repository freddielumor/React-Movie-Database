import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getMovieList } from '../../Redux/Actions/getMovieListAction';

// Components
import MovieCard from './MovieCard';

class MovieList extends Component {

    // Populate movie list on page load
    componentDidMount() {
        this.props.getMovieList();
    }

    render() {
        const { movieList } = this.props;

        // Map over results & return data
        let movieListMapped = movieList.map((item, index) => {
            return (
                <Col xs={12} md={6} key={index}>
                    <MovieCard
                        id={item.id}
                        image={item.poster_path}
                        title={item.title}
                        description={item.overview}
                        releaseDate={item.release_date}
                    />
                </Col>
            );
        });

        return (
            <div className="movie-list">
                <Grid fluid>
                    <Row>
                        <Col xs={24}><h2>Latest Releases</h2></Col>
                    </Row>
                    <Row>
                        {movieListMapped}
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovieList
}, dispatch);

const mapStateToProps = state => ({
    movieList: state.movieList.movieList
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
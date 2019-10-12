import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { connect } from 'react-redux';
import { getMovieList } from '../../Redux/Actions/getMovieListAction';

// Components
import MovieCard from './MovieCard';

class MovieList extends Component {

    componentDidMount() {
        // Get movies if not already loaded
        if (!this.props.isLoaded) {
            this.props.getMovieList('https://api.themoviedb.org/3/discover/movie?api_key=e0c15850977d1058ff053d4726ac46f1&language=en-US&page=1&include_adult=false');
        }
    }

    render() {
        const { movies, isLoaded } = this.props;

        // Movie Loading State
        if (!isLoaded) {
            return <h1 style={{ color: '#fff' }}>Loading...</h1>
        }

        // Map over results & return data
        let movieListMapped = movies.map((item, index) => {
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

const mapDispatchToProps = {
  getMovieList
};

const mapStateToProps = state => ({
    movies: state.movieList.movies,
    isLoaded: state.movieList.moviesLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { Grid, Row, Col } from "rsuite";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../Redux/Actions/getMovieListAction";

// Components
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  const moviesLoaded = useSelector(state => state.movieList.moviesLoaded);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieList.movies);

  useEffect(() => {
    if (!moviesLoaded) {
      dispatch(getMovieList());
    }
  }, [dispatch, moviesLoaded]);

  // Movie Loading State
  if (!moviesLoaded) {
    return <h1 style={{ color: "#fff" }}>Loading...</h1>;
  }

  const movieListMapped = movies.map(item => (
    <Col xs={12} md={6} key={item.id}>
      <MovieCard
        id={item.id}
        image={item.poster_path}
        title={item.title}
        description={item.overview}
        releaseDate={item.release_date}
      />
    </Col>
  ));

  return (
    <div className="movie-list">
      <Grid fluid>
        <Row>
          <Col xs={24}>
            <h2>Latest Releases</h2>
          </Col>
        </Row>
        <Row>{movieListMapped}</Row>
      </Grid>
    </div>
  );
};

// MovieList.propTypes = {
//   moviesLoaded: PropTypes.bool,
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       image: PropTypes.string,
//       title: PropTypes.string,
//       description: PropTypes.string,
//       releaseDate: PropTypes.string
//     })
//   ),
//   getMovieList: PropTypes.func
// };

// MovieList.defaultProps = {
//   moviesLoaded: false,
//   movies: [],
//   getMovieList: undefined
// };

export default MovieList;

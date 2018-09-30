import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getMovieData } from '../../Redux/Actions/getMovieDataAction';
import './MoviePage.scss';

// Components
import MovieCast from '../../Components/Movies/MovieCast';
import Swiper from 'react-id-swiper';

class MoviePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieId: ''
        };
        this.goNext = this.goNext.bind(this);
        this.goPrev = this.goPrev.bind(this);
        this.swiper = null;
    }

    // Get movie id when page is loaded
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.setState({
            movieId: movieId
        }, () => {
            this.props.getMovieData(movieId)
        });
    }

    // componentWillReceiveProps = (nextProps, movieId) => {
    //     if (nextProps.movie !== this.props.movie) {
    //         // this.props.getMovieData(movieId)
    //         console.log('get data')
    //     }
    // }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }

    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    render() {

        const { movie } = this.props;
        const { title, poster_path, release_date, overview } = this.props.movie;
        const { credits } = this.props.movie;
        const Background = `https://image.tmdb.org/t/p/w1280${this.props.movie.backdrop_path}`;

        console.log({ movie });
        console.log({ credits });

        const params = {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        };

        let movieCast = [];
        if (credits !== undefined || null) {
            credits.cast.slice(0, 10).map((item, index) => {
                movieCast.push(
                    <div key={index}>
                        <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`} alt={`${item.name} image`} />
                        <p>{item.name}</p>
                        <p>{item.character}</p>
                    </div>
                )
            });
        }

        // console.log({ movieCast });

        return (
            <div className="movie-page">
                <Grid fluid>
                    <Row>
                        <Col>
                            <div className="movie-page__hero" style={{
                                backgroundImage: `url(${Background})`
                            }}></div>
                            <div className="movie-page__details">
                                <div className="movie-page__details--poster">
                                    <img src={poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title} poster`} />
                                </div>
                                <div className="movie-page__details--content">
                                    <h1 className="movie-page__details--title">{title}</h1>
                                    <h1 className="movie-page__details--release">{release_date}</h1>
                                    <p className="movie-page__details--description">{overview}</p>
                                </div>
                            </div>
                            <div className="movie-page__cast">
                                <h2>Cast</h2>
                                <Swiper {...params}>
                                    {movieCast}
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovieData
}, dispatch);

const mapStateToProps = state => ({
    movie: state.movieData.movie
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
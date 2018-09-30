import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './MovieCast.scss';

class MovieCast extends Component {
    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }

    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    render() {
        const { name, character, image, item, movieCredits } = this.props;
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

        return (
            <div className="movie-cast">

                {movieCredits.cast.slice(0, 10).map((item, index) => {
                    return (

                        <Swiper {...params}>
                            <div key={index}>
                                <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`} alt={`${item.name} image`} />
                                <p>{item.name}</p>
                                <p>{item.character}</p>
                            </div>
                        </Swiper>
                    )
                })}
            </div>
        )
    }
}

export default MovieCast;

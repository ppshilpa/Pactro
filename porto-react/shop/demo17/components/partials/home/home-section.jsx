import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Keyframes
import { fadeIn, blurIn } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="section-1 pt-0">
            <OwlCarousel adClass="home-slider show-nav-hover">
                <div className="home-banner bg-img banner-left" style={ { backgroundImage: 'url(images/home/slider/slide-1.jpg)', backgroundColor: '#c0bec1' } }>
                    <div className="container position-relative">
                        <div className="banner-layer banner-layer-middle">
                            <Reveal keyframes={ fadeIn } delay={ 800 } duration={ 1200 } >
                                <h2 className="m-b-1 banner-title">New Hot Cosmetics</h2>
                            </Reveal>

                            <Reveal keyframes={ blurIn } delay={ 800 } duration={ 1200 } >
                                <h3 className="text-uppercase rotated-upto-text mb-0 position-relative">
                                    <small>Up to</small>50% Off</h3>
                            </Reveal>

                            <Reveal keyframes={ fadeIn } delay={ 800 } duration={ 1200 } >
                                <hr className="divider-short-thick" />
                            </Reveal>

                            <Reveal className="d-inline-block" keyframes={ fadeIn } delay={ 1600 } duration={ 1200 } >
                                <h5 className="text-uppercase d-inline-block ls-n-20 pr-1 pt-2">Starting at
                                    <span className="ml-2">$
                                        <strong>1</strong>99</span>
                                </h5>
                            </Reveal>

                            <Reveal className="d-inline-block" keyframes={ fadeIn } delay={ 2200 } duration={ 1200 } >
                                <ALink href="/shop" className="btn btn-dark btn-xl btn-icon-right"
                                    role="button" >Shop Now
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="home-banner bg-img" style={ { backgroundImage: 'url(images/home/slider/slide-2.jpg)', backgroundColor: '#c0bec1' } }>
                    <div className="container position-relative">
                        <div className="banner-layer banner-layer-middle">
                            <Reveal keyframes={ fadeIn } delay={ 800 } duration={ 1200 } >
                                <h2 className="m-b-1 banner-title" data-animation-name="fadeIn">Deals are Here!</h2>
                            </Reveal>

                            <Reveal keyframes={ blurIn } delay={ 800 } duration={ 1200 } >
                                <h3 className="text-uppercase rotated-upto-text mb-0 position-relative">
                                    <small>Up to</small>50% Off</h3>
                            </Reveal>

                            <Reveal keyframes={ fadeIn } delay={ 800 } duration={ 1200 } >
                                <hr className="divider-short-thick" />
                            </Reveal>

                            <Reveal className="d-inline-block" keyframes={ fadeIn } delay={ 800 } duration={ 1200 } >
                                <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">Starting at
                                    <span className="ml-2">$
                                        <strong>1</strong>99</span>
                                </h5>
                            </Reveal>

                            <Reveal className="d-inline-block" keyframes={ fadeIn } delay={ 2200 } duration={ 1200 } >
                                <ALink href="/shop" className="btn btn-dark btn-xl btn-icon-right"
                                    role="button">Shop Now<i className="fas fa-long-arrow-alt-right"></i>
                                </ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>

    );
}

export default React.memo( HomeSection );
import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter, fadeInLeftShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="intro-section mb-3">
            <OwlCarousel adClass="home-slider show-nav-hover dot-inside" options={ HomeSlider }>
                <div className="home-slide home-slide-1 banner">
                    <figure className="mb-0">
                        <LazyLoadImage
                            alt="Home Slide"
                            src="images/home/slider/slide-1.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>

                    <div className="banner-layer banner-layer-middle banner-layer-left">
                        <div className="container-fluid">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 }>
                                <h2 className="font-weight-light ls-10 text-primary">Discover our Arrivals!</h2>
                                <ALink href="/shop" className="btn btn-link">
                                    <i>View our Dresses</i>
                                    <i className="icon-right-open-big"></i>
                                </ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="home-slide home-slide-2 banner">
                    <figure className="mb-0">
                        <LazyLoadImage
                            alt="Home Slide"
                            src="images/home/slider/slide-2.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>

                    <div className="banner-layer banner-layer-middle banner-layer-right w-100">
                        <div className="container-fluid">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 }>
                                <div className="col-6 offset-6">
                                    <h2 className="font-weight-light ls-10 text-primary">Trendy Collections!</h2>
                                    <ALink href="/shop" className="btn btn-link">
                                        <i>View our Specials</i>
                                        <i className="icon-right-open-big"></i>
                                    </ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInLeftShorter, slideInRight, fadeInUpShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection() {
    return (
        <div className="container">
            <div className="home-slider-container">
                <OwlCarousel adClass="home-slider owl-theme owl-theme-light nav-outer show-nav-hover" options={HomeSlider}>
                    <div className="home-slide">
                        <figure>
                            <LazyLoadImage
                                className="slide-bg"
                                alt="slider image"
                                src="images/home/slider/slide-1.jpg"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="home-slide-content sale-banner">
                            <Reveal keyframes={fadeInLeftShorter} delay={100} duration={1000}>
                                <div className="row no-gutter bg-primary">
                                    <div className="col-auto col-md-6 d-flex flex-column justify-content-center col-1">
                                        <Reveal keyframes={slideInRight} delay={400} duration={1000}>
                                            <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                                        </Reveal>
                                        <Reveal keyframes={slideInRight} delay={400} duration={1000}>
                                            <h3 className="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                                        </Reveal>
                                    </div>
                                    <div className="col-auto col-md-6 col-2">
                                        <Reveal keyframes={slideInRight} delay={400} duration={1000}>
                                            <h2 className="text-white mb-0 position-relative align-left">
                                                50<small>%<ins>OFF</ins></small>
                                            </h2>
                                        </Reveal>
                                    </div>
                                </div>
                            </Reveal>
                            <div className="mb-0 text-right">
                                <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000}>
                                    <ALink href="/shop" className="btn btn-lg btn-dark">Shop Now!</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide home-slide-left">
                        <figure>
                            <LazyLoadImage
                                className="slide-bg"
                                alt="slider image"
                                src="images/home/slider/slide-2.jpg"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="home-slide-content slide-content-dark sale-banner">
                            <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000}>
                                <div className="row no-gutter bg-secondary">
                                    <div className="col-auto col-md-6 d-flex flex-column justify-content-center col-1">
                                        <Reveal keyframes={slideInRight} delay={300} duration={1000}>
                                            <h4 className="align-left text-uppercase mb-0">Home office sale</h4>
                                        </Reveal>
                                        <Reveal keyframes={slideInRight} delay={300} duration={1000}>
                                            <h3 className="text-white mb-0 align-left text-uppercase">mega off</h3>
                                        </Reveal>
                                    </div>

                                    <div className="col-auto col-md-6 col-2">
                                        <Reveal keyframes={slideInRight} delay={300} duration={1000}>
                                            <h2 className="text-white mb-0 position-relative align-left">
                                                50<small>%<ins>OFF</ins></small>
                                            </h2>
                                        </Reveal>
                                    </div>
                                </div>
                            </Reveal>
                            <div className="mb-0">
                                <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000}>
                                    <ALink href="/shop" className="btn btn-lg btn-primary">Shop Now!</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default React.memo(HomeSection);
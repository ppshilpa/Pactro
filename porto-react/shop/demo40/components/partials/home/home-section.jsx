import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter, fadeInDownShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="home-section mb-2">
            <div className="row">
                <div className="col-md-12 col-xl-8 col-lg-12 mb-xl-0 mb-2">
                    <OwlCarousel adClass="home-slider show-nav-hover dot-inside nav-big h-100 text-uppercase" options={ HomeSlider }>
                        <div className="home-slide home-slide1 banner">
                            <figure className="h-100 mb-0">
                                <LazyLoadImage
                                    alt="Home Slide"
                                    src="images/home/slider/slide-1.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>

                            <div className="container d-flex align-items-center">
                                <div className="banner-layer d-flex flex-column">
                                    <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                        <h6 className="text-transform-none">Exclusive Product New Arrival</h6>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                        <h2 className="text-transform-none">Condensed Milk</h2>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                        <h3>NATURAL PRODUCT</h3>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                        <span className="custom-font text-transform-none"><span>Extra!</span></span>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1400 } duration={ 1000 } triggerOnce>
                                        <h5>BREAKFAST PRODUCTS ON SALE</h5>
                                    </Reveal>

                                    <Reveal className="d-inline-block ml-auto" keyframes={ fadeInRightShorter } delay={ 1800 } duration={ 1000 } triggerOnce>
                                        <h4 className="d-inline-block">
                                            <sup>UP TO</sup>
                                            <b className="coupon-sale-text ls-10 text-white align-middle">50%</b>
                                        </h4>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                        <div className="home-slide home-slide2 banner banner-md-vw">
                            <figure className="h-100 mb-0">
                                <LazyLoadImage
                                    alt="Home Slide"
                                    src="images/home/slider/slide-2.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>

                            <div className="container d-flex align-items-center">
                                <div className="container d-flex align-items-center">
                                    <div className="banner-layer d-flex flex-column text-right">
                                        <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                            <h6 className="text-transform-none">Exclusive Whole Wheat</h6>
                                        </Reveal>

                                        <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                            <h2 className="text-transform-none">Fluffy Pancakes</h2>
                                        </Reveal>

                                        <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                            <h3>GOOD OLD FASHIONED</h3>
                                        </Reveal>

                                        <Reveal keyframes={ fadeInUpShorter } delay={ 1400 } duration={ 1000 } triggerOnce>
                                            <h5>BREAKFAST PRODUCTS ON SALE</h5>
                                        </Reveal>

                                        <Reveal className="d-inline-block" keyframes={ fadeInRightShorter } delay={ 1800 } duration={ 1000 } triggerOnce>
                                            <h4 className="d-inline-block">
                                                <sup>UP TO</sup>
                                                <b
                                                    className="coupon-sale-text ls-10 text-white align-middle">50%</b>
                                            </h4>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="col-md-12 col-xl-4 col-lg-12 d-sm-flex d-xl-block">
                    <div className="banner banner1 mb-2 pr-sm-3 pr-0 pr-xl-0">
                        <figure className="h-100 mb-0">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/banners/banner-1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="container d-flex align-items-center">
                            <div className="banner-layer d-flex flex-column pt-0">
                                <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                    <h6 className="text-transform-none mb-1">Exclusive Product New Arrival</h6>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                    <h2 className="text-transform-none">Organic Coffee</h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                    <h3>SPECIAL BLEND</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                    <span className="custom-font text-transform-none"><span>Fresh!</span></span>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    <div className="banner banner2 pl-sm-3 pl-0 pl-xl-0">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/banners/banner-2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="container d-flex align-items-center">
                            <div className="banner-layer d-flex flex-column">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <h6 className="text-transform-none mb-1">Stay Healthy</h6>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                                    <h2 className="text-transform-none text-white ml-0">Low Carb</h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                                    <h3 className="text-white">STRAWBERRY</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 1200 } duration={ 1000 } triggerOnce>
                                    <span className="custom-font text-transform-none"><span
                                        className="text-white text-transform-none">Sugar-Free</span></span>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( HomeSection );
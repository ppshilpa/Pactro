import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="intro-section mb-3">
            <OwlCarousel adClass="home-slider dot-inside show-nav-hover custom-nav-1 mb-4 text-uppercase" options={ HomeSlider }>
                <div className="home-slide home-slide1 banner">
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

                    <div className="container d-flex align-items-center">
                        <Reveal className="banner-layer" keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 }>
                            <>
                                <h2 className="text-transform-none">Porto wine</h2>
                                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                    <h3 className="text-capitalize ml-2">2016 Cabernet Sauvignon</h3>
                                </Reveal>
                                <h4 className="text-transform-none ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                quam lacus, et suscipit lectus porta efficitur.</h4>
                                <h5 className="d-flex ml-2 ml-lg-3">
                                    <span className="text-transform-none">only</span>
                                    <b className="coupon-sale-text text-white align-middle text-primary font2"><sup>$</sup><em>39</em><sup>99</sup></b>
                                </h5>

                                <ALink href="/shop" className="btn btn-lg ml-2 ml-lg-3">Shop Now</ALink>
                            </>
                        </Reveal>
                    </div>
                </div>

                <div className="home-slide home-slide2 banner">
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

                    <div className="container d-flex align-items-center">
                        <Reveal className="banner-layer" keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 }>
                            <>
                                <h2 className="text-transform-none">Rare Wines</h2>
                                <h3 className="text-capitalize ml-2">The Top Selection</h3>
                                <h4 className="text-transform-none ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. quam lacus, et suscipit lectus porta efficitur.</h4>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                    <h5 className="d-flex justify-content-end ml-3">
                                        <span className="text-transform-none">Starting at</span>
                                        <b className="coupon-sale-text text-white align-middle text-primary font2"><sup>$</sup><em>99</em><sup>99</sup></b>
                                    </h5>
                                </Reveal>

                                <ALink href="/shop" className="btn btn-lg ml-3">Shop Now</ALink>
                            </>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );
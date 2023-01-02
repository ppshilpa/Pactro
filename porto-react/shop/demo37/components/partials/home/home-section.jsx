import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInLeftShorter, fadeInUpShorter, fadeInRightShorter, fadeIn } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <OwlCarousel adClass="home-slider slide-animate show-nav-hover nav-big mb-2 text-uppercase" options={ HomeSlider }>
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
                    <div className="banner-layer">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } >
                            <h4 className="text-transform-none">Find the Boundaries. Push Through!</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } >
                            <h2 className="text-transform-none mb-0">SUNGLASSES</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } duration={ 1000 } >
                            <img src="images/home/banners/icon1.png" width="255" height="25" alt="Image" />
                        </Reveal>

                        <div className="d-flex">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } duration={ 1000 } >
                                <ALink href="/shop" className="btn btn-dark btn-lg">Shop Now!</ALink>
                            </Reveal>

                            <h5 className="d-inline-block mb-0">
                                <Reveal className="d-inline-block" keyframes={ fadeInLeftShorter } delay={ 900 } duration={ 1000 } >
                                    <span >Starting At</span>
                                </Reveal>

                                <Reveal className="d-inline-block" keyframes={ fadeIn } delay={ 1400 } duration={ 1000 } >
                                    <b className="coupon-sale-text text-white bg-secondary"><sup>$</sup><em
                                        className="align-text-top">99</em><sup>99</sup></b>
                                </Reveal>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-slide home-slide2 banner banner-md-vw">
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
                    <div className="banner-layer">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } >
                            <h4 className="text-transform-none">Take Your Chill Up a Level</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } >
                            <h2 className="text-transform-none mb-0">CASUAL WEAR</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } >
                            <img src="images/home/banners/icon1.png" width="255" height="25" alt="Image" />
                        </Reveal>

                        <div className="d-flex">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 1400 } duration={ 1000 } >
                                <ALink href="/shop" className="btn btn-dark btn-lg">Shop Now!</ALink>
                            </Reveal>
                            <h5 className="d-inline-block mb-0">
                                <Reveal className="d-inline-block" keyframes={ fadeInRightShorter } delay={ 900 } duration={ 1000 } >
                                    <span>Starting At</span>
                                </Reveal>

                                <Reveal className="d-inline-block" keyframes={ fadeIn } delay={ 600 } duration={ 1000 } >
                                    <b className="coupon-sale-text text-white bg-secondary align-middle"><sup>$</sup><em
                                        className="align-text-top">99</em><sup>99</sup></b>
                                </Reveal>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo( HomeSection );
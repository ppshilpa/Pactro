import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <OwlCarousel adClass="home-slider show-nav-hover nav-big text-uppercase" options={ HomeSlider }>
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
                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                            <h4 className="text-transform-none mb-0">Find the Boundaries. Push Through!</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 }>
                            <h2 className="text-transform-none line-height-1 m-b-1">Smartphones</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 }>
                            <h3 className="line-height-1 m-b-3">70% Off</h3>
                        </Reveal>

                        <Reveal className="d-inline-block" keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark btn-xl ls-10">Shop Now!</ALink>
                        </Reveal>

                        <h5 className="float-right mb-0">
                            <Reveal className="d-inline-block" keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1000 }>
                                <span className="d-inline-block align-top line-height-1 ls-n-20 m-b-4">Starting At</span>
                            </Reveal>

                            <Reveal className="d-inline-block" keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 }>
                                <b className="coupon-sale-text d-inline-block ls-n-20 text-white bg-secondary m-b-1"><sup>$</sup>199<sup>99</sup></b>
                            </Reveal>
                        </h5>
                    </div>
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
                    <div className="banner-layer">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                            <h4>It's the best time of the year!</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 }>
                            <h2 className="text-transform-none line-height-1 m-b-1">Hot Collections</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 }>
                            <h3 className="line-height-1 m-b-3">50% Off</h3>
                        </Reveal>

                        <Reveal className="d-inline-block" keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark btn-xl ls-10">Shop Now!</ALink>
                        </Reveal>

                        <h5 className="float-right mb-0">
                            <Reveal className="d-inline-block" keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 }>
                                <span className="d-inline-block align-top line-height-1 ls-n-20 m-b-4">Starting At</span>
                            </Reveal>

                            <Reveal className="d-inline-block" keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1000 }>
                                <div className="d-inline-block m-b-1">
                                    <b className="coupon-sale-text d-inline-block ls-n-20 text-white bg-secondary"><sup>$</sup>199<sup>99</sup></b>
                                </div>
                            </Reveal>
                        </h5>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo( HomeSection );
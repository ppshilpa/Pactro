import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="home-slider-container">
            <OwlCarousel adClass="home-slider show-nav-hover nav-large nav-outer no-loop" options={ HomeSlider }>
                <div className="home-slide home-slide1 banner banner-md-vw-small banner-sm-vw-small media-with-lazy" style={ { background: '#dddbdc' } }>
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

                    <div className="banner-layer banner-layer-middle">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1000 }>
                            <h2 className="ls-n-20">Spring / Summer Season</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1000 }>
                            <h3><em className="text-center ls-0">up <br />to</em>50% OFF</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1000 } className="d-md-inline-block align-top">
                            <h4 className="text-uppercase mb-0  pt-2">Starting at
                                    <span className="text-primary">$ <em>19</em>99</span>
                            </h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1000 } className="d-inline-block">
                            <ALink href="/shop" className="btn btn-dark btn-outline btn-xl mt-1">Shop Now</ALink>
                        </Reveal>
                    </div>
                </div>

                <div className="home-slide home-slide2 banner banner-md-vw-small banner-sm-vw-small media-with-lazy" style={ { background: '#dddbdc' } }>
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

                    <div className="banner-layer banner-layer-middle banner-layer-right">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1000 }>
                            <h2 className="mb-0">EXTRA</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1000 }>
                            <h3 className="m-b-2">20% OFF</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1000 }>
                            <h3 className="mb-2 off-category">ACCESSORIES</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-block btn-dark">Shop All Sale</ALink>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );
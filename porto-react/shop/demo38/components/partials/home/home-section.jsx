import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeInLeftShorter, zoomInShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    function setParallax () {
        let parallax = document.querySelector( ".parallax" );
        if ( parallax ) {
            let y = ( parallax.getBoundingClientRect().top - window.pageYOffset ) / 50;
            parallax.style.transform = `translate3d(0px, ${y}%, 0px)`;
        }
    }

    return (
        <section className="intro-section mb-3">
            <OwlCarousel adClass="home-slider slide-animate show-nav-hover curve-style dot-inside mb-2" options={ HomeSlider }>
                <div className="home-slide home-slide1 banner media-with-lazy">
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
                        <div className="banner-layer row align-items-center justify-content-center mr-0 ml-0">
                            <div className="col-lg-6 col-xl-6 col-md-12 p-0 content-left text-center text-md-left mb-6">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 }>
                                    <h4 className="text-transform-none">Shop for our products at exclusive prices</h4>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 }>

                                    <h3 className="text-transform-none">Infrared Thermometers</h3>
                                </Reveal>
                                <Reveal keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 }>

                                    <h2 className="text-uppercase">70% Off</h2>
                                </Reveal>
                                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 }>
                                    <ALink href="/shop" className="btn btn-primary btn-lg mr-0 ml-0">Shop Now!</ALink>
                                </Reveal>
                            </div>

                            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-4 col-6 p-0 content-center mr-0 ml-0">
                                <Reveal keyframes={ zoomInShorter } delay={ 800 } duration={ 1000 }>
                                    <div className="thumb parallax  " style={ { backgroundImage: 'url(images/home/slider/thermometer.png)' } }></div>
                                </Reveal>
                            </div>


                            <Reveal className="col-lg-3 col-xl-3 col-md-12 col-sm-4 col-6 pr-0 content-right mr-0 ml-0" keyframes={ fadeInLeftShorter } delay={ 280 } duration={ 1000 }>
                                <>
                                    <img src="images/home/slider/fda.png" className="w-auto mb-3"
                                        alt="Slider Thumb" />

                                    <ul className="text-capitalize">
                                        <li><i className="fa fa-check"></i>Non-Contact Temperature Taking</li>
                                        <li><i className="fa fa-check"></i>Get Readings in Only 1 Second</li>
                                        <li><i className="fa fa-check"></i>Fever Alarm at 100°F</li>
                                    </ul>

                                    <span className="d-block">from <span className="old-price">$299.99</span></span>
                                    <h5 className="d-inline-flex align-items-center mb-0">
                                        <span>to</span>
                                        <b className="coupon-sale-text text-white align-middle d-block"><sup>$</sup><em
                                            className="align-text-top">199</em><sup>99</sup></b>
                                    </h5>
                                </>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="home-slide home-slide2 banner media-with-lazy">
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

                    <div className="container d-flex align-items-center justify-content-center">
                        <Reveal className="banner-layer mr-0 ml-0" keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 }>
                            <>
                                <h4 className="text-transform-none">Shop for our products at exclusive prices</h4>
                                <h3 className="text-transform-none">Pro Respirator Mask</h3>
                                <h2 className="text-uppercase">50% Off</h2>
                                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                                    <ALink href="/shop" className="btn btn-primary btn-lg mr-0 ml-0">Shop Now!</ALink>
                                </Reveal>
                            </>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );
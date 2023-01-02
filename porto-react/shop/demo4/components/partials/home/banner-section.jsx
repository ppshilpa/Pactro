import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { bannerSlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function BannerSection () {
    return (
        <div className="banners-container mb-2">
            <OwlCarousel adClass="banners-slider" options={ bannerSlider }>
                <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                    <div className="banner banner1 banner-sm-vw d-flex align-items-center">
                        <figure className="w-100">
                            <div className="lazy-overlay"></div>

                            <LazyLoadImage
                                alt="slider image"
                                src="images/home/banners/banner-1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height={ 175 }
                            />
                        </figure>
                        <div className="banner-layer">
                            <h3 className="m-b-2">Porto Watches</h3>
                            <h4 className="m-b-3 text-primary"><sup
                                className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                            <ALink href="/shop" className="btn btn-sm btn-dark">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="banner banner2 banner-sm-vw text-uppercase d-flex align-items-center">
                        <figure className="w-100">
                            <div className="lazy-overlay"></div>

                            <LazyLoadImage
                                alt="slider image"
                                src="images/home/banners/banner-2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height={ 175 }
                            />
                        </figure>
                        <div className="banner-layer text-center">
                            <div className="row align-items-lg-center">
                                <div className="col-lg-7 text-lg-right">
                                    <h3>Deal Promos</h3>
                                    <h4 className="pb-4 pb-lg-0 mb-0 text-body">Starting at $99</h4>
                                </div>
                                <div className="col-lg-5 text-lg-left px-0 px-xl-3">
                                    <ALink href="/shop" className="btn btn-sm btn-dark">Shop Now</ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="banner banner3 banner-sm-vw d-flex align-items-center">
                        <figure className="w-100">
                            <div className="lazy-overlay"></div>

                            <LazyLoadImage
                                alt="slider image"
                                src="images/home/banners/banner-3.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height={ 175 }
                            />
                        </figure>
                        <div className="banner-layer text-right">
                            <h3 className="m-b-2">Handbags</h3>
                            <h4 className="m-b-2 text-secondary text-uppercase">Starting at $99</h4>
                            <ALink href="/shop" className="btn btn-sm btn-dark">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </div>
    );
}

export default React.memo( BannerSection );
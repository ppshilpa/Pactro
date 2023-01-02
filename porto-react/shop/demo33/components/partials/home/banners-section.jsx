import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { bannerSlider } from '../../../utils/data/slider';
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function BannersSection () {
    return (
        <div className="banners-section bg-gray">
            <div className="container mb-2">
                <OwlCarousel adClass="banners-slider" options={ bannerSlider }>
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                        <div className="banner banner-sm-vw-large media-with-lazy">
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-1.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-top">
                                <h3>Women's Bags &amp; Purses</h3>
                                <h4>
                                    <del className="">20%</del>
                                    <strong className="text-primary">30%</strong>
                                </h4>
                            </div>

                            <div className="banner-layer banner-layer-bottom">
                                <ALink href={ { pathname: '/shop', query: { category: 'bags-2' } } } className="btn btn-dark btn-lg">Shop Now</ALink>
                            </div>

                            <div className="banner-layer banner-layer-bottom banner-layer-right">
                                <img src="images/home/banners/brand-1.jpg" width="67" height="21" alt="brand" className="banner-layer-vertical-item w-auto" />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 250 } duration={ 1000 } triggerOnce>
                        <div className="banner banner-sm-vw-large text-center media-with-lazy">
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-2.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-top">
                                <h3>Women's Shoes</h3>
                            </div>

                            <div className="banner-layer banner-layer-circle">
                                <h4 className="banner-layer-circle-item bg-primary">40
                                    <sup>%</sup>
                                </h4>
                            </div>

                            <div className="banner-layer banner-layer-bottom">
                                <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } } className="btn btn-dark btn-lg">Shop Now</ALink>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                        <div className="banner banner-sm-vw-large text-right media-with-lazy">
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-3.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-top">
                                <h3>Men's Leather Belt</h3>
                                <h4 className="right-text">
                                    <del>30%</del>
                                    <strong className="text-primary">50%</strong>
                                </h4>
                            </div>

                            <div className="banner-layer banner-layer-bottom">
                                <ALink href={ { pathname: '/shop', query: { category: 'belt' } } } className="btn btn-dark btn-lg">Shop Now</ALink>
                            </div>

                            <div className="banner-layer banner-layer-bottom banner-layer-left">
                                <img src="images/home/banners/brand-3.jpg" width="70" height="18" alt="brand" className="banner-layer-vertical-item" />
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default React.memo( BannersSection );
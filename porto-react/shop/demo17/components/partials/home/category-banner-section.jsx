import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { bannerSlider } from '../../../utils/data/slider';
import { fadeInRightShorter } from '../../../utils/data/keyframes';

function CategoryBannerSection () {
    return (
        <section className="section-3 category-banner-section container ">
            <OwlCarousel adClass="categories-slider owl-theme nav-outer show-nav-hover" options={ bannerSlider }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="cat-banner bg-dark">
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-1.png"
                                width="100%"
                                height={ 60 }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="w-auto"
                            />
                        </figure>

                        <div className="cat-content d-inline-block position-relative">
                            <h3 className="text-uppercase rotated-upto-text mb-0">
                                <small className="m-0">Up to</small>50% Off</h3>

                            <hr className="divider-short-thick" />

                            <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">Starting at
                                <span className="ml-1">$
                                    <strong className="ml-1">3</strong>99</span>
                            </h5>
                            <ALink href="/shop" className="btn btn-xl btn-icon-right" role="button">Shop Now
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </ALink>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                    <div className="cat-banner bg-dark">
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-2.png"
                                width="100%"
                                height={ 60 }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="w-auto"
                            />
                        </figure>

                        <div className="cat-content d-inline-block position-relative">
                            <h3 className="text-uppercase rotated-upto-text mb-0">
                                <small>Up to</small>60% Off</h3>

                            <hr className="divider-short-thick" />

                            <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">Starting at
                                <span className="ml-1">$
                                    <strong className="ml-1">4</strong>99</span>
                            </h5>
                            <ALink href="/shop" className="btn text-dark btn-xl btn-icon-right" role="button">Shop Now
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </ALink>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                    <div className="cat-banner bg-dark">
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-3.png"
                                width="100%"
                                height={ 60 }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="w-auto"
                            />
                        </figure>

                        <div className="cat-content d-inline-block position-relative">
                            <h3 className="text-uppercase rotated-upto-text mb-0">
                                <small>Up to</small>70% Off</h3>

                            <hr className="divider-short-thick" />

                            <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">Starting at
                                <span className="ml-1">$
                                    <strong className="ml-1">5</strong>99</span>
                            </h5>
                            <ALink href="/shop" className="btn text-dark btn-xl btn-icon-right" role="button">Shop Now
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </ALink>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>

            <div className="newsletter-section bg-dark mt-4 mb-4">
                <div className="d-flex flex-wrap align-items-center align-items-lg-start">
                    <div
                        className="col-md-6 d-block d-sm-flex text-center text-sm-left news-info justify-content-center justify-content-md-start align-items-start align-items-md-center">
                        <i className="far fa-envelope text-white"></i>

                        <div className="newsletter-content">
                            <h3 className="ls-n-10 mb-0 text-white">Get Special Offers and Savings</h3>
                            <p className="font-weight-normal">Get all the latest information on Events, Sales and
                            Offers.
                                </p>
                        </div>
                    </div>

                    <div className="col-md-6 widget-newsletter px-3">
                        <form action="#" className="d-flex justify-content-center mb-0 ml-auto mr-auto mb-1 mb-md-0">
                            <input type="email" className="form-control mb-0 border-0"
                                placeholder="Email Your E-mail Address..." required />
                            <button className="btn text-dark ls-n-25">SIGN UP</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( CategoryBannerSection );
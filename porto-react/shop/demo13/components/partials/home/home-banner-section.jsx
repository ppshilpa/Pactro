import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function HomeBannerSection() {
    return (
        <div className="home-top-container mt-lg-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 mb-2">
                        <OwlCarousel adClass="home-slider h-100" options={{
                            dots: true,
                            nav: false,
                            loop: false
                        }}>
                            <div className="home-slide home-slide1 banner banner-md-vw  media-with-lazy">
                                <figure className="w-100">
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/slider/slide-1.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle intro-banner">
                                    <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000}>
                                        <>
                                            <h4 className="text-white">Find the Boundaries. Push Through!</h4>
                                            <h2 className="text-white m-b-1">Summer Sale</h2>
                                            <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                            <h5 className="text-white text-uppercase d-inline-block mb-1 pb-1 ls-n-20 align-text-bottom">
                                                Starting At
												<b className="coupon-sale-text bg-secondary text-white d-inline-block">$&nbsp;<em>199</em>99</b>
                                            </h5>
                                            <ALink href="/shop"
                                                className="btn btn-dark btn-md ls-10 align-bottom">Shop Now!</ALink>
                                        </>
                                    </Reveal>
                                </div>
                            </div>
                            <div className="home-slide home-slide2 banner banner-md-vw media-with-lazy">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/slider/slide-2.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle text-uppercase">
                                    <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000}>
                                        <>
                                            <h4 className="text-white m-b-2">Over 200 products with discounts</h4>
                                            <h2 className="text-white m-b-3">Great Deals</h2>
                                            <h5 className="text-white d-inline-block mb-0 align-top pt-2">Starting At
												<b className="ml-2 mr-3"> $ <em>299</em>99</b>
                                            </h5>
                                            <ALink href="/shop" className="btn btn-primary btn-md ls-10">Get
												Yours!</ALink>
                                        </>
                                    </Reveal>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="col-lg-3 top-banners">
                        <div className="row">
                            <div className="col-md-4 col-lg-12">
                                <div className="banner banner1 banner-md-vw-large banner-sm-vw-large mb-2 media-with-lazy">
                                    <figure>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-1.jpg"
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle text-right">
                                        <h3 className="m-b-2">Handbags</h3>
                                        <h4 className="text-secondary text-uppercase">Starting at $99</h4>
                                        <ALink href="/shop" className="text-dark text-uppercase ls-10 d-block">Shop
                                        Now
											</ALink>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-lg-12">
                                <div
                                    className="banner banner2 banner-md-vw-large banner-sm-vw-large text-uppercase mb-2 media-with-lazy">
                                    <figure>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-2.jpg"
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle text-center">
                                        <h3 className="m-b-1 text-primary">Deal Promos</h3>
                                        <h4 className="mb-1 pb-1 text-body">Starting at $99</h4>
                                        <ALink href="/shop" className="text-dark ls-10 pb-1">Shop Now</ALink>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-lg-12">
                                <div className="banner banner3 banner-md-vw-large banner-sm-vw-large mb-2 media-with-lazy">
                                    <figure>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-3.jpg"
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle">
                                        <h3 className="m-b-2">Black Jackets</h3>
                                        <h4 className="text-white text-uppercase">Starting at $99</h4>
                                        <ALink href="/shop" className="text-dark text-uppercase ls-10 pb-1">Shop
                                        Now
											</ALink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(HomeBannerSection);
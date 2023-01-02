import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'

function BannerSection() {
    return (
        <div className="home-top-container">
            <Reveal keyframes={fadeIn} delay={100} duration={300} triggerOnce>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <div className="home-banner banner banner1 banner-md-vw banner-sm-vw d-flex align-items-center">
                                <figure className="w-100">
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        width={549}
                                        height={500}
                                    />
                                </figure>
                                <div className="banner-layer">
                                    <h4 className=" text-white mb-0">Find the Boundaries</h4>
                                    <h2 className="text-white mb-0">Flash Sale</h2>
                                    <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                    <h5 className="text-white text-uppercase ls-n-20 align-text-bottom">
                                        Starting At <b
                                            className="coupon-sale-text bg-secondary text-white d-inline-block">$<em
                                                className="align-text-top">199</em>99</b></h5>
                                    <ALink href="/shop" className="btn bg-white btn-md ls-10">Shop Now!</ALink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-2">
                            <div className="row h-100">
                                <div className="col-lg-12 mb-2">
                                    <div className="banner banner2 banner-hover-shadow d-flex align-items-center">
                                        <figure className="w-100">
                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-2.jpg"
                                                width={275}
                                                height={245}
                                            />
                                        </figure>
                                        <div className="banner-layer">
                                            <h3 className="m-b-2">Porto Watches</h3>
                                            <h4 className="m-b-2 text-secondary"><sup
                                                className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                                            <ALink href="/shop" className="btn btn-dark text-uppercase ls-10">Shop
                                                Now</ALink>
                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/brand-sm.png"
                                                width={48}
                                                height={15}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div
                                        className="banner banner3 text-uppercase banner-hover-shadow d-flex align-items-center">
                                        <figure className="w-100">
                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-3.jpg"
                                                width={275}
                                                height={245}
                                            />
                                        </figure>

                                        <h6 className="banner-label left-label">50<small><sup>%</sup><sub>OFF</sub></small>
                                        </h6>
                                        <h6 className="banner-label right-label">70<small><sup>%</sup><sub>OFF</sub></small>
                                        </h6>
                                        <h6 className="banner-label bottom-label mb-0">
                                            30<small><sup>%</sup><sub>OFF</sub></small>
                                        </h6>

                                        <div className="banner-layer banner-layer-middle text-center">
                                            <h3 className="m-b-1 ls-10">DEAL PROMOS</h3>
                                            <h4 className="ls-0 text-body">STARTING AT $99</h4>
                                            <ALink href="/shop" className="btn btn-dark btn-black ls-10">SHOP NOW</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-2">
                            <div className="banner banner4 text-uppercase banner-hover-shadow d-flex align-items-center">
                                <figure className="w-100">
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-4.jpg"
                                        width={275}
                                        height={500}
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                    <div className="coupon-sale-content">
                                        <h3 className="text-white font1">Leather Jackets</h3>
                                        <h5 className="coupon-sale-text text-white ls-0 p-0"><i className="ls-0 font1">UP
                                                TO</i><b className="text-white bg-secondary">$100</b><sub>OFF</sub></h5>
                                        <ALink href="/shop" className="btn bg-white btn-lg ls-10 d-block d-lg-inline-block  text-dark">Get
                                            Yours!</ALink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default React.memo(BannerSection);
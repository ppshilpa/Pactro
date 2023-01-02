import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import DealProduct from './deal-product';
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { rotateInUpLeft } from '../../../utils/data/keyframes'

function HomeSection ( { dealProduct } ) {
    return (
        <div className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 mb-2">
                        <OwlCarousel adClass="home-slider custom-nav" options={ HomeSlider }>
                            <div className="home-slide home-slide-1 banner media-with-lazy">
                                <figure className="mb-0">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="Home Slide"
                                        src="images/home/slider/home_slide1.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-right">
                                    <Reveal keyframes={ rotateInUpLeft } delay={ 0 } duration={ 1000 }>
                                        <>
                                            <h2 className="font1 ls-10 text-uppercase text-right m-b-4">Electronic<br />Deals</h2>

                                            <div className="coupon-sale-text">
                                                <h4 className="m-b-2 font1 d-block text-white bg-dark skew-box">Exclusive COUPON</h4>

                                                <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                                                    <i className="text-dark ls-0">UP TO</i>
                                                    <b className="text-white">$100</b>
                                                    <sub className="text-dark">OFF</sub>
                                                </h5>
                                            </div>

                                            <ALink href="/shop" className="btn btn-light btn-lg ls-10">View All Now</ALink>
                                        </>
                                    </Reveal>
                                </div>

                                <div className="banner-layer banner-layer-bottom banner-layer-right">
                                    <p className="ls-0 mb-0">* Only 200 Available</p>
                                </div>
                            </div>

                            <div className="home-slide home-slide-2 banner media-with-lazy">
                                <figure className="mb-0">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="Home Slide"
                                        src="images/home/slider/home_slide2.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-left">
                                    <Reveal keyframes={ rotateInUpLeft } delay={ 0 } duration={ 1000 }>
                                        <>
                                            <h2 className="font1 ls-10 text-uppercase m-b-4">Top Brands<br />Smartphones</h2>

                                            <div className="coupon-sale-text d-flex flex-column align-items-start">
                                                <h4 className="m-b-2 font1 d-block text-white bg-dark skew-box">Starting From</h4>
                                                <h5 className="mb-0 font1 d-inline-block bg-dark skew-box"><b className="text-white">$199</b></h5>
                                            </div>

                                            <ALink href="/shop" className="btn btn-light btn-lg ls-10">View All Now</ALink>
                                        </>
                                    </Reveal>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="col-lg-3 mb-2">
                        <OwlCarousel adClass="featured-products-slider dot-inside dots-small" options={ { dots: true } }>
                            {
                                dealProduct ? dealProduct.map( ( product, index ) => (
                                    <DealProduct product={ product } key={ "DealProduct:" + index } />
                                ) )
                                    :
                                    <div className="skel-pro skel-pro-grid"></div>
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo( HomeSection );
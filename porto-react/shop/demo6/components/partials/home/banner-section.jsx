import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function BannerSection () {
    return (
        <div className="banners-group">
            <div className="row m-0">
                <div className="col-sm-6 col-xl-3 p-0">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1200 } triggerOnce>
                        <div className="banner banner-1 banner-md-vw-small">
                            <figure>
                                <LazyLoadImage
                                    alt="slider image"
                                    src="images/home/banners/banner-1.jpg"
                                    width={ 480 }
                                    height={ 200 }
                                />
                            </figure>
                            <div className="banner-layer banner-layer-right banner-layer-middle">
                                <h2 className="mb-0 text-right">TRENDING</h2>
                                <h3 className="m-b-3 text-right">Hat Sales</h3>
                                <h4 className="ls-10 m-b-3 text-right text-primary">STARTING AT $99</h4>
                                <div className="mb-0 text-right">
                                    <ALink href="/shop" className="btn btn-modern btn-md btn-dark">
                                        Buy NOW!
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-sm-6 col-xl-3 p-0">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="banner banner-2 banner-md-vw-small">
                            <figure>
                                <LazyLoadImage
                                    alt="slider image"
                                    src="images/home/banners/banner-2.jpg"
                                    width={ 480 }
                                    height={ 200 }
                                />
                            </figure>
                            <div className="banner-layer banner-layer-right banner-layer-middle">
                                <h2 className="ls-n-20 m-b-2 text-right text-primary">FLASH SALE</h2>
                                <h3 className="ls-n-20 m-b-2 text-right">TOP BRANDS<br />SUMMER SUNGLASSES</h3>
                                <h4 className="font-weight-bold ls-n-20 m-b-3 text-right text-light">STARTING AT <sup>$</sup>199<sup>99</sup></h4>
                                <div className="mb-0 text-right">
                                    <ALink href="/shop" className="btn btn-modern btn-md btn-light">
                                        View Sale
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-sm-6 col-xl-3 p-0">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 900 } duration={ 1200 } triggerOnce>
                        <div className="banner banner-3 banner-md-vw-small">
                            <figure>
                                <LazyLoadImage
                                    alt="slider image"
                                    src="images/home/banners/banner-3.jpg"
                                    width={ 480 }
                                    height={ 200 }
                                />
                            </figure>
                            <div className="banner-layer banner-layer-right banner-layer-middle">
                                <h2 className="m-b-1 font3 text-left">Exclusive Shoes</h2>
                                <h3 className="m-b-3 text-left">50% OFF</h3>
                                <div className="vc_btn3-container mb-0 vc_btn3-inline">
                                    <ALink href="/shop" className="btn btn-modern btn-md btn-dark ls-10">
                                        Get Yours!
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-sm-6 col-xl-3 p-0">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 900 } duration={ 1200 } triggerOnce>
                        <div className="banner banner-4 banner-md-vw-small">
                            <figure>
                                <LazyLoadImage
                                    alt="slider image"
                                    src="images/home/banners/banner-4.jpg"
                                    width={ 480 }
                                    height={ 200 }
                                />
                            </figure>
                            <div className="banner-layer d-flex banner-layer-middle align-items-center">
                                <div className="col-7">
                                    <h3 className="m-b-1 text-right">DEAL PROMOS</h3>
                                    <h4 className="mb-0 text-right ls-10">STARTING AT $99</h4>
                                </div>
                                <div className="col-5 mb-0">
                                    <ALink href="/shop" className="btn btn-modern btn-md btn-dark">
                                        Shop Now
                                        </ALink>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default React.memo( BannerSection );
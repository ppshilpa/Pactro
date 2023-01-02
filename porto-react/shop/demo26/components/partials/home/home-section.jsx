import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Keyframes
import { fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mb-2">
                        <div className="banner banner1 d-flex flex-wrap align-items-center bg-gray no-gutters">
                            <div className="col-md-5">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div className="brand m-b-2">
                                        <figure className="mb-0">
                                            <LazyLoadImage
                                                alt="brand"
                                                src="images/home/banners/brand.png"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 26 }
                                            />
                                        </figure>
                                    </div>
                                    <h3 className="ls-n-20 text-body text-uppercase m-b-2">Car shock absorbers</h3>
                                    <h2 className="ls-n-20 text-uppercase m-b-4">Starting<br />at
                                    <small className="pl-2 ml-1">$</small>99<small>99</small></h2>
                                    <h4 className="font-weight-normal ls-n-20 m-b-3">Start Shopping Right Now</h4>
                                    <p className="font2 text-body m-b-3">* Get Plus Discount Buying Package</p>
                                    <ALink href="/shop" className="btn btn-dark btn-lg m-b-5">View Sale</ALink>
                                </Reveal>
                            </div>
                            <div className="col-md-7">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 380 }
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="banner banner2 h-100" style={ { background: `#414141 no-repeat center/cover url(images/home/banners/banner-2.jpg)` } }>
                            <div className="banner-layer d-flex flex-column justify-content-center align-items-end text-right">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                    <h3 className="font-weight-bold ls-n-20 text-primary text-uppercase m-b-2">Flash Sale</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 250 } duration={ 1000 } triggerOnce>
                                    <h3 className="ls-n-20 m-b-2">ALL HIGH PERFORMANCE<br />WHEELS AND TIRES</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                                    <h2 className="ls-n-20 text-white text-uppercase m-b-3">Starting<br />at
                                    <small className="pl-2 ml-1">$</small>199<small>99</small></h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                    <ALink href="/shop" className="btn btn-light btn-lg">View Sale</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( HomeSection );
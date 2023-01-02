import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings
import { fadeInRightShorter, fadeInLeftShorter, fadeInUpShorter } from '../../../utils/data/keyframes';

function BannersSection () {
    return (
        <section className="banner-section container">
            <div className="row">
                <div className="col-md-8 mb-md-0 mb-2">
                    <div className="banner banner1 d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-between" style={ { backgroundImage: 'url(images/home/banners/banner-1.jpg)' } }>
                        <Reveal className="content-left text-sm-right text-center" keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                            <>
                                <h2 className="text-white">RARE WINES</h2>
                                <h5 className="mb-sm-0 mb-2">Incredible Discounts</h5>
                            </>
                        </Reveal>

                        <Reveal className="content-right text-right" keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <>
                                <h5 className="d-flex">
                                    <span className="text-transform-none text-white">only</span>
                                    <b className="coupon-sale-text text-white align-middle text-white font2"><sup>$</sup><em>39</em><sup>99</sup></b>
                                </h5>
                                <ALink href="/shop" className="btn btn-lg">Shop Now</ALink>
                            </>
                        </Reveal>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="banner banner2" style={ { backgroundImage: 'url(images/home/banners/banner-2.jpg)' } }>
                        <div className="content-left">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 50 } duration={ 1000 } triggerOnce>
                                <h2>Top<span className="text-primary font2">10+</span></h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                <h4>Under<b className="font2">$100</b></h4>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <ALink href="/shop" className="btn btn-lg">Shop Now</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( BannersSection );
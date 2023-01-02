import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter, fadeInRightShorter, fadeInDownShorter } from '../../../utils/data/keyframes'

function BannerSection () {
    return (
        <div className="banner-section banner-bg" style={ { backgroundImage: 'url(images/home/banners/banner-3.jpg)' } }>
            <div className="banner col-md-11 m-auto d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-between">
                <div className="content-left text-center text-sm-right">
                    <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                        <h6 className="text-transform-none">Exclusive Whole Wheat</h6>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                        <h2 className="text-transform-none">Fluffy Pancakes</h2>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                        <h3>GOOD OLD FASHIONED</h3>
                    </Reveal>
                </div>

                <div className="content-right text-center text-sm-right">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                        <h5>BREAKFAST PRODUCTS ON SALE</h5>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                        <h4 className="d-inline-block">
                            <sup>UP TO</sup>
                            <b className="coupon-sale-text ls-10 text-white align-middle">50%</b>
                        </h4>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default React.memo( BannerSection );
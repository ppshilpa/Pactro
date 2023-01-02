import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function BannerSection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
            <div className="banner-section">
                <div className="row">
                    <div className="col-md-4 mb-2 mb-md-0">
                        <div className="banner banner1 d-flex align-items-center justify-content-end" style={ { backgroundImage: 'url(images/home/banners/banner1.jpg)' } }>
                            <div className="container d-flex align-items-center justify-content-end">
                                <div className="banner-layer text-right">
                                    <h5 className="coupon-sale-text text-white font1">
                                        <b className="text-white font1 ml-auto"><i>UP TO</i>50%</b><span
                                            className="mr-0 ls-0">OFF</span>
                                    </h5>
                                    <h6 className="font1 ls-10">FLASH SALES ON</h6>
                                    <h4 className="text-white mb-0">NICE SHOES</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="banner banner2 d-flex align-items-center justify-content-end" style={ { backgroundImage: 'url(images/home/banners/banner2.jpg)' } }>
                            <div className="container d-flex align-items-center justify-content-end">
                                <div className="banner-layer text-right pt-0">
                                    <h4 className="text-dark mb-0 pl-3 pr-3 pt-1 pb-1">TOP ELECTRONIC<br />FOR GIFTS
                                        </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default React.memo( BannerSection );
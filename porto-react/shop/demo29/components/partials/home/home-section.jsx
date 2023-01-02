import React, { useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter, fadeInLeftShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section>
            <div className="row banner-grid">
                <div className="height-x1 width-x5">
                    <div className="home-banner">
                        <figure>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/home-banner1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="banner-content content-right">
                            <h3 className="ls-10"><strong>black<br /></strong>Armchairs</h3>
                            <p className="font2">starting from $399</p>
                            <ALink href="/shop" className="btn">shop now <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>
                    </div>
                </div>

                <div className="height-x2">
                    <div className="home-banner">
                        <figure className="bg-gray">
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/home-banner2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="banner-content content-left">
                            <h3><strong>wooden<br /></strong>Black Chair</h3>
                            <div className="banner-info">
                                <a href="#" className="btn skew-box">go coupon</a>
                                <h3 className="sale-off skew-box"><span>$100</span>off</h3>
                                <p className="font2">starting from $199</p>
                                <ALink href="/shop" className="btn">shop now <i
                                    className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="height-x1 width-x2">
                    <div className="home-banner">
                        <figure className="bg-dark">
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/home-banner3.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="banner-content content-top">
                            <span className="font2">check new arrivals</span>
                            <h4><strong>cool lamps</strong></h4>
                        </div>
                    </div>
                </div>

                <div className="height-x1 width-x3">
                    <div className="home-banner">
                        <figure className="bg-primary">
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/home-banner4.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="banner-content content-bottom">
                            <span className="font2">exclusive new collection</span>
                            <h4><strong>luxurious jacuzzi</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( HomeSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { fadeIn } from '../../../utils/data/keyframes';

function BannersSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="banner-container row pb-4">
                <div className="col-md-6">
                    <div className="home-banner media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="Product"
                                src="images/home/banners/home_banner6.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="banner-content content-right-bottom content-black">
                            <span>feel like a player</span>
                            <h3>Proball 2019</h3>
                            <div className="price-box">
                                <span className="product-price">$29</span>
                            </div>
                            <ALink href="/shop" className="btn">show now</ALink>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="home-banner media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="Product"
                                src="images/home/banners/home_banner7.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="banner-content content-left-stretch content-white">
                            <span className="span-box span-primary">50% off</span>
                            <span>be a kendo warrior</span>
                            <h3>prowarrior</h3>
                            <div className="price-box">
                                <span className="old-price">$59</span>
                                <span className="product-price">$29</span>
                            </div>
                            <ALink href="/shop" className="btn">show now</ALink>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}

export default React.memo( BannersSection );
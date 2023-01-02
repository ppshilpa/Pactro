import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Keyframes
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section>
            <div className="row grid">
                <div className="col-md-8 grid-item height-x1">
                    <div className="home-banner">
                        <figure>
                            <LazyLoadImage
                                alt="Home Banner"
                                src="images/home/banners/home_banner1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="banner-content content-right-bottom">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <span className="span-box span-primary">50% off</span>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                                <h3>portogear 2</h3>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                <div className="price-box">
                                    <span className="old-price">$59</span>
                                    <span className="product-price">$29</span>
                                </div>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                                <ALink href="/shop" className="btn">shop now</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="row">
                        <div className="col-sm-6 col-md-12 grid-item height-x2">
                            <div className="home-banner">
                                <figure>
                                    <LazyLoadImage
                                        alt="Home Banner"
                                        src="images/home/banners/home_banner2.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-content content-right-bottom">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1000 } triggerOnce>
                                        <span className="font1">flash sales on</span>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1200 } duration={ 1000 } triggerOnce>
                                        <h3>consoles</h3>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1400 } duration={ 1000 } triggerOnce>
                                        <ALink href="/shop" className="btn">shop now</ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-12 grid-item height-x2">
                            <div className="home-banner">
                                <figure>
                                    <LazyLoadImage
                                        alt="Home Banner"
                                        src="images/home/banners/home_banner3.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-content content-stretch">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1500 } duration={ 1000 } triggerOnce>
                                        <span className="font1">check new wireless</span>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1700 } duration={ 1000 } triggerOnce>
                                        <h3>controllers</h3>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 1900 } duration={ 1000 } triggerOnce>
                                        <h4 className="sale-off text-white font1"><span className="span-box span-secondary ls-0">50%</span>off</h4>
                                    </Reveal>

                                    <Reveal className="btn bg-transparent" keyframes={ fadeInUpShorter } delay={ 2100 } duration={ 1000 } triggerOnce>
                                        <ALink href="/shop" className="btn">shop now</ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( HomeSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function BannerSection() {
    return (
        <div className="container banner-container">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                    <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000} triggerOnce>
                        <h3 className="subtitle">SHOP LIVING ROOM</h3>
                        <div className="heading-spacer"></div>
                        <div className="banner banner-image">
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-living.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </ALink>
                        </div>
                        <div className="banner-meta">
                            <ALink href="/shop">LIVING ROOM </ALink>
                            <span className="banner-price">Starting at <strong>$999</strong></span>
                        </div>
                    </Reveal>
                </div>
                <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                    <Reveal keyframes={fadeInRightShorter} delay={200} duration={1500} triggerOnce>
                        <h3 className="subtitle">SHOP DINNING ROOM</h3>
                        <div className="heading-spacer"></div>
                        <div className="banner banner-image">
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-dining.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </ALink>
                        </div>
                        <div className="banner-meta">
                            <ALink href="/shop" className="white-nowrap">DINNING ROOM </ALink>
                            <span className="banner-price white-nowrap">Starting at <strong>$899</strong></span>
                        </div>
                    </Reveal>
                </div>
                <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                    <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1500} triggerOnce>
                        <h3 className="subtitle">SHOP BEDROOM</h3>
                        <div className="heading-spacer"></div>
                        <div className="banner banner-image">
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-bedroom.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </ALink>
                        </div>
                        <div className="banner-meta">
                            <ALink href="/shop">BEDROOM </ALink>
                            <span className="banner-price">Starting at <strong>$799</strong></span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BannerSection);
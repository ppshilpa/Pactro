import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import ALink from '../../common/ALink';
import { instagramSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

function InstagramSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <div className="instagram-section">
                <div className="heading">
                    <h2 className="text-uppercase">FROM INSTAGRAM - <span>@PORTOWINESHOP</span></h2>
                </div>

                <OwlCarousel adClass="instagram-feed-list dots-small media-with-lazy" options={ instagramSlider }>
                    <ALink href="#">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/instagram/1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </ALink>
                    <ALink href="#">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/instagram/2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </ALink>
                    <ALink href="#">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/instagram/3.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </ALink>
                    <ALink href="#">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/instagram/4.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </ALink>
                </OwlCarousel>
            </div>
        </Reveal>
    );
}

export default React.memo( InstagramSection );
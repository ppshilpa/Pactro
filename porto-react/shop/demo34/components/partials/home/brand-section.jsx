import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'

function BrandSection () {
    return (
        <section className="brands-section">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title m-b-2">Shop by Brands</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                    <h5 className="section-info p-b-4 m-b-2">Only the best seller products added recently in our catalog</h5>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="brands-slider m-b-5" options={ brandSlider }>
                        <ALink href="#">
                            <div className="d-inline-block">
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/brands/small/brand1.png"
                                    width="100%"
                                    height={ 50 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </div>
                        </ALink>

                        <ALink href="#">
                            <div className="d-inline-block">
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/brands/small/brand2.png"
                                    width="100%"
                                    height={ 50 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </div>
                        </ALink>

                        <ALink href="#">
                            <div className="d-inline-block">
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/brands/small/brand3.png"
                                    width="100%"
                                    height={ 50 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </div>
                        </ALink>

                        <ALink href="#">
                            <div className="d-inline-block">
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/brands/small/brand4.png"
                                    width="100%"
                                    height={ 50 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </div>
                        </ALink>

                        <ALink href="#">
                            <div className="d-inline-block">
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/brands/small/brand5.png"
                                    width="100%"
                                    height={ 50 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </div>
                        </ALink>

                        <ALink href="#">
                            <div className="d-inline-block">
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/brands/small/brand6.png"
                                    width="100%"
                                    height={ 50 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </div>
                        </ALink>
                    </OwlCarousel >
                </Reveal>
            </div>
        </section>
    );
}

export default React.memo( BrandSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

function BrandSection ( { adClass } ) {
    return (
        <div className={ `brands-section ${adClass}` }>
            <div className="container">
                <h2 className="section-title line-height-1 ls-10 pb-4 mb-5">Top Brands</h2>

                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                    <OwlCarousel adClass="brands-slider owl-theme images-center" options={ brandSlider }>
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand1.png"
                                width="100%"
                                height={ 50 }
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand2.png"
                                width="100%"
                                height={ 50 }
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand3.png"
                                width="100%"
                                height={ 50 }
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand4.png"
                                width="100%"
                                height={ 50 }
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand5.png"
                                width="100%"
                                height={ 50 }
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </OwlCarousel >
                </Reveal>
            </div>
        </div>
    );
}

export default React.memo( BrandSection );
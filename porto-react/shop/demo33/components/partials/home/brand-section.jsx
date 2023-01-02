import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
            <OwlCarousel adClass="brands-slider owl-theme images-center" options={ brandSlider }>
                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/brands/small/brand1.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/brands/small/brand2.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/brands/small/brand3.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/brands/small/brand4.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/brands/small/brand5.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/brands/small/brand6.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="lack-gap"
                    />
                </figure>
            </OwlCarousel >
        </Reveal>
    );
}

export default React.memo( BrandSection );
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';

function BrandSection () {
    return (

        <div className="partners-container">
            <OwlCarousel adClass="brands-slider owl-theme images-center" options={ brandSlider }>
                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/home/logos/logo1.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/home/logos/logo2.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/home/logos/logo3.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/home/logos/logo4.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/home/logos/logo5.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>

                <figure className="mb-0">
                    <LazyLoadImage
                        alt="brand"
                        src="images/home/logos/logo6.png"
                        width="100%"
                        height="auto"
                        threshold={ 500 }
                        effect="black and white"
                    />
                </figure>
            </OwlCarousel >
        </div>
    );
}

export default React.memo( BrandSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function BannerSection () {
    return (
        <section className="product-banner-section">
            <div className="banner" style={ { backgroundImage: 'url(images/home/product-section-slider/slide-1.jpg)', backgroundColor: '#111' } } >
                <div className="container-fluid">
                    <div className="position-relative h-100">
                        <div className="banner-layer banner-layer-middle">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <h3 className="text-white text-uppercase ls-n-25 m-b-4">Ultra Boost</h3>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                                <img className="m-b-4" src="images/home/product-section-slider/img-1.png" alt="img" width="540" height="100" />
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                <ALink href="/shop" className="btn btn-light">Shop Now</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( BannerSection );
import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { fadeIn } from '../../../utils/data/keyframes';
import { setParallax } from '../../../utils';

function BannerSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    return (
        <section className="banner-section home-banner mb-6 parallax" style={ { backgroundImage: 'url(images/home/banners/banner-bathroom.jpg)' } }>
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="banner-content full-content d-flex flex-lg-row flex-column align-items-center mt-1 mt-lg-0">
                    <div className="left-content">
                        <div>
                            <span className="font1">it is time for a</span>
                            <h4>Modern Bathroom</h4>
                        </div>
                        <ALink href="/shop" className="btn">Show Now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                    </div>
                    <div className="right-content banner-info">
                        <a href="#" className="btn skew-box bg-white">Exclusive COUPON</a>
                        <h3 className="sale-off skew-box"><span className="text-white">$200</span>off</h3>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( BannerSection );
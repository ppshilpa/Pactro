import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { fadeIn } from '../../../utils/data/keyframes';

function BannerSection () {
    return (
        <section className="banners-container mb-2">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="home-banner2 mt-4 mb-2 d-flex flex-md-row">
                    <div className=" col-lg-4 banner-background" style={ { backgroundImage: 'url(images/home/banners/home_banner5.jpg)' } }></div>
                    <div className="content-center">
                        <h3 className="mb-md-0 font1">Porto Switch Lite</h3>
                        <p className="font1">Now Available For Pre-Order</p>
                    </div>
                    <div className="d-flex align-items-center content-right pt-0 py-lg-5">
                        <ALink href="/shop" className="btn">Pre-Order Now</ALink>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( BannerSection );
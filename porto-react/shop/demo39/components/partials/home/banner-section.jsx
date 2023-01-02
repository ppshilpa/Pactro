import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes';

function BannerSection () {
    return (
        <div className="banner-section custom-banner-section bg-primary">
            <div className="banner banner1 d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div className="content-left text-center text-lg-left mb-2 mb-md-0">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                        <>
                            <h2 className="text-white">WINE SPECTATOR'S TOP <span className="font1">100</span></h2>
                            <h5 className="mb-0">Check Now This Year’s List</h5>
                        </>
                    </Reveal>

                </div>

                <div className="content-right text-right">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                        <ALink href="/shop" className="btn btn-lg">Shop Now</ALink>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default React.memo( BannerSection );
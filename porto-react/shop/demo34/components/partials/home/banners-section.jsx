import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

//Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'
import { setParallax } from '../../../utils/index';

function BannersSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    return (
        <section className="overflow-hidden">
            <div className="banner banner2">
                <div className="row no-gutters m-0">
                    <div className="col-lg-6 parallax-bg parallax bg-image" style={ { background: 'no-repeat url(images/home/banners/banner-2.jpg)', backgroundColor: '#f4f4f2' } }>
                        <div className="dot-image">
                            <img src="images/home/dots.png" alt="dots" width="123" height="126" />
                        </div>
                    </div>

                    <div className="col-lg-6 banner-content">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <>
                                <h4 className="m-b-1">Self Care for You</h4>
                                <h2 className="font3 font-italic m-b-4">Stay Beauty at Home</h2>
                                <p className="font2 ls-n-15 m-b-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper quam lacus, et suscipit lectus porta efficitur.</p>
                                <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">Starting at
                            <em>$<strong>39</strong>99</em></h5>
                                <ALink href="/shop" className="btn btn-dark btn-lg mb-0">Shop Now</ALink>
                            </>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="banner banner3">
                <div className="row no-gutters m-0">
                    <div className="col-lg-6 parallax-bg order-lg-last parallax bg-image" style={ { background: 'no-repeat url(images/home/banners/banner-3.jpg)', backgroundColor: '#f4f4f2' } } >
                        <div className="dot-image">
                            <img src="images/home/dots.png" alt="dots" width="123" height="126" />
                        </div>
                    </div>
                    <div className="col-lg-6 banner-content">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <>
                                <h4 className="m-b-1">Clear and Glowing Skin</h4>
                                <h2 className="font3 font-italic m-b-4">Best Face Masks</h2>
                                <p className="font2 ls-n-15 m-b-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Praesent ullamcorper quam lacus, et suscipit lectus porta efficitur.</p>
                                <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">Starting at
                            <em>$<strong>39</strong>99</em></h5>
                                <ALink href="/shop" className="btn btn-dark btn-lg mb-0">Shop Now</ALink>
                            </>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( BannersSection );
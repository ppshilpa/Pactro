import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings
import { fadeInLeftShorter } from '../../../utils/data/keyframes';

function PromoSection () {
    return (
        <section className="promo-section bg-primary" style={ { backgroundImage: 'url(images/home/banners/banner-5.png)' } }>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-10 col-sm-7 col-lg-5 mb-2 mb-lg-0">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <>
                                <h5 className="font-weight-normal text-uppercase mb-0"><i>Available Once a year</i></h5>
                                <div className="d-inline-block">
                                    <h2 className="ls-n-10 text-white mb-0">Get 30% off on orders over $299</h2>
                                    <p className="font2 text-right text-uppercase text-white mb-0">* Selected books</p>
                                </div>
                            </>
                        </Reveal>
                    </div>

                    <div className="col-7 col-lg-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1000 } triggerOnce >
                            <ALink href="/shop" className="btn btn-quaternary">Explore Books
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( PromoSection );
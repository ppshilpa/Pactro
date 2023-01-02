import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection () {
    return (
        <section className="feature-boxes-container mb-3" style={ { overflow: 'visible' } }>
            <div className="container overflow-hidden">
                <div className="row">
                    <div className="col-md-4">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="feature-box feature-box-simple text-center mb-0">
                                <div className="feature-box-icon">
                                    <img src="images/home/icons/icon-1.png" alt="icon" width="45"
                                        height="45" />
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3>Dedicated Service</h3>
                                    <p>Consult our specialists for help with an order, customization, or design advice.
                                    </p>

                                    <ALink href="/shop" className="btn btn-outline btn-round">Get in touch</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                            <div className="feature-box feature-box-simple text-center mb-0">
                                <div className="feature-box-icon">
                                    <img src="images/home/icons/icon-2.png" alt="icon" width="45"
                                        height="45" />
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3>Money Back Guarantee</h3>
                                    <p>Consult our specialists for help with an order, customization, or design advice.
                                    </p>

                                    <ALink href="/shop" className="btn btn-outline btn-round">Get in touch</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 650 } duration={ 1000 } triggerOnce>
                            <div className="feature-box feature-box-simple text-center mb-0">
                                <div className="feature-box-icon">
                                    <img src="images/home/icons/icon-3.png" alt="icon" width="45"
                                        height="45" />
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3>Secure Payment</h3>
                                    <p>Consult our specialists for help with an order, customization, or design advice.
                                    </p>

                                    <ALink href="/shop" className="btn btn-outline btn-round">Get in touch</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="shape-wrapper">
                <LazyLoadImage
                    alt="shape"
                    src="images/home/shape1.png"
                    threshold={ 500 }
                    effect="black and white"
                    width="100%"
                    height={ 408 }
                />
            </div>
        </section>
    );
}

export default React.memo( FeatureBoxSection );
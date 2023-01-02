import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection () {
    return (
        <section className="feature-boxes-container container pt-2">
            <div className="row justify-content-center">
                <Reveal className="col-sm-6 col-lg-4" keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                    <div className="feature-box feature-box-simple text-center">
                        <i className="icon-earphones-alt"></i>

                        <div className="feature-box-content p-0">
                            <h3 className="text-capitalize">Customer Support</h3>
                            <h5>Need Assistence?</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="col-sm-6 col-lg-4" keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="feature-box feature-box-simple text-center">
                        <i className="icon-credit-card"></i>

                        <div className="feature-box-content p-0">
                            <h3 className="text-capitalize">Secure Payment</h3>
                            <h5>Safe & Fast</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="col-sm-6 col-lg-4" keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                    <div className="feature-box feature-box-simple text-center">
                        <i className="icon-action-undo"></i>

                        <div className="feature-box-content p-0">
                            <h3 className="text-capitalize">Free Returns</h3>
                            <h5>Easy & Free</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default React.memo( FeatureBoxSection );
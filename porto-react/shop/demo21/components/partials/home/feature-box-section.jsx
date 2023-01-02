import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInRightShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection () {
    return (
        <section className="feature-boxes-container bg-gray overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-shipping"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="font1 ls-n-10">Free Shipping &amp; Returns</h3>
                                    <h5 className="font1 m-b-3">All Orders Over $99</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapibus.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-money"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="font1 ls-n-10">Money Back Guarantee</h3>
                                    <h5 className="font1 m-b-3">Safe &amp; Fast</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapibus.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-support"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="font1 ls-n-10">Online Support</h3>
                                    <h5 className="font1 m-b-3">Need Assistence?</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapibus.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default React.memo( FeatureBoxSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection () {
    return (
        <section className="feature-boxes-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-earphones-alt"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3>Customer Support</h3>
                                    <h5 className="line-height-1">Need Assistance?</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } duration={ 1000 } triggerOnce >
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-credit-card"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3>Secured Payment</h3>
                                    <h5 className="line-height-1">Safe &amp; Fast</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } duration={ 1000 } triggerOnce >
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-action-undo"></i>
                                </div>
                                <div className="feature-box-content p-0">
                                    <h3>Free Returns</h3>
                                    <h5 className="line-height-1">Easy &amp; Free</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 800 } duration={ 1000 } triggerOnce >
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-shipping"></i>
                                </div>
                                <div className="feature-box-content p-0">
                                    <h3>Free Shipping</h3>
                                    <h5 className="line-height-1">Orders Over $99</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
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
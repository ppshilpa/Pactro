import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInRightShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection() {
    return (
        <div className="feature-boxes-container overflow-hidden pb-3">
            <Reveal keyframes={fadeInRightShorter} delay={500} duration={1000} triggerOnce>
                <div className="row mt-7 mb-1">
                    <div className="col-xl-3 col-sm-6">
                        <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                            <i className="icon-earphones-alt bg-secondary text-white m-b-3"></i>
                            <div className="feature-box-content p-0">
                                <h3 className="m-b-1">Customer Support</h3>
                                <h5 className="font-weight-normal line-height-1 m-b-3">Need Assistance?</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                            <i className="icon-credit-card bg-secondary text-white m-b-3"></i>

                            <div className="feature-box-content p-0">
                                <h3 className="m-b-1">Secured Payment</h3>
                                <h5 className="font-weight-normal line-height-1 m-b-3">Safe &amp; Fast</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                            <div className="feature-box-icon">
                                <i className="icon-action-undo bg-secondary text-white m-b-3"></i>
                            </div>

                            <div className="feature-box-content p-0">
                                <h3 className="m-b-1">FREE RETURNS</h3>
                                <h5 className="font-weight-normal line-height-1 m-b-3">Easy &amp; Free</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                            <div className="feature-box-icon">
                                <i className="icon-shipping bg-secondary text-white m-b-3"></i>
                            </div>

                            <div className="feature-box-content p-0">
                                <h3 className="m-b-1">FREE SHIPPING</h3>
                                <h5 className="font-weight-normal line-height-1 m-b-3">Orders Over $99</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default React.memo(FeatureBoxSection);
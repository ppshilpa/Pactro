import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection () {
    return (
        <section className="feature-boxes-container">
            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container-fluid">
                    <div className="row no-gaps m-0 ">
                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-earphones-alt text-white"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="text-white">Customer Support</h3>
                                    <h5 className="line-height-1">Need Assistance?</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-credit-card text-white"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="text-white">Secured Payment</h3>
                                    <h5 className="line-height-1">Safe &amp; Fast</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-action-undo text-white"></i>
                                </div>
                                <div className="feature-box-content p-0">
                                    <h3 className="text-capitalize text-white">Free Returns</h3>
                                    <h5 className="line-height-1">Easy &amp; Free</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                        magna, et dapib.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-box feature-box-simple text-center mb-2">
                                <div className="feature-box-icon">
                                    <i className="icon-shipping text-white"></i>
                                </div>
                                <div className="feature-box-content p-0">
                                    <h3 className="text-white">Free Shipping</h3>
                                    <h5 className="line-height-1">Made To Help You</h5>

                                    <p>Porto has very powerful admin features to help customer to build their own shop
                                        in minutes without any special skills in web development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( FeatureBoxSection );
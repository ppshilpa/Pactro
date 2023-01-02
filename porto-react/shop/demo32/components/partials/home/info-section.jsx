import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import { fadeIn } from '../../../utils/data/keyframes';

export default function InfoSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 }>
            <section className="info-section row row-joined no-border appear-animate" data-animation-name="fadeIn"
                data-animation-delay="100">
                <div className="col-sm-6 col-xl-3">
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content">
                            <h4>FREE SHIPPING &amp; RETURN</h4>
                            <p className="font2">Free shipping on all orders over $99.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-3">
                    <div className="info-box info-box-icon-left">
                        <i className="icon-money"></i>

                        <div className="info-box-content">
                            <h4>MONEY BACK GUARANTEE</h4>
                            <p className="font2">100% money back guarantee</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-3">
                    <div className="info-box info-box-icon-left">
                        <i className="icon-support"></i>

                        <div className="info-box-content">
                            <h4>ONLINE SUPPORT 24/7</h4>
                            <p className="font2">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-xl-3">
                    <div className="info-box info-box-icon-left">
                        <i className="icon-secure-payment"></i>

                        <div className="info-box-content">
                            <h4>Secure Payment</h4>
                            <p className="font2">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
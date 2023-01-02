import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes';

function InfoSection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
            <section className="info-section row row-joined">
                <div className="col-md-4">
                    <div className="info-box info-box-icon-left text-white">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content">
                            <h4>FREE SHIPPING &amp; RETURN</h4>
                            <p className="font2">Free shipping on all orders over $99</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="info-box info-box-icon-left text-white">
                        <i className="icon-money"></i>

                        <div className="info-box-content">
                            <h4>MONEY BACK GUARANTEE</h4>
                            <p className="font2">100% money back guarantee</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="info-box info-box-icon-left text-white">
                        <i className="icon-support"></i>

                        <div className="info-box-content">
                            <h4>ONLINE SUPPORT 24/7</h4>
                            <p className="font2">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}

export default React.memo( InfoSection );
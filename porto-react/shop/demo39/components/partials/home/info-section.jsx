import React from 'react';;
import Reveal from 'react-awesome-reveal';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes';

export default function InfoSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <div className="info-boxes-container row row-joined">
                <div className="info-box info-box-icon-left col-lg-4">
                    <i className="icon-shipping"></i>

                    <div className="info-box-content">
                        <h4>FREE SHIPPING &amp; RETURN</h4>
                        <p className="text-body">Free shipping on all orders over $99.</p>
                    </div>
                </div>

                <div className="info-box info-box-icon-left col-lg-4">
                    <i className="icon-money"></i>

                    <div className="info-box-content">
                        <h4>MONEY BACK GUARANTEE</h4>
                        <p className="text-body">100% money back guarantee</p>
                    </div>
                </div>

                <div className="info-box info-box-icon-left col-lg-4">
                    <i className="icon-support"></i>

                    <div className="info-box-content">
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p className="text-body">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
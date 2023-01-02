import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

export default function InfoSection () {
    return (
        <div className="info-boxes-container">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <OwlCarousel adClass="info-boxes-slider owl-theme" options={ infoBoxSlider }>
                        <div className="info-box info-box-icon-left">
                            <i className="icon-shipping text-primary"></i>

                            <div className="info-box-content">
                                <h4 className="line-height-1">Free Shipping on Orders Over $99</h4>
                                <p className="font2 line-height-1 text-body ">For more than 100,000 parts!</p>
                            </div>
                        </div>

                        <div className="info-box info-box-icon-left">
                            <i className="icon-money text-primary"></i>

                            <div className="info-box-content">
                                <h4 className="line-height-1">Up to 40% OFF on Selected Items</h4>
                                <p className="font2 line-height-1 text-body ">Available for all Categories!</p>
                            </div>
                        </div>

                        <div className="info-box info-box-icon-left">
                            <i className="icon-secure-payment text-primary"></i>

                            <div className="info-box-content">
                                <h4 className="line-height-1">100% Secure Payments</h4>
                                <p className="font2 line-height-1 text-body ">We ensure secure payment!</p>
                            </div>
                        </div>
                    </OwlCarousel >
                </div>
            </Reveal>
        </div>
    );
}
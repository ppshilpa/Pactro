import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

export default function InfoSection () {
    return (
        <div className="container">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } >
                <OwlCarousel adClass="info-boxes-slider m-b-3" options={ infoBoxSlider }>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping text-primary"></i>

                        <div className="info-box-content">
                            <h4>Free Shipping on Orders Over $99</h4>
                            <p className="text-body">For more than 100,000 parts!</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-percent-circle text-primary"></i>

                        <div className="info-box-content">
                            <h4>Up to 40% OFF on Selected Items</h4>
                            <p className="text-body">Available for all Categories!</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-pulley text-primary"></i>

                        <div className="info-box-content">
                            <h4>100% Secure Payment</h4>
                            <p className="text-body">We ensure secure payment!</p>
                        </div>
                    </div>
                </OwlCarousel>
            </Reveal>
        </div>
    );
}
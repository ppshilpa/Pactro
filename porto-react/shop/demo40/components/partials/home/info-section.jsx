import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

export default function InfoSection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
            <OwlCarousel adClass="info-boxes-slider" options={ infoBoxSlider }>
                <div className="info-box info-box-icon-left">
                    <i className="icon-shipping mr-3 pr-2"></i>

                    <div className="info-box-content">
                        <h4 className="pt-1">Free Shipping and Returns</h4>
                    </div>
                </div>

                <div className="info-box info-box-icon-left">
                    <i className="icon-money"></i>

                    <div className="info-box-content">
                        <h4 className="ls-n-15">Money Back Guarantee</h4>
                    </div>
                </div>

                <div className="info-box info-box-icon-left">
                    <i className="icon-support mr-3 pr-2"></i>

                    <div className="info-box-content">
                        <h4>Online Support 24/7</h4>
                    </div>
                </div>
            </OwlCarousel>
        </Reveal>
    );
}
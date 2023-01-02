import React from 'react';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider } from '../../../utils/data/slider';

function InfoSection () {
    return (
        <OwlCarousel adClass="info-boxs-slider mb-0" options={ infoBoxSlider }>
            <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start">
                <i className="icon-shipping line-height-1"></i>

                <div className="info-box-content">
                    <h4 className="ls-25 line-height-1">FREE SHIPPING &amp; RETURN</h4>
                    <p className="text-body">Free shipping on all orders over $99.</p>
                </div>
            </div>
            <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start">
                <i className="icon-money line-height-1"></i>

                <div className="info-box-content">
                    <h4 className="ls-25 line-height-1">MONEY BACK GUARANTEE</h4>
                    <p className="text-body">100% money back guarantee.</p>
                </div>
            </div>
            <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start">
                <i className="icon-support line-height-1"></i>

                <div className="info-box-content">
                    <h4 className="ls-25 line-height-1">ONLINE SUPPORT 24/7</h4>
                    <p className="text-body">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start">
                <i className="icon-secure-payment line-height-1"></i>

                <div className="info-box-content">
                    <h4 className="ls-25 line-height-1">SECURE PAYMENT</h4>
                    <p className="text-body">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo( InfoSection );
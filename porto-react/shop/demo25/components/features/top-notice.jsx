import React from 'react';

// Import Custom Component
import OwlCarousel from './owl-carousel';

// Import Settings
import { TopNoticeSlider } from '../../utils/data/slider';

function TopNotice () {
    return (
        <div className="top-notice p-0">
            <OwlCarousel adClass="info-boxes-slider bg-primary" options={ TopNoticeSlider }>
                <div className="info-box info-box-icon-left">
                    <i className="icon-shipping"></i>

                    <div className="info-box-content">
                        <h4>Free Shipping on Orders Over $99</h4>
                    </div>
                </div>
                <div className="info-box info-box-icon-left">

                    <i className="icon-money"></i>

                    <div className="info-box-content">
                        <h4>Up to 40% OFF on Selected Items</h4>
                    </div>
                </div>

                <div className="info-box info-box-icon-left">
                    <i className="sicon-graduation"></i>

                    <div className="info-box-content">
                        <h4>15% OFF Student Discount</h4>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}

export default React.memo( TopNotice );
import OwlCarousel from '../../features/owl-carousel';

import { infoBoxSlider } from '../../../utils/data/slider'

export default function ServiceBox () {
    return (
        <div className="info-boxes-container bg-dark2 mb-4">
            <div className="container">
                <OwlCarousel adClass="info-boxes-slider owl-theme" options={ infoBoxSlider }>
                    <div className="info-box text-white info-box-icon-left">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content pt-1">
                            <h4>FREE SHIPPING & RETURN</h4>
                            <p>Free Shipping on All Orders Over $99.</p>
                        </div>
                    </div>
                    <div className="info-box text-white info-box-icon-left">
                        <i className="icon-money"></i>

                        <div className="info-box-content pt-1">
                            <h4>MONEY BACK GUARANTEE</h4>
                            <p>100% Money Back Guarantee</p>
                        </div>
                    </div>
                    <div className="info-box text-white info-box-icon-left">
                        <i className="icon-support"></i>

                        <div className="info-box-content pt-1">
                            <h4>ONLINE SUPPORT 24/7</h4>
                            <p>Lorem Ipsum Dolor Sit Amet.</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}
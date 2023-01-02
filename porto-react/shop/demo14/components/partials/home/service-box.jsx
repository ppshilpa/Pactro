import OwlCarousel from '../../features/owl-carousel';

import { infoBoxSlider } from '../../../utils/data/slider'

export default function ServiceBox () {
    return (
        <div className="info-boxes-container bg-gray">
            <div className="container py-3">
                <OwlCarousel adClass="info-boxes-slider owl-theme py-3" options={ infoBoxSlider }>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content">
                            <h4 className="pb-1">FREE SHIPPING & RETURN</h4>
                            <p>Free shipping on all orders over $99</p>
                        </div>
                    </div>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-money"></i>

                        <div className="info-box-content">
                            <h4 className="pb-1">MONEY BACK GUARANTEE</h4>
                            <p>100% money back guarantee</p>
                        </div>
                    </div>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-support"></i>

                        <div className="info-box-content">
                            <h4 className="pb-1">ONLINE SUPPORT 24/7</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}
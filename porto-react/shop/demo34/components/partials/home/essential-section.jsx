import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider } from '../../../utils/data/slider';
import ProductFour from '../../features/products/product-four';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

export default function EssentialSection ( props ) {
    const { product } = props;

    return (
        <section className="essentials-section">
            <div className="container">
                <OwlCarousel adClass="info-boxes-slider" options={ infoBoxSlider }>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content">
                            <h4>Free Shipping &amp; Return</h4>
                            <p>Free shipping on all orders over $99.</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-money "></i>

                        <div className="info-box-content">
                            <h4>Money Back Guarantee</h4>
                            <p>100% money back guarantee</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-support "></i>

                        <div className="info-box-content">
                            <h4>Online Support 24/7</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </OwlCarousel>

                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title m-b-2">Everyday Essentials Collection</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                    <h5 className="section-info p-b-4 mb-2">Only the best seller products added recently in our catalog</h5>
                </Reveal>


                <div className="row m-b-5">

                    {
                        product ?
                            product.slice( 0, 8 ).map( ( product, index ) => (
                                <div className="col-sm-6 col-md-4 col-xl-3" key={ `ProductThree`, index }>
                                    <ProductFour adClass="inner-icon" product={ product } />
                                </div>
                            ) )
                            :
                            [ 0, 1, 2 ].map( ( item, index ) =>
                                <div className="col-sm-6 col-md-4 col-xl-3" key={ "ProductThree" + index }>
                                    <div className="skel-product-col skel-pro mb-2"></div>
                                </div>
                            )
                    }

                </div>
            </div>
        </section>
    )
}
import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductThree from '../../features/products/product-three';

// Import Utils
import { productCountDown } from '../../../utils';
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

export default function ProductWidgetContainer ( props ) {
    const { bestSelling, topRated, loading, onSale } = props;

    useEffect( () => {
        productCountDown();
    } )

    return (
        <section className={ `product-widgets-container lg-images mb-0 skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        {
                            topRated ?
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">Top Rated Products</h4>
                                        {
                                            topRated.slice( 0, 3 ).map( ( product, index ) => (
                                                <ProductThree product={ product } key={ `ProductThree`, index } />
                                            ) )
                                        }
                                    </div>
                                </Reveal>
                                :
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                        }
                    </div>

                    <div className="col-md-6 col-lg-3">
                        {
                            bestSelling ?
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">Top Selling Products</h4>
                                        {
                                            bestSelling.slice( 0, 3 ).map( ( product, index ) => (
                                                <ProductThree product={ product } key={ `ProductThree`, index } />
                                            ) )
                                        }
                                    </div>
                                </Reveal>
                                :
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                        }
                    </div>

                    <div className="col-md-6 col-lg-3">
                        {
                            onSale ?
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title ls-n-10 pb-3 m-b-4">On Sale Products</h4>

                                        {
                                            onSale.slice( 0, 3 ).map( ( product, index ) => (
                                                <ProductThree product={ product } key={ `ProductThree`, index } />
                                            ) )
                                        }
                                    </div>
                                </Reveal>
                                :
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                        }
                    </div>

                    <div className="col-md-6 col-lg-3">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 1500 } duration={ 1000 } triggerOnce>
                                    <div className="product-default media-with-lazy count-down">
                                        <h3 className="product-name">Flash Deals</h3>

                                        <figure className="position-relative">
                                            <ALink href={ `/product/default/1080p-wifi-ip-camera` }>
                                                <LazyLoadImage
                                                    alt="product"
                                                    src="images/home/products/featured-sale.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />

                                                <div className="label-group">
                                                    <span className="product-label label-primary">SALE</span>
                                                    <span className="product-label label-dark">-50%</span>
                                                </div>

                                                <div className="product-countdown-container">
                                                    <span className="product-countdown-title">offer ends in:</span>
                                                    <div className="product-countdown countdown-compact" data-compact="true">
                                                        <span className="countdown-section days">
                                                            <span className="countdown-amount font-weight-extra-bold mr-1">237 </span>
                                                                            DAY
                                                                        <div className="d-inline text-uppercase mr-1">s,</div>
                                                        </span>

                                                        <span className="countdown-section hours">
                                                            <span className="countdown-amount font-weight-extra-bold">20:</span>
                                                        </span>

                                                        <span className="countdown-section minutes">
                                                            <span className="countdown-amount font-weight-extra-bold">26:</span>
                                                        </span>
                                                        <span className="countdown-section seconds">
                                                            <span className="countdown-amount font-weight-extra-bold">06</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </ALink>
                                        </figure>

                                        <div className="product-details">
                                            <h3 className="product-title">
                                                <ALink href={ `/product/default/1080p-wifi-ip-camera` }>1080p Wifi IP Camera</ALink>
                                            </h3>

                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={ { width: 20 * 3 + '%' } }></span>
                                                    <span className="tooltiptext tooltip-top">3</span>
                                                </div>
                                            </div>

                                            <div className="price-box">
                                                <span className="old-price">$596.00</span>
                                                <span className="product-price">$299.00</span>
                                            </div>
                                        </div>
                                    </div>


                                </Reveal>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
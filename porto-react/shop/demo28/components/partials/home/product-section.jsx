import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as CartAction } from "../../../store/cart";

// Import Custom Component
import Qty from '../product/qty';

function ProductSection ( props ) {
    const [ qty, setQty ] = useState( 1 );

    function onAddCartClick ( e ) {
        e.preventDefault();
        props.addToCart( props.product, qty, -1 );
    }

    function changeQty ( value ) {
        setQty( value );
    }

    return (
        <section className="product-section">
            <div className="container">
                <div className="product-default product-extend product-row">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banner/5.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>

                    <div className="product-details">
                        <h2 className="product-title">
                            <b>PORTO HEADPHONE</b>
                        </h2>
                        <div className="ratings-container mb-2">
                            <div className="product-ratings">
                                <span className="ratings" style={ { width: '80%' } }></span>
                                <span className="tooltiptext tooltip-top">4</span>
                            </div>
                        </div>
                        <p className="product-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis
                            adipiscing. Fusce in hendrerit purus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh…
                            </p>
                        <div className="price-box">
                            <span className="product-price">$350.00</span>
                        </div>
                        <div className="product-action">
                            <Qty max="20" value={ qty } onChangeQty={ changeQty } />

                            <a href="#" className="btn btn-rounded with-bg btn-add-cart product-type-simple" title="Add To Cart" onClick={ onAddCartClick }>Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default connect( null, CartAction )( React.memo( ProductSection ) );
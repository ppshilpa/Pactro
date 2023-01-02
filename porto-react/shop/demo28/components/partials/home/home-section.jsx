import React from 'react';
import Reveal from 'react-awesome-reveal';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as CartAction } from "../../../store/cart";

// Import Keyframes
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function HomeSection ( props ) {
    const { product } = props;

    function onAddCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    return (
        <section className="section-1" id="intro">
            <div className="container">
                <div className="row align-items-center product-row">
                    <div className="col-lg-7">
                        <figure className="large-img">
                            <LazyLoadImage
                                alt="Home Slide"
                                src="images/home/banner/1.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </div>

                    <div className="col-lg-5 order-lg-first">
                        <div className="section-body">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 1000 } duration={ 1000 } triggerOnce>
                                <h3 className="banner-subtitle mb-0 line-height-1e">INTRODUCING</h3>
                            </Reveal>

                            <Reveal keyframes={ fadeInLeftShorter } delay={ 1200 } duration={ 1000 } triggerOnce>
                                <h2 className="product-title line-height-1">PORTO HEADPHONE</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInLeftShorter } delay={ 1400 } duration={ 1000 } triggerOnce>
                                <div className="price-box">
                                    <span className="product-price text-primary">
                                        <b>$350.00</b>
                                    </span>

                                    <a href="#" className="btn btn-rounded with-bg btn-add-cart product-type-simple" title="Add To Cart" onClick={ onAddCartClick }>Add to cart</a>
                                </div>
                            </Reveal>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default connect( null, CartAction )( React.memo( HomeSection ) );
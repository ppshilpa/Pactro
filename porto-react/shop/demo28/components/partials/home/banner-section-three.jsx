import React from 'react';
import Reveal from 'react-awesome-reveal';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as CartAction } from "../../../store/cart";

// Import Keyframes
import { fadeInRightShorter, fadeInUpShorter } from '../../../utils/data/keyframes'

function BannerSectionThree ( props ) {
    function onAddCartClick ( e ) {
        e.preventDefault();
        props.addToCart( props.product );
    }

    return (
        <section className="section-4 with-bg">
            <div className="container">
                <div className="row align-items-center product-row">
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <figure>
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/home/banner/4.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                        </Reveal>
                    </div>

                    <div className="col-lg-6">
                        <div className="section-body">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                                <h2 className="product-title mb-2">EXTRA QUALITY SOUND</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 700 } duration={ 1000 } triggerOnce>
                                <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac metus at elit malesuada tristique ut at est. Donec ut iaculis nunc. Nullam egestas nec erat a tincidunt. Mauris metus metus, bibendum id convallis non, commodo in lacus. Maecenas maximus consequat varius. Praesent ullamcorper non lectus ac ultrices.</p>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 900 } duration={ 1000 } triggerOnce>
                                <a href="#" className="btn btn-rounded with-border btn-add-cart product-type-simple" title="Add To Cart" onClick={ onAddCartClick }>Add to cart</a>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default connect( null, CartAction )( React.memo( BannerSectionThree ) );
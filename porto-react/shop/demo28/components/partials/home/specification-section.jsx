import React from 'react';
import Reveal from 'react-awesome-reveal';
import { connect } from 'react-redux';

// Import Actions
import { actions as CartAction } from "../../../store/cart";

function SpecificationSection ( props ) {
    function onAddCartClick ( e ) {
        e.preventDefault();
        props.addToCart( props.product );
    }

    return (
        <section className="specification" id="specific">
            <div className="container">
                <div className="product-row row">
                    <div className="heading col-lg-8">
                        <h2 className="product-title text-white">PORTO HEADPHONE SPECIFICATIONS</h2>
                        <p className="section-text text-white ls-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae scelerisque elit.
                            Vestibulum vulputate felis dolor.
                            Nulla facilisi. Mauris mattis, sem non egestas euismod.
                            </p>
                    </div>
                    <div className="price-box col-lg-4 mb-3">
                        <span className="product-price text-white">
                            <b>$350.00</b>
                        </span>

                        <a href="#" className="btn btn-rounded with-bg btn-add-cart product-type-simple" title="Add To Cart" onClick={ onAddCartClick }>Add to cart</a>
                    </div>
                </div>
                <h3 className="widget-heading text-white text-uppercase">General</h3>
                <div className="row">
                    <div className="widget col-md-4">
                        <ul>
                            <li>
                                <span className="dark">Designed For</span>
                                <span className="text-white">Smartphones</span>
                            </li>
                            <li>
                                <span className="dark">Circumaural</span>
                                <span className="text-white">Supra-aural</span>
                            </li>
                            <li>
                                <span className="dark">Magnet Type</span>
                                <span className="text-white">Neodymium</span>
                            </li>
                            <li>
                                <span className="dark">With Microphone</span>
                                <span className="text-white">Yes</span>
                            </li>
                        </ul>
                    </div>
                    <div className="widget col-md-4 with-bar">
                        <ul>
                            <li>
                                <span className="dark">Glass Type</span>
                                <span className="text-white">Monocle</span>
                            </li>
                            <li>
                                <span className="dark">Lens Type</span>
                                <span className="text-white">Bi Convex</span>
                            </li>
                            <li>
                                <span className="dark">Suitable For</span>
                                <span className="text-white">Entertainment</span>
                            </li>
                            <li>
                                <span className="dark">Functions</span>
                                <span className="text-white">Graphical Display</span>
                            </li>
                        </ul>
                    </div>
                    <div className="widget col-md-4 with-bar">
                        <ul>
                            <li>
                                <span className="dark">Compatible OS</span>
                                <span className="text-white">Android</span>
                            </li>
                            <li>
                                <span className="dark">Compatible Eye</span>
                                <span className="text-white">Both</span>
                            </li>
                            <li>
                                <span className="dark">Control Type</span>
                                <span className="text-white">Manual</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default connect( null, CartAction )( React.memo( SpecificationSection ) );
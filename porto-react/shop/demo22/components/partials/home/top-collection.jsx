import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Utils
import { fadeIn } from '../../../utils/data/keyframes';
import { productSlider } from '../../../utils/data/slider';

export default function TopCollection ( props ) {
    const { product } = props;

    return (
        <section className="top-rated-products">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Top Rated Products</h2>

                    <div className="row">
                        <OwlCarousel adClass="products-slider owl-nav-outisde show-nav-hover nav-image-center custom-nav" options={ productSlider }>
                            {
                                product ?
                                    product.slice( 0, 6 ).map( ( item, index ) => (
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                            key={ "product-one" + index }
                                        />
                                    ) )
                                    :
                                    [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid pr-3 pl-3" key={ "product-one" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
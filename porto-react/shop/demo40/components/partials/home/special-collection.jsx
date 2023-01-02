import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

function SpecialSection ( { products } ) {
    return (
        <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
            <section className="products-container products-section-with-border">
                <div className="heading d-flex align-items-center">
                    <h2 className="d-flex align-items-center text-transform-none mb-0"><i></i>Special Offers</h2>
                    <ALink className="d-block view-all ml-auto mt-0" href="/shop">View All<i className="fas fa-chevron-right"></i></ALink>
                </div>

                <OwlCarousel adClass="products-slider owl-nav-top" options={ { ...productSlider, nav: false } }>
                    {
                        products ?
                            products.map( ( item, index ) => (
                                <ProductOne
                                    adClass="inner-quickview inner-icon"
                                    product={ item }
                                    key={ "featured:" + index }
                                />
                            ) )

                            :
                            new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                            )
                    }
                </OwlCarousel>
            </section>
        </Reveal>
    );
}

export default React.memo( SpecialSection );
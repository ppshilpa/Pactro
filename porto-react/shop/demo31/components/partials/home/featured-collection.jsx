import React from 'react';
import Reveal from 'react-awesome-reveal';
import { useEffect } from 'react';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'
import { setParallax } from '../../../utils';

export default function FeaturedCollection ( props ) {
    const { product } = props;

    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    return (
        <section className="bg-parallax position-relative parallax" style={ { backgroundImage: 'url(images/home/banners/home_banner4.jpg)' } }>
            <Reveal keyframes={ fadeIn } delay={ 1500 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <div className="product-panel">
                        <div className="section-title">
                            <h2 className="mr-5 ls-0 mb-0">Featured Product and Offers</h2>
                            <ALink href="/shop">view all products<i className="icon-right"></i></ALink>
                        </div>

                        <div className="row">
                            {
                                product ?
                                    product.slice( 0, 4 ).map( ( item, index ) => (
                                        <div className="col-6 col-md-3" key={ "product-one" + index }>
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                            />
                                        </div>
                                    ) )
                                    :
                                    [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-3" key={ "product-one" + index }>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
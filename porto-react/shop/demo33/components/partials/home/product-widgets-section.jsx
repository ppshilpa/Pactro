import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductThree from '../../features/products/product-three';

// Import Keyframes
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

export default function ProductWidgetsSection ( props ) {
    const { latest, bestSelling, topRated } = props;

    return (
        <section className="section bg-gray product-widgets-section overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {
                            topRated ?
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title">Top Rated Products</h4>
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

                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {
                            bestSelling ?
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title">Best Selling Products</h4>
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

                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {
                            latest ?
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title">Latest Products</h4>

                                        {
                                            latest.slice( 0, 3 ).map( ( product, index ) => (
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

                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        <div className="banner text-center top-shoes-banner banner-sm-vw-large media-with-lazy" style={ { backgroundColor: '#28252c' } }>
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-4.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-middle">
                                <h3 className="m-b-2">Top Shoes</h3>
                                <h4 className="text-primary m-b-3">Summer Sale</h4>
                                <ALink href="/shop" className="btn btn-light btn-outline">Shop Now</ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductThree from '../../features/products/product-three';

// Import Keyframes
import { fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function ProductWidgetSection ( props ) {
    const { adClass = "", featured, latest, bestSelling, topRated, loading } = props;

    return (
        <section className="product-widgets-container row pb-2">
            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                {
                    featured ?
                        <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                            <div>
                                <h4 className="section-sub-title">Featured</h4>
                                {
                                    featured.slice( 0, 3 ).map( ( product, index ) => (
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

            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                {
                    bestSelling ?
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div>
                                <h4 className="section-sub-title">Best Selling</h4>
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

            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                {
                    latest ?
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div>
                                <h4 className="section-sub-title">Latest</h4>

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

            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                {
                    topRated ?
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                            <div>
                                <h4 className="section-sub-title">Top Rated</h4>

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
        </section>
    )
}
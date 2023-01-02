import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductThree from '../../features/products/product-three';

// Import Keyframes
import { fadeIn } from '../../../utils/data/keyframes'

export default function ProductWidgetContainer ( props ) {
    const { featured, latest, bestSelling } = props;

    return (
        <section className="product-widgets-container container mb-md-4 mb-0 pb-2">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="heading">
                    <h2 className="text-uppercase">Staff Favorites</h2>
                </div>

                <div className="row pb-2">
                    <div className="col-md-4 col-sm-6 pb-5 pb-md-0">
                        {
                            featured ?
                                featured.slice( 0, 3 ).map( ( product, index ) => (
                                    <ProductThree product={ product } key={ `ProductThree`, index } />
                                ) )
                                :
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                        }
                    </div>

                    <div className="col-md-4 col-sm-6 pb-5 pb-md-0">
                        {
                            bestSelling ?
                                bestSelling.slice( 0, 3 ).map( ( product, index ) => (
                                    <ProductThree product={ product } key={ `ProductThree`, index } />
                                ) )

                                :
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                        }
                    </div>

                    <div className="col-md-4 col-sm-6 pb-5 pb-md-0">
                        {
                            latest ?
                                latest.slice( 0, 3 ).map( ( product, index ) => (
                                    <ProductThree product={ product } key={ `ProductThree`, index } />
                                ) )

                                :
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                        }
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
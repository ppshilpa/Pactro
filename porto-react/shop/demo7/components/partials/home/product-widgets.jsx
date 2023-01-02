import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Keyframes
import { fadeIn } from '../../../utils/data/keyframes'

export default function ProductWidgets(props) {
    const { adClass = "", featured, newarrived, bestselling, loading } = props;

    return (
        <div className="product-widgets row pb-2">
            <div className="col-md-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"best" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce>
                            <div>
                                <h4 className="section-title border-0 text-left text-uppercase">Best Selling Products</h4>
                                <div className="heading-spacer"></div>
                                {
                                    bestselling.slice(0, 3).map((product, index) => (
                                        <ProductOne product={product} key={'best' + index} type='widget' noaction={true} />
                                    ))
                                }
                            </div>
                        </Reveal>
                }
            </div>

            <div className="col-md-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductOne" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeIn} delay={500} duration={1000} triggerOnce>
                            <div>
                                <h4 className="section-title border-0 text-left text-uppercase">Top Rated Products</h4>
                                <div className="heading-spacer"></div>
                                {
                                    newarrived.slice(0, 3).map((product, index) => (
                                        <ProductOne product={product} key={'ProductOne' + index} type='widget' noaction={true} />
                                    ))
                                }
                            </div>
                        </Reveal>
                }
            </div>

            <div className="col-md-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductOne" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeIn} delay={800} duration={1000} triggerOnce>
                            <div>
                                <h4 className="section-title border-0 text-left text-uppercase">Featured Products</h4>
                                <div className="heading-spacer"></div>

                                {
                                    featured.slice(0, 3).map((product, index) => (
                                        <ProductOne product={product} key={'ProductOne' + index} noaction={true} type='widget' />
                                    ))
                                }
                            </div>
                        </Reveal>
                }
            </div>
        </div>
    )
}
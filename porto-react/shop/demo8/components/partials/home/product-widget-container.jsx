import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductFour from '../../features/products/product-four';

// Import Keyframes
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function ProductWidgets(props) {
    const { topRated, latest, bestselling, loading } = props;

    return (
        <div className="product-widgets row pt-1">
            <div className="col-md-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductFour" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeInRightShorter} delay={500} duration={1000} triggerOnce>
                            <h4 className="subtitle text-left text-uppercase">Top Rated Products</h4>
                            <div className="heading-spacer"></div>
                            {
                                topRated && topRated.slice(0, 3).map((product, index) => (
                                    <ProductFour product={product} key={'ProductFour' + index} type='widget' />
                                ))
                            }
                        </Reveal>
                }
            </div>

            <div className="col-md-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"best" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce>
                            <h4 className="subtitle text-left text-uppercase">Best Selling Products</h4>
                            <div className="heading-spacer"></div>
                            {
                                bestselling.slice(1, 4).map((product, index) => (
                                    <ProductFour product={product} key={'best' + index} type='widget' />
                                ))
                            }
                        </Reveal>
                }
            </div>

            <div className="col-md-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductFour" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeInRightShorter} delay={800} duration={1000} triggerOnce>
                            <h4 className="subtitle text-left text-uppercase">Latest Products</h4>
                            <div className="heading-spacer"></div>

                            {
                                latest.slice(0, 3).map((product, index) => (
                                    <ProductFour product={product} key={'ProductFour' + index} type='widget' />
                                ))
                            }
                        </Reveal>
                }
            </div>
        </div>
    )
}
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

import { blurIn, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading } = props;

    return (
        <div className="col-lg-9 col-md-8">
            <Reveal keyframes={blurIn} delay={100} duration={1500} triggerOnce>
                <h2 className="section-title ls-n-20 m-b-1 line-height-1 text-center">Recent Products</h2>
            </Reveal>
            <Reveal keyframes={blurIn} delay={100} duration={1500} triggerOnce>
                <h3 className="section-sub-title ls-n-20 font-weight-normal text-center">All our new arrivals in a
                                exclusive brand selection</h3>
            </Reveal>
            <div className="row">
                {
                    loading ?
                        [0, 1, 2, 3, 4].map((item, index) =>
                            <div className="col-6 col-md-4" key={"product-one" + index}>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            </div>
                        )
                        :
                        product.map((item, index) => (
                            <div className="col-6 col-md-4" key={"product-one" + index}>
                                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1500} triggerOnce>
                                    <ProductOne
                                        product={item} featured={true}
                                    />
                                </Reveal>
                            </div>
                        ))
                }
            </div>
        </div>

    );
}
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading } = props;

    return (
        <div className="container feature-container">
            <h2 className="subtitle text-center text-uppercase">Featured Products</h2>
            <div className="heading-spacer"></div>
            <div className="row">
                {
                    loading ?
                        [0, 1, 2, 3, 4].map((item, index) =>
                            <div className="col-6 col-sm-4 col-md-3" key={"product-one" + index}>
                                <div className="skel-pro skel-pro-grid"></div>
                            </div>)
                        :
                        product.map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-3" key={"product-one" + index}>
                                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1500} triggerOnce>
                                    <ProductOne
                                        product={item}
                                    />
                                </Reveal>
                            </div>
                        ))

                }
            </div>
        </div >
    );
}
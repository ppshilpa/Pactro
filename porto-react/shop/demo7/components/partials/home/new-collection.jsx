import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function NewCollection(props) {
    const { product, loading } = props;

    return (
        <section className="arrival-products-section">
            <div className="container">
                <h2 className="section-title text-center d-flex align-items-center">JUST ARRIVED</h2>
                <div className="row">
                    {
                        loading ?
                            [0, 1, 2, 3, 4].map((item, index) =>
                                <div className="col-6 col-lg-3 col-md-4 col-xl-5col" key={"product-one" + index}>
                                    <div className="skel-pro skel-pro-grid"></div>
                                </div>
                            )
                            :
                            product.map((item, index) => (
                                <div className="col-6 col-lg-3 col-md-4 col-xl-5col" key={"product-one" + index}>
                                    <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce>
                                        <ProductOne
                                            product={item} noaction={true}
                                        />
                                    </Reveal>
                                </div>
                            ))
                    }
                </div>

                <hr className="mt-1 mb-4" />

            </div>
        </section>
    );
}
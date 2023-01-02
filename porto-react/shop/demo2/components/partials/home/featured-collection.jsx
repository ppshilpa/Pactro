import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading, homepage } = props;

    return (
        <section className="products-section section-bg-gray">
            <div className="container">
                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                    <h2 className={`section-title ${homepage ? 'index-products' : ''}`}>Featured Products</h2>
                </Reveal>
                <OwlCarousel adClass="products-slider dots-top dots-small" options={productSlider}>
                    {
                        loading ?
                            [0, 1, 2, 3, 4].map((item, index) =>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            )
                            :
                            product.map((item, index) => (
                                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce
                                    key={"product-one" + index}>
                                    <ProductOne
                                        product={item}
                                    />
                                </Reveal>
                            ))
                    }
                </OwlCarousel>
            </div>
        </section>
    );
}
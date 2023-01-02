import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading } = props;

    return (
        <section className="products-bottom">
            <div className="title-group text-center mb-2 mt-4 p-t-3">
                <h2 className="section-title text-uppercase ls-n-10">Featured Products</h2>
            </div>
            <OwlCarousel adClass="products-slider  owl-theme custom-products nav-outer show-nav-hover nav-image-center" options={productSlider}>
                {
                    loading ?
                        [0, 1, 2, 3, 4].map((item, index) =>
                            <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                        )
                        :
                        product.map((item, index) => (
                            <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce
                                key={"product-one" + index}>
                                <ProductOne
                                    product={item}
                                />
                            </Reveal>
                        ))

                }
            </OwlCarousel>
        </section >
    );
}
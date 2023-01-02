import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function BestCollection ( props ) {
    const { product } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="best-product-section">
                <div className="section-title">
                    <div className="divide-txt">
                        <div className="divide-line"></div>
                        <span><strong>Best Seller</strong> Products</span>
                        <div className="divide-line"></div>
                    </div>

                    <h3 className="section-subtitle">Only the best seller products added recently in our catalog</h3>
                </div>

                <OwlCarousel adClass="product-panel show-nav-hover mb-0" options={ productSlider }>
                    {
                        product ?
                            product.map( ( item, index ) => (
                                <ProductOne
                                    adClass="inner-quickview inner-icon"
                                    product={ item }
                                    key={ "product-one" + index }
                                />
                            ) )

                            :
                            [ 0, 1, 2 ].map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                            )
                    }
                </OwlCarousel>
            </section>
        </Reveal>
    );
}
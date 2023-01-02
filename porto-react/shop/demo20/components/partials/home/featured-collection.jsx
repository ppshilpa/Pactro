import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product, loading } = props;

    return (
        <section className="featured-products-section">
            <div className="container">
                <h2 className="section-title ls-n-10 text-center text-uppercase m-b-3">Featured Products</h2>

                <OwlCarousel adClass="featured-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                    {
                        loading ?
                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                            )
                            :
                            product && product.map( ( item, index ) => (
                                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce
                                    key={ "product-one" + index }>
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                    />
                                </Reveal>
                            ) )

                    }
                </OwlCarousel>
            </div>
        </section>
    );
}
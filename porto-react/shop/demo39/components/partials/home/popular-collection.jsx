import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function PopularCollection ( props ) {
    const { products } = props;

    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="popular-products-section">
                <div className="container">
                    <div className="heading">
                        <h2 className="text-uppercase">Popular Wines</h2>
                    </div>

                    <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                        {
                            products ?
                                products.map( ( item, index ) => (
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                        key={ "product-one" + index }
                                    />
                                ) )

                                :

                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )
                        }
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    );
}
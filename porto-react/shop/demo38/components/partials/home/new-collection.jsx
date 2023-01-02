import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeInLeftShorter, fadeIn } from '../../../utils/data/keyframes'

export default function NewCollection ( props ) {
    const { products } = props;

    return (
        <section className="products-container new-products-container">
            <div className="container">
                <div className="heading text-uppercase text-center">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                        <h5>RECENTLY ARRIVED</h5>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                        <h2 className="text-capitalize mb-0">New Arrivals</h2>
                    </Reveal>
                </div>

                <Reveal keyframes={ fadeIn } delay={ 500 } duration={ 1000 } triggerOnce>
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
                                [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )

                        }
                    </OwlCarousel>
                </Reveal>
            </div>
        </section>
    );
}
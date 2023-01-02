import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'

export default function NewCollection ( props ) {
    const { products } = props;
    const sliderOption = { ...productSlider, responsive: { ...productSlider.responsive, 1200: { items: 6 } } };

    return (
        <section className="new-products-section">
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title heading-border ls-n-10 border-0 text-center text-capitalize">New Arrivals</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center mb-2" options={ sliderOption }>
                        {
                            products ?
                                products.map( ( item, index ) => (
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                        key={ "Sale Product:" + index }
                                    />
                                ) )
                                :
                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )

                        }
                    </OwlCarousel>
                </Reveal>
            </div>
        </section>
    );
}
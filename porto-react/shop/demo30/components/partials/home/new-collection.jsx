import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function NewCollection ( props ) {
    const { product } = props;

    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="product-panel pt-3 mb-1 pb-1 ">
                <div className="section-title">
                    <h2 className="ls-0">Our Recommendations</h2>
                </div>

                <OwlCarousel adClass="product-intro" options={ productSlider }>
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
                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                            )
                    }
                </OwlCarousel>
            </section>
        </Reveal>
    );
}
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
        <section className="most-viewed-products">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Most Viewed Products</h2>

                    <div className="row">
                        <OwlCarousel adClass="products-slider owl-nav-outisde show-nav-hover nav-image-center custom-nav" options={ productSlider }>
                            {
                                product ?
                                    product.slice( 0, 6 ).map( ( item, index ) => (
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                            key={ "product-one" + index }
                                        />
                                    ) )
                                    :
                                    [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid  pr-3 pl-3" key={ "product-one" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
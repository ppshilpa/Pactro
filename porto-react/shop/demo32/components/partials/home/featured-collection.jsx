import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <section className="featured-section text-center">
                <div className="section-title">
                    <div className="divide-txt">
                        <div className="divide-line"></div>
                        <span><strong>Featured</strong> Products</span>
                        <div className="divide-line"></div>
                    </div>

                    <h3 className="section-subtitle">Amazing products added recently in our catalog</h3>
                </div>

                <div className="row text-left product-ajax-grid">
                    {
                        product ?
                            product.slice( 0, 4 ).map( ( item, index ) => (
                                <div className="col-6 col-md-3">
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                        key={ "product-one" + index }
                                    />
                                </div>
                            ) )
                            :
                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                <div className="col-6 col-md-3">
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                </div>
                            )
                    }
                </div>
            </section>
        </Reveal>
    );
}
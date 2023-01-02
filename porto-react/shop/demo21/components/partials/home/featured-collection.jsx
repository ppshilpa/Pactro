import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product, loading } = props;

    return (
        <section className="featured-products-section">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Featured Products</h2>

                    <div className="row no-gutters">
                        {
                            loading ?
                                [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid col-6 col-sm-4 col-md-3 col-xl-2 pr-3 pl-3" key={ "product-one" + index }></div>
                                )
                                :
                                product && product.slice( 0, 6 ).map( ( item, index ) => (
                                    <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                        />
                                    </div>
                                ) )

                        }
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
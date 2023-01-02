import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductFour from '../../features/products/product-four';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function TopCollection ( props ) {
    const { products } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } >
            <section className="products-scroll-section">
                <div className="container">
                    <h2 className="section-title heading-border ls-n-10 border-0 text-center text-capitalize">Top 10 Products</h2>

                    <div className="row custom-srcollbar">
                        {
                            products ?
                                products.slice( 0, 10 ).map( ( item, index ) => (
                                    <div className="col-lg-3 col-sm-4 col-6" key={ "product-one" + index }>
                                        <ProductFour
                                            adClass="inner-quickview inner-icon"
                                            product={ item }
                                            index={ index }
                                        />
                                    </div>
                                ) )
                                :
                                [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                    <div className="col-lg-3 col-sm-4 col-6" key={ "product-one" + index }>
                                        <div className="skel-pro skel-pro-grid"></div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
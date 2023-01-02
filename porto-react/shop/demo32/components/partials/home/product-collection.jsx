import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function ProductCollection ( props ) {
    const { product } = props;

    return (
        <section className="products-container">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <div className="row">
                        {
                            product ?
                                product.slice( 0, 4 ).map( ( item, index ) => (
                                    <div className="col-6 col-md-4 col-xl-3" key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                        />
                                    </div>
                                ) )
                                :

                                [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-xl-3" key={ "Featured Product:" + index }>
                                        <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
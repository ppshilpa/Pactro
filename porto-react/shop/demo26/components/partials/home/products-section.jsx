import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function ProductsCollection ( props ) {
    const { product } = props;

    return (
        <div className="products-container bg-gray mt-1">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                    <div className="row custom-products no-gutters">
                        {
                            product ?
                                product.slice( 0, 6 ).map( ( item, index ) => (
                                    <div className="col-sm-6 col-lg-4" key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                        />
                                    </div>
                                ) )
                                :

                                [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="col-sm-6 col-lg-4" key={ "Featured Product:" + index }>
                                        <div className="skel-pro skel-pro-list" key={ "product-one" + index }></div>
                                    </div>
                                )
                        }
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
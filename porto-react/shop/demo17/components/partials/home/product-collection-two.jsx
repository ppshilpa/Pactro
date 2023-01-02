import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function ProductCollectionTwo ( props ) {
    const { product } = props;

    return (
        <section className="section-4 product-collection-two divide">
            <div className="container">
                <div className="row custom-divide-line mr-0 ml-0 bg-white">
                    {
                        product ?
                            product.map( ( item, index ) => (
                                <div className="col-lg-3 col-sm-4 col-6 p-0" key={ "product-one" + index }>
                                    <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce >
                                        <ProductOne
                                            adClass="inner-quickview inner-icon"
                                            product={ item }
                                        />
                                    </Reveal>
                                </div>
                            ) )
                            :

                            new Array( 8 ).fill( 1 ).map( ( item, index ) =>
                                <div className="col-lg-3 col-sm-4 col-6 p-0" key={ "Featured Product:" + index }>
                                    <div className="skel-pro skel-pro-grid p-3" key={ "product-one" + index }></div>
                                </div>
                            )
                    }
                </div>
            </div>
        </section>
    );
}
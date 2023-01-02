import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function ProductCollectionOne ( props ) {
    const { product } = props;

    return (
        <section className="section-2 product-collection container">
            <div className="row custom-divide-line mr-0 ml-0 bg-white">
                {
                    product ?
                        product.slice( 0, 6 ).map( ( item, index ) => (
                            <div className="col-md-4 col-6 p-0" key={ "product-one" + index }>
                                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce >
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                    />
                                </Reveal>
                            </div>
                        ) )
                        :

                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                            <div className="col-md-4 col-6 p-0" key={ "Featured Product:" + index }>
                                <div className="skel-pro skel-pro-grid p-3" key={ "product-one" + index }></div>
                            </div>
                        )
                }
            </div>
        </section>
    );
}
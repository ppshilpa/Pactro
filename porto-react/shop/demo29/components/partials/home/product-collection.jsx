import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function ProductCollection ( props ) {
    const { product } = props;

    return (
        <div className="featured-section bg-white">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="row">
                    {
                        product ?
                            product.map( ( item, index ) => (
                                <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "product-one" + index }>
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                    />
                                </div>
                            ) )
                            :

                            new Array( 12 ).fill( 1 ).map( ( item, index ) =>
                                <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "Featured Product:" + index }>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                </div>
                            )
                    }
                </div>

                <ALink href="/shop" className="btn with-icon align-center font2">Browse All<i className="fas fa-long-arrow-alt-right"></i></ALink>
            </Reveal>
        </div>
    );
}
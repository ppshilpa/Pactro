import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function RecentCollection ( props ) {
    const { product } = props;

    return (
        <section className="recent-section">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <h2 className="section-title pb-3 mb-2">Recent Books</h2>

                    <div className="row">
                        {
                            product ?
                                product.slice( 0, 6 ).map( ( item, index ) => (
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                        />
                                    </div>
                                ) )
                                :
                                new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "product-one" + index }>
                                        <div className="skel-pro skel-pro-grid"></div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
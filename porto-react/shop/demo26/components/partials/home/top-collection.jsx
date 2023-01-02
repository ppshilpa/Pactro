import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function TopCollection ( props ) {
    const { product } = props;

    return (
        <div className="top-sellers-section">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <div className="banner banner3 d-flex flex-wrap align-items-center" style={ { background: `#dc7a1f no-repeat center/cover url(images/home/banners/banner-3.jpg)` } }>
                        <div className="col-lg-9 mb-2 mb-lg-0">
                            <h2 className="d-inline-block ls-n-20 text-white text-uppercase mb-0">
                                <span className="sale-off">Big sale</span> ALL HIGH PERFORMANCE ITEMS UP TO 70% OFF</h2>
                            <h6 className="d-inline-block mb-0">Online Purchases Only</h6>
                        </div>

                        <div className="col-lg-3 text-lg-right">
                            <ALink href="/shop" className="btn btn-light btn-lg">View Sale</ALink>
                        </div>
                    </div>

                    <h2 className="section-title pb-3 m-b-4">Top Seller</h2>

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

                                [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "Featured Product:" + index }>
                                        <div className="skel-pro skel-pro-list" key={ "product-one" + index }></div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
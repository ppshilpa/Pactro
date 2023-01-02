import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'

export default function SaleCollection ( props ) {
    const { products } = props;

    return (
        <section className="sale-products-section">
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                    <h2 className="section-title heading-border ls-n-10 border-0 text-center text-capitalize">Sale Products</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                        {
                            products ?
                                products.map( ( item, index ) => (
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                        key={ "Sale Product:" + index }
                                    />
                                ) )
                                :
                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )

                        }
                    </OwlCarousel>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="banner banner-big-sale" style={ { background: '#2A95CB center/cover url(images/home/banners/banner.jpg)' } }>
                        <div className="banner-content row align-items-center mx-0 justify-content-center">
                            <div className="col-xl-9 col-sm-8">
                                <h2 className="text-white text-uppercase text-center text-sm-left ls-n-20 mb-md-0 px-4">
                                    <b className="d-inline-block mb-1 mb-xl-0">Big Sale</b>All new fashion brands items up to 70% off<small className="text-transform-none align-middle ls-n-10">Online Purchases
                                        Only</small>
                                </h2>
                            </div>
                            <div className="col-md-3 col-sm-4 text-center text-sm-right">
                                <ALink className="btn btn-light btn-white btn-lg" href="/shop">View Sale</ALink>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

    );
}
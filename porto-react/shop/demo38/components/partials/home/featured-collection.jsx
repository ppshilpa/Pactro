import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeInLeftShorter, fadeIn } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { products } = props;

    return (
        <section className="products-container feautured-container">
            <div className="container">
                <div className="heading text-uppercase text-center">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                        <h5>EXCLUSIVE SELECTION</h5>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                        <h2 className="text-capitalize mb-0">Featured Products</h2>
                    </Reveal>
                </div>

                <Reveal keyframes={ fadeIn } delay={ 500 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                        {
                            products ?
                                products.map( ( item, index ) => (
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                        key={ "product-one" + index }
                                    />
                                ) )

                                :
                                [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )

                        }
                    </OwlCarousel>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="banner banner-big-sale mb-6" style={ { background: '#2A95CB center/cover url(images/home/banners/banner.jpg)' } }>
                        <div className="banner-content row align-items-center mx-0">
                            <div className="col-lg-8 col-md-9 d-flex justify-content-center justify-content-md-start flex-column flex-md-row">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <h2 className="text-dark text-uppercase text-center text-md-left ls-n-20 mb-md-0 px-md-4">
                                        <b className="text-white d-inline-block mb-1 mb-md-0">Big Sale</b>
                                    </h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <h3 className="text-center text-md-left">
                                        Delivering Covid19 Essentials
                                    <small className="d-block text-transform-none align-middle">HAND SANITIZER,
                                        INFRARED THERMOMETERS AND MORE…</small>
                                    </h3>
                                </Reveal>
                            </div>
                            <div className="col-lg-4 col-md-3 text-center text-md-left text-lg-right mt-2 mt-lg-0">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                    <ALink className="btn btn-light btn-primary btn-lg" href="/shop">Shop Now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function NewCollection ( props ) {
    const { product } = props;

    return (
        <section className="recent-products">
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Recent Products</h2>

                    <div className="row">
                        <OwlCarousel adClass="products-slider owl-nav-outisde show-nav-hover nav-image-center custom-nav" options={ productSlider }>
                            {
                                product ?
                                    product.slice( 0, 6 ).map( ( item, index ) => (
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                            key={ "product-one" + index }
                                        />
                                    ) )
                                    :
                                    [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid  pr-3 pl-3" key={ "product-one" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1000 } triggerOnce>
                    <div className="banner banner3 bg-dark">
                        <div className="row m-0 no-gutters align-items-center">
                            <div className="col-md-6 col-lg-3 align-self-baseline">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-3.jpg"
                                        width="100%"
                                        height={ 136 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                            </div>
                            <div className="col-md-6 col-lg-4 py-4 py-lg-5">
                                <div className="px-5 px-md-0">
                                    <h3 className="font1 text-uppercase m-b-2">Check new arrivals</h3>
                                    <h2 className="font1 ls-10 text-uppercase text-white mb-0">Explore Smartphones</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 py-4 d-flex justify-content-md-center">
                                <div className="px-5 px-md-0">
                                    <div className="coupon-sale-text d-flex flex-column align-items-start">
                                        <h4 className="m-b-2 font1 d-block text-dark bg-white skew-box">Exclusive
                                            COUPON</h4>
                                        <h5 className="mb-0 font1 d-inline-block bg-primary skew-box"><i
                                            className="text-white ls-0">UP
                                                TO</i><b className="text-white">$200</b><sub className="text-white">OFF</sub>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 py-4 py-lg-5">
                                <div className="px-5 px-md-0">
                                    <ALink href="/shop" className="btn btn-dark font1 ls-10">View All Now</ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
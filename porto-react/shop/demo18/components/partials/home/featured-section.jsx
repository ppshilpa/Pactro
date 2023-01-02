import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product, loading } = props;

    return (
        <section className="product-slider-section bg-gray">
            <div className="container-fluid">
                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="subtitle text-center text-uppercase mb-2 appear-animate" data-animation-name="fadeIn">
                        Featured products</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="featured-products owl-carousel owl-theme show-nav-hover nav-outer nav-image-center mb-3" options={ productSlider }>
                        {
                            product ?
                                product.map( ( item, index ) => (

                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                        key={ "product-one" + index }
                                    />

                                ) )

                                :
                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )

                        }
                    </OwlCarousel>
                </Reveal>

                <div className="row">
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner" style={ { backgroundColor: '#fff' } } >
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner1.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                                <div
                                    className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <h4 className="mb-0">Summer Sale</h4>
                                        <h5 className="text-uppercase mb-0">20% off</h5>
                                    </div>
                                    <ALink href="/shop" className="btn btn-dark">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                            <div className="banner" style={ { backgroundColor: '#111' } } >
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner2.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                                <div
                                    className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <h4 className="text-white mb-0">Flash Sale</h4>
                                        <h5 className="text-uppercase text-white mb-0">30% off</h5>
                                    </div>
                                    <ALink href="/shop" className="btn btn-light">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
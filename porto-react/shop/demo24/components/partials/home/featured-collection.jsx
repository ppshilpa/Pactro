import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product } = props;

    return (
        <section className="featured-products-container curved-border bg-gray">
            <div className="container">
                <h2 className="section-title mb-2">Featured Items</h2>

                <div className="row">
                    <OwlCarousel adClass="featured-products dots-small three-col nav-image-center" options={ productSlider }>
                        {
                            product ?
                                product.map( ( item, index ) => (
                                    <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce
                                        key={ "product-one" + index }>
                                        <ProductOne
                                            adClass="inner-quickview inner-icon"
                                            product={ item }
                                        />
                                    </Reveal>
                                ) )

                                :
                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid pr-3 pl-3" key={ "product-one" + index }></div>
                                )
                        }
                    </OwlCarousel>
                </div>

                <hr />
            </div>

            <div className="banner-section">
                <div className="container position-static">
                    <div className="banner banner1 bg-white position-static">
                        <div className="row no-gutters m-0 align-items-center">
                            <div className="col-md-5 col-xl-6 position-static">
                                <div className="shape-wrapper">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="product"
                                            src="images/home/shape2.png"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height={ 408 }
                                        />
                                    </figure>
                                </div>

                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-1.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 234 }
                                        className="position-relative"
                                    />
                                </figure>
                            </div>
                            <div className="col-md-7 col-xl-6 px-4 px-md-0">
                                <div className="row align-items-center py-5">
                                    <div className="col-sm-6 col-lg-7 mb-2 mb-sm-0">
                                        <h2 className="mb-0">Meet Porto</h2>
                                        <p className="mb-0">The easier way to build your
                                                portfolio & showcase your work.</p>
                                    </div>
                                    <div className="col-sm-6 col-lg-5 text-sm-center">
                                        <ALink href="/shop" className="btn btn-dark btn-round ls-0">Get Started
                                                <i className="fas fa-chevron-right"></i></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
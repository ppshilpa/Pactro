import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function BestCollection ( props ) {
    const { product, loading } = props;
    const sliderOptions = { ...productSlider, nav: false, dots: true, responsive: { ...productSlider.responsive, 576: { items: 2 } } };

    return (
        <section className={ `best-selling-products skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title m-b-2">Best Selling Products</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h5 className="section-info p-b-4 mb-2">Only the best seller products added recently in our catalog</h5>
                </Reveal>

                <div className="row">
                    <div className="col-md-6">
                        <div className="banner banner1 mb-2 media-with-lazy">
                            <figure>
                                <LazyLoadImage
                                    alt="Banner"
                                    src="images/home/banners/banner-1.png"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-middle banner-layer-right text-right">
                                <h3 className="text-uppercase mb-0">Fragrance Offers</h3>
                                <h4 className="font3 text-uppercase mb-0">
                                    <small
                                        className="font2 font-weight-bold ls-n-20"><sup>up</sup><sub>to</sub></small><i>45%</i>
                                </h4>
                                <h5 className="ls-n-20 text-uppercase">off</h5>
                                <ALink href="/shop" className="btn btn-dark btn-lg">Shop now</ALink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <OwlCarousel adClass="dots-small" options={ sliderOptions }>
                            {
                                product ?
                                    product.slice( 0, 3 ).map( ( item, index ) => (
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
                    </div>
                </div>
            </div>
        </section>
    );
}
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { product } = props;

    return (
        <section className="featured-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-b-3">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="banner banner2"
                                style={ { backgroundImage: 'url(images/home/banners/banner-2.jpg)', backgroundColor: '#343339' } }>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Award Winners</h3>
                                    <p className="font2 m-b-3">12 Books</p>
                                    <ALink href="/shop" className="btn btn-primary">View Collections<i
                                        className="fas fa-long-arrow-alt-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-4 m-b-3">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 } triggerOnce >
                            <div className="banner banner3"
                                style={ { backgroundImage: 'url(images/home/banners/banner-3.jpg)', backgroundColor: '#343436' } }>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Deal in books</h3>
                                    <p className="font2 m-b-3">21 Books</p>
                                    <ALink href="/shop" className="btn btn-secondary">View Collections<i
                                        className="fas fa-long-arrow-alt-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-4 m-b-5">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 600 } duration={ 1000 } triggerOnce >
                            <div className="banner banner4"
                                style={ { backgroundImage: 'url(images/home/banners/banner-4.jpg)', backgroundColor: '#343436' } }>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Most gifted</h3>
                                    <p className="font2 m-b-3">38 Books</p>
                                    <ALink href="/shop" className="btn btn-teritary">View Collections<i
                                        className="fas fa-long-arrow-alt-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                    <h2 className="section-title pb-3 mb-2">Featured Books</h2>

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
                </Reveal>
            </div>

        </section>
    );
}
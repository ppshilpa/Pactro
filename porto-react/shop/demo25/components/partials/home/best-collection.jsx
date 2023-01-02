import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function BestCollection ( props ) {
    const { product } = props;

    return (
        <section className="best-sellers">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <div className="heading pb-3 mb-2 d-flex align-items-center justify-content-between">
                        <h2 className="section-title border-0">Best Sellers Books</h2>
                        <ALink href="/shop" className="className btn-link pt-1">View all products<i
                            className="fas fa-long-arrow-alt-right"></i></ALink>
                    </div>

                    <div className="row no-gutters m-0">
                        <div className="col-md-4">
                            <div className="banner banner1 bg-white">
                                <div className="banner-layer d-flex flex-column align-items-center justify-content-center h-100">
                                    <h5 className="font-weight-normal text-uppercase m-b-1"><i>Book Club</i></h5>
                                    <h2 className="text-center">A selection with only the best books</h2>
                                    <figure>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-1.png"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height={ 283 }
                                        />
                                    </figure>
                                    <ALink href="/shop" className="btn btn-primary">Explore Books <i
                                        className="fas fa-long-arrow-alt-right"></i></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="row custom-products no-gutters">
                                {
                                    product ?
                                        product.slice( 0, 8 ).map( ( item, index ) => (
                                            <div className="col-6 col-md-4 col-xl-3" key={ "product-one" + index }>
                                                <ProductOne
                                                    product={ item }
                                                    adClass="inner-quickview inner-icon"
                                                />
                                            </div>
                                        ) )
                                        :
                                        new Array( 8 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-xl-3" key={ "product-one" + index }>
                                                <div className="skel-pro skel-pro-grid"></div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
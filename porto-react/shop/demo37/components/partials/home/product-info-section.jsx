import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductSix from '../../features/products/product-six';
import ProductFive from '../../features/products/product-five';

// Import Settings
import { fadeInLeftShorter, fadeIn } from '../../../utils/data/keyframes'

export default function ProductInfoSection ( props ) {
    const { products } = props;

    return (
        <section className="product-info-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="heading">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                                <h4 className="text-transform-none">Super Sale</h4>
                            </Reveal>

                            <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } duration={ 1000 } triggerOnce >
                                <h2 className="text-transform-none">TRENDING LOOKS</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } duration={ 1000 } triggerOnce >
                                <div className="d-flex">
                                    <h5 className="d-inline-block mb-0">
                                        <span>for only</span>
                                        <b className="coupon-sale-text text-white bg-secondary align-middle">
                                            <sup>$</sup>
                                            <em className="align-text-top">99</em>
                                            <sup>99</sup>
                                        </b>
                                    </h5>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <ul className="product-info-content">
                                {
                                    products && products.slice( 0, 6 ).map( ( item, index ) => (
                                        <div className="product-info-item" key={ "product-one" + index }>
                                            <ProductFive
                                                product={ item }
                                            />
                                        </div>
                                    ) )
                                }
                            </ul>
                        </Reveal>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 position-relative mt-auto" style={ { zIndex: '3' } }>
                        <Reveal keyframes={ fadeIn } delay={ 1200 } duration={ 1000 } triggerOnce >
                            <div className="product-info-image media-with-lazy">
                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="Product"
                                        src="images/home/banners/home_banner1.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>


                                {
                                    products && products.slice( 0, 6 ).map( ( item, index ) => (
                                        <div className={ `product-popup-dot ${ index === 0 ? 'dot-top-one' : index === 1 ? 'dot-middle-one' : index === 2 ? 'dot-bottom-one' : index === 3 ? 'dot-top-two' : index === 4 ? 'dot-middle-two' : index === 5 ? 'dot-bottom-two' : '' }` } key={ "Dot:" + index }>
                                            <ALink href="#"><i className="fas fa-circle"></i></ALink>
                                            <div className="product-popup-wrap">
                                                <ProductSix
                                                    adClass="inner-quickview inner-icon"
                                                    product={ item }
                                                />
                                            </div>
                                        </div>
                                    ) )
                                }
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-12 col-sm-8 col-md-6 col-lg-2 d-flex align-items-center">
                        <div className="btn-group flex-column mt-0 mt-md-3 mt-lg-0">
                            <Reveal className="btn btn-dark btn-shop m-b-3" keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1000 } triggerOnce >
                                <ALink href={ { pathname: '/shop', query: { category: 'men' } } } className="text-white">SHOP MEN</ALink>
                            </Reveal>

                            <Reveal className="btn btn-dark btn-shop" keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1000 } triggerOnce >
                                <ALink href={ { pathname: '/shop', query: { category: 'women' } } } className="text-white">SHOP WOMEN</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
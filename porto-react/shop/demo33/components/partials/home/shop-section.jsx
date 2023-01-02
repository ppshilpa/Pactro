import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import Product from './product';
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

function ShopSection ( { product } ) {
    return (
        <section className="section shop-section mb-3 overflow-hidden">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title">Browse By Category</h2>
                </Reveal>

                <OwlCarousel adClass="nav-thick show-nav-hover nav-outer pb-2 mb-3" options={ categorySlider }>
                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                        <div className="product-category media-with-lazy content-center overlay-light mb-0">
                            <ALink href={ { pathname: '/shop', query: { category: 'sunglasses' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/categories/category-1.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="category-content">
                                    <h3>Sunglasses</h3>
                                    <span><mark className="count">22</mark> products</span>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                        <div className="product-category media-with-lazy content-center overlay-light mb-0">
                            <ALink href={ { pathname: '/shop', query: { category: 'bags-2' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/categories/category-2.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="category-content">
                                    <h3>Bags</h3>
                                    <span><mark className="count">22</mark> products</span>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                        <div className="product-category media-with-lazy content-center overlay-light mb-0">
                            <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/categories/category-3.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="category-content">
                                    <h3>Shoes</h3>
                                    <span><mark className="count">22</mark> products</span>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                        <div className="product-category media-with-lazy content-center overlay-light mb-0">
                            <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/categories/category-4.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="category-content">
                                    <h3>Accessories</h3>
                                    <span><mark className="count">22</mark> products</span>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>
                </OwlCarousel>

                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title">Featured Products Grid</h2>
                </Reveal>

                <Reveal className keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                    <div className="row products-grid">
                        {
                            product ?
                                product.slice( 1, 5 ).map( ( item, index ) => (
                                    <Product
                                        adClass={ `${index === 0 || index === 1 ? ( index === 0 ? 'grid-height-1 width-xxl height-xxl' : 'grid-height-1 height-xxl' ) : 'grid-height-1-2 height-xl'}` }
                                        product={ item }
                                        key={ "product-one" + index }
                                    />
                                ) )

                                :
                                [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                    <div className={ `skel-pro skel-pro-grid ${index === 0 || index === 1 ? ( index === 0 ? 'grid-height-1 width-xxl height-xxl' : 'grid-height-1 height-xxl' ) : 'grid-height-1-2 height-xl'}` } key={ "product-one" + index }></div>
                                )
                        }
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default React.memo( ShopSection );
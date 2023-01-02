import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <section className="category-section mb-3">
            <div className="container">
                <h2 className="section-title ls-n-10 text-center text-uppercase">Featured Categories</h2>

                <div className="row">
                    <div className="col-sm-4 col-md-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="product-category">
                                <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/categories/cat-1.jpg"
                                            width="100%"
                                            height={ 240 }
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h3>Fashion</h3>
                                    </div>
                                </ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-8 col-md-6">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="product-category">
                                <ALink href={ { pathname: '/shop', query: { category: 'furniture' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/categories/cat-2.jpg"
                                            width="100%"
                                            height={ 240 }
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h3>Furniture</h3>
                                    </div>
                                </ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-5 col-md-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="product-category">
                                <ALink href={ { pathname: '/shop', query: { category: 'decore' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/categories/cat-3.jpg"
                                            width="100%"
                                            height={ 240 }
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h3>Decore</h3>
                                    </div>
                                </ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-7 col-md-4">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="product-category">
                                <ALink href={ { pathname: '/shop', query: { category: 'accessories-1' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/categories/cat-4.jpg"
                                            width="100%"
                                            height={ 240 }
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h3>Accessories</h3>
                                    </div>
                                </ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-4 col-md-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="product-category">
                                <ALink href={ { pathname: '/shop', query: { category: 'mobile' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/categories/cat-5.jpg"
                                            width="100%"
                                            height={ 240 }
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h3>Mobile</h3>
                                    </div>
                                </ALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-8 col-md-5">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="product-category">
                                <ALink href={ { pathname: '/shop', query: { category: 'footwear' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/categories/cat-6.jpg"
                                            width="100%"
                                            height={ 240 }
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h3>Footwear</h3>
                                    </div>
                                </ALink>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default React.memo( CategorySection );
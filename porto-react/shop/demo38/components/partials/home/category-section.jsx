import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeIn } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <section className="category-container curve-style bg-primary position-relative" style={ { backgroundImage: 'url(images/home/banners/category-banner.jpg)' } }>
            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <div className="heading text-uppercase text-center">
                        <h5 className="text-white">DEPARTMENTS</h5>
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <h2 className="text-capitalize text-white mb-0">Browse Our Categories</h2>
                        </Reveal>
                    </div>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                        <OwlCarousel adClass="categories-slider show-nav-hover nav-outer" options={ categorySlider }>
                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'gynecology' } } }>
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
                                        <h3>Gynecology</h3>
                                    </div>
                                </ALink>
                            </div>

                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'hepatology' } } }>
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
                                        <h3>Hepatology</h3>
                                    </div>
                                </ALink>
                            </div>

                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'respiratory' } } }>
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
                                        <h3>Respiratory</h3>
                                    </div>
                                </ALink>
                            </div>

                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'cardiology' } } }>
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
                                        <h3>Cardiology</h3>
                                    </div>
                                </ALink>
                            </div>

                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'gastroenterology' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/categories/category-5.jpg"
                                            width="100%"
                                            height="auto"
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>
                                    <div className="category-content">
                                        <h3>Gastroenterology</h3>
                                    </div>
                                </ALink>
                            </div>

                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'dental-care' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/categories/category-6.jpg"
                                            width="100%"
                                            height="auto"
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>
                                    <div className="category-content">
                                        <h3>Dental Care</h3>
                                    </div>
                                </ALink>
                            </div>

                            <div className="product-category media-with-lazy">
                                <ALink href={ { pathname: '/shop', query: { category: 'respiratory' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/categories/category-6.jpg"
                                            width="100%"
                                            height="auto"
                                            threshold={ 500 }
                                            effect="black and white"
                                        />
                                    </figure>
                                    <div className="category-content">
                                        <h3>Respiratory</h3>
                                    </div>
                                </ALink>
                            </div>
                        </OwlCarousel>
                    </Reveal>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( CategorySection );
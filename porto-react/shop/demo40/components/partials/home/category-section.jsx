import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 } triggerOnce>
            <section className="categories-section">
                <div className="heading d-flex align-items-center flex-column flex-lg-row border-0 mb-0">
                    <h2 className="text-transform-none mb-0">Popular Departments</h2>
                </div>

                <OwlCarousel options={ categorySlider }>
                    <div className="banner banner-image font2 media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'vegetables' } } }>
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
                        </ALink>
                        <div className="banner-layer banner-layer-middle">
                            <h3>Vegetables</h3>
                            <span>2 Products </span>
                        </div>
                    </div>

                    <div className="banner banner-image font2 media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'fruit' } } }>
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
                        </ALink>
                        <div className="banner-layer banner-layer-middle">
                            <h3>Fruits</h3>
                            <span>2 Products </span>
                        </div>
                    </div>

                    <div className="banner banner-image font2 media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'cooking' } } }>
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
                        </ALink>
                        <div className="banner-layer banner-layer-middle">
                            <h3>Cooking</h3>
                            <span>2 Products </span>
                        </div>
                    </div>

                    <div className="banner banner-image font2 media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'breakfast' } } }>
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
                        </ALink>
                        <div className="banner-layer banner-layer-middle">
                            <h3>Breakfast</h3>
                            <span>2 Products </span>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        </Reveal>
    );
}

export default React.memo( CategorySection );
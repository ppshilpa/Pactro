import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="category-section text-center">
                <div className="section-title">
                    <div className="divide-txt">
                        <div className="divide-line"></div>
                        <span><strong>Summer</strong> Collection</span>
                        <div className="divide-line"></div>
                    </div>

                    <h3 className="section-subtitle">Amazing products added recently in our catalog</h3>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-category media-with-lazy">
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/banners/home-banner1.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="category-content content-right">
                                    <h3>Sport<br />Shoes</h3>
                                </div>
                            </ALink>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6 col-lg-6 height-x1">
                                <div className="product-category media-with-lazy">
                                    <ALink href="/shop">
                                        <figure>
                                            <LazyLoadImage
                                                alt="category"
                                                src="images/home/banners/banner-dark.jpg"
                                                width="100%"
                                                height="auto"
                                                threshold={ 500 }
                                                effect="black and white"
                                            />
                                        </figure>

                                        <div className="category-content content-white">
                                            <h3>For Her</h3>
                                        </div>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-6 col-lg-6 height-x1">
                                <div className="product-category media-with-lazy">
                                    <ALink href="/shop">
                                        <figure>
                                            <LazyLoadImage
                                                alt="category"
                                                src="images/home/products/product-9.jpg"
                                                width="100%"
                                                height="auto"
                                                threshold={ 500 }
                                                effect="black and white"
                                            />
                                        </figure>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-6 col-lg-6 height-x1">
                                <div className="product-category media-with-lazy">
                                    <ALink href="/shop">
                                        <figure>
                                            <LazyLoadImage
                                                alt="category"
                                                src="images/home/banners/banner-dark.jpg"
                                                width="100%"
                                                height="auto"
                                                threshold={ 500 }
                                                effect="black and white"
                                            />
                                        </figure>

                                        <div className="category-content content-white">
                                            <h3>For Him</h3>
                                        </div>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-6 col-lg-6 height-x1">
                                <div className="product-category media-with-lazy">
                                    <ALink href="/shop">
                                        <figure>
                                            <LazyLoadImage
                                                alt="category"
                                                src="images/home/products/product-11.jpg"
                                                width="100%"
                                                height="auto"
                                                threshold={ 500 }
                                                effect="black and white"
                                            />
                                        </figure>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}

export default React.memo( CategorySection );
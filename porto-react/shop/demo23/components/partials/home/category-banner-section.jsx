import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';

function CategoryBannerSection () {
    return (
        <section className="cats-banner-section mb-3">
            <div className="row m-0 no-gutters">
                <div className="col-lg-3">
                    <div className="cat-banner d-flex flex-column align-items-center justify-content-center h-100">
                        <h4 className="font4 line-height-1 ls-0 text-primary mb-0">Best Collections</h4>
                        <p className="font2 line-height-1 mb-0">Selected Products From Famous Brands</p>
                    </div>
                </div>

                <div className="col-lg-9">
                    <OwlCarousel adClass="categories-slider owl-theme nav-outer show-nav-hover" options={ categorySlider }>
                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'boys' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/products/cats/cat-1.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Boys</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'babies' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/products/cats/cat-2.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Babies</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'girls' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="images/home/products/cats/cat-3.jpg"
                                        width="100%"
                                        height="auto"
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Girls</h3>
                                </div>
                            </ALink>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}

export default React.memo( CategoryBannerSection );
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';

function CategorySection() {
    return (
        <section className="section-5 category-section container appear-animate" data-animation-duration="1200">
            <h2 className="section-title text-center">Shop By Category</h2>

            <div className="border-container">
                <div className="row">
                    <div className="col-md-4 col-6">
                        <ALink className="btn btn-dark text-white btn-cat" role="button" href={{ pathname: '/shop', query: { category: 'apply' } }}>APPLY</ALink>
                    </div>

                    <div className="col-md-4 col-6">
                        <ALink className="btn btn-dark text-white btn-cat" role="button" href={{ pathname: '/shop', query: { category: 'brushes' } }}>BRUSHES</ALink>
                    </div>

                    <div className="col-md-4 col-6">
                        <ALink className="btn btn-dark text-white btn-cat" role="button" href={{ pathname: '/shop', query: { category: 'cheek' } }}>CHEEK</ALink>
                    </div>

                    <div className="col-md-4 col-6">
                        <ALink className="btn btn-dark text-white btn-cat" role="button" href={{ pathname: '/shop', query: { category: 'eyebrow' } }}>EYEBROW</ALink>
                    </div>

                    <div className="col-md-4 col-6">
                        <ALink className="btn btn-dark text-white btn-cat" role="button" href={{ pathname: '/shop', query: { category: 'eyes' } }}>EYES</ALink>
                    </div>

                    <div className="col-md-4 col-6">
                        <ALink className="btn btn-dark text-white btn-cat" role="button" href={{ pathname: '/shop', query: { category: 'face' } }}>FACE</ALink>
                    </div>
                </div>
            </div>

            <div className="brand-section pt-5">
                <h2 className="section-title text-center">Shop By Brand</h2>

                <OwlCarousel adClass="brands-slider nav-outer" options={brandSlider}>
                    <ALink href={{ pathname: '/shop', query: { brands: 'david' } }}>
                        <div className="brand">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-3.png"
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </ALink>

                    <ALink href={{ pathname: '/shop', query: { brands: 'jones' } }}>
                        <div className="brand">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-4.png"
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </ALink>

                    <ALink href={{ pathname: '/shop', query: { brands: 'goldengrid' } }}>
                        <div className="brand">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-5.png"
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </ALink>

                    <ALink href={{ pathname: '/shop', query: { brands: 'climb' } }}>
                        <div className="brand">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-6.png"
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </ALink>

                    <ALink href={{ pathname: '/shop', query: { brands: 'golden' } }}>
                        <div className="brand">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-1.png"
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </ALink>

                    <ALink href={{ pathname: '/shop', query: { brands: 'david' } }}>
                        <div className="brand">
                            <LazyLoadImage
                                alt="brand"
                                src="images/home/brands/brand-3.png"
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </ALink>
                </OwlCarousel>
            </div>
        </section >
    );
}

export default React.memo(CategorySection);
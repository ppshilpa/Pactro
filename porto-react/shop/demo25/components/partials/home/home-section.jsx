import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

function HomeSection () {
    return (
        <section className="intro-section overflow-hidden">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <OwlCarousel adClass="home-slider" options={ HomeSlider }>
                    <div className="home-slide">
                        <figure className="mb-0">
                            <img src="images/home/slider/arts-photography.jpg" width="554" height="405" alt="product" />
                        </figure>

                        <div className="home-slide-content text-center">
                            <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                            <span className="product-count d-block font2 ls-10 text-uppercase">2 Products</span>
                            <ALink href="/shop" className="btn text-white">View All Products <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="product-default media-with-lazy">
                            <ALink href="/product/default/the-night-before">
                                <figure>
                                    <img src="images/home/products/product-1.jpg" width="238" height="375" alt="product" />
                                </figure>
                            </ALink>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="/product/default/the-night-before">The Night Before</ALink>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '100%' } }></span>
                                        <span className="tooltiptext tooltip-top">5.00</span>
                                    </div>
                                </div>
                                <div className="price-box">
                                    <span className="product-price">$299.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide">
                        <figure className="mb-0">
                            <img src="images/home/slider/business-investing.jpg" width="54" height="405" alt="product" />
                        </figure>

                        <div className="home-slide-content text-center">
                            <h3 className="ls-n-10 text-white mb-0">Business &amp; Investing</h3>
                            <span className="product-count d-block font2 ls-10 text-uppercase">3 Products</span>
                            <ALink href="/shop" className="btn text-white">View All Products <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="product-default media-with-lazy">
                            <ALink href="/product/default/call-an-audible">
                                <figure>
                                    <img src="images/home/products/product-2.jpg" width="238" height="375" alt="product" />
                                </figure>
                            </ALink>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="/product/default/call-an-audible">Call an Audible</ALink>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '80%' } }></span>
                                        <span className="tooltiptext tooltip-top">4.00</span>
                                    </div>
                                </div>
                                <div className="price-box">
                                    <span className="product-price">$299.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide">
                        <figure className="mb-0">
                            <img src="images/home/slider/literature-fiction.jpg" width="554" height="405" alt="product" />
                        </figure>

                        <div className="home-slide-content text-center">
                            <h3 className="ls-n-10 text-white mb-0">Literature &amp; Fiction</h3>
                            <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                            <ALink href="/shop" className="btn text-white">View All Products <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="product-default media-with-lazy">
                            <ALink href="/product/default/ask-again-yes">
                                <figure>
                                    <img src="images/home/products/product-3.jpg" width="238" height="375" alt="product" />
                                </figure>
                            </ALink>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="/product/default/ask-again-yes">Ask Again Yes</ALink>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '60%' } }></span>
                                        <span className="tooltiptext tooltip-top">3.00</span>
                                    </div>
                                </div>
                                <div className="price-box">
                                    <span className="old-price">$299.0</span>
                                    <span className="product-price">$259.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide">
                        <figure className="mb-0">
                            <img src="images/home/slider/mystery-suspense.jpg" width="554" height="405" alt="product" />
                        </figure>

                        <div className="home-slide-content text-center">
                            <h3 className="ls-n-10 text-white mb-0">Mystery Suspense</h3>
                            <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                            <ALink href="/shop" className="btn text-white">View All Products <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="product-default media-with-lazy">
                            <ALink href="/product/default/the-butterfly-garden">
                                <figure>
                                    <img src="images/home/products/product-4.jpg" width="238" height="375" alt="product" />
                                </figure>
                            </ALink>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="/product/default/the-butterfly-garden">The Butterfly Garden</ALink>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '60%' } }></span>
                                        <span className="tooltiptext tooltip-top">3.00</span>
                                    </div>
                                </div>
                                <div className="price-box">
                                    <span className="product-price">$259.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide">
                        <figure className="mb-0">
                            <img src="images/home/slider/scifi-fantasy.jpg" width="554" height="405" alt="product" />
                        </figure>

                        <div className="home-slide-content text-center">
                            <h3 className="ls-n-10 text-white mb-0">Scifi Fantasy</h3>
                            <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                            <ALink href="/shop" className="btn text-white">View All Products <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="product-default media-with-lazy">
                            <ALink href="/product/default/sorcery-of-thrones">
                                <figure>
                                    <img src="images/home/products/product-5.jpg" width="238" height="375" alt="product" />
                                </figure>
                            </ALink>

                            <div className="product-details">
                                <h3 className="product-title">
                                    <ALink href="/product/default/sorcery-of-thrones">Sorcery of Thorns</ALink>
                                </h3>

                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '60%' } }></span>
                                        <span className="tooltiptext tooltip-top">3.00</span>
                                    </div>
                                </div>
                                <div className="price-box">
                                    <span className="product-price">$599.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </Reveal>
        </section>
    );
}

export default React.memo( HomeSection );
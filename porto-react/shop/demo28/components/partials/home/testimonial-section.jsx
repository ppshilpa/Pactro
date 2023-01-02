import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigs
import { testimonialSlider } from '../../../utils/data/slider';

function TestimonialSection () {
    return (
        <section className="testimonials-section custom-testimonials-section" id="testimonial">
            <div className="container">
                <h2 className="subtitle text-center">TESTIMONIALS</h2>

                <OwlCarousel adClass="testimonials-carousel images-left" options={ testimonialSlider }>
                    <div className="testimonial">
                        <figure>
                            <LazyLoadImage
                                alt="client"
                                src="images/home/member/client-1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="testimonial-owner">
                            <div className="meta">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                    auctor,
                                    faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet nulla
                                    posuere
                                            vitae. Aenean a rutrum dolor. Ut quis nunc ligula. Fusce</p>
                                </blockquote>

                                <h4 className="testimonial-title">John Doe</h4>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '60%' } }></span>
                                        <span className="tooltiptext tooltip-top">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <figure>
                            <LazyLoadImage
                                alt="client"
                                src="images/home/member/client-2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="testimonial-owner">
                            <div className="meta">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                    auctor,
                                    faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet nulla
                                    posuere
                                            vitae. Aenean a rutrum dolor. Ut quis nunc ligula. Fusce</p>
                                </blockquote>

                                <h4 className="testimonial-title">Jessica Doe</h4>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '80%' } }></span>
                                        <span className="tooltiptext tooltip-top">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <figure>
                            <LazyLoadImage
                                alt="client"
                                src="images/home/member/client-3.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="testimonial-owner">
                            <div className="meta">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                    auctor,
                                    faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet nulla
                                    posuere
                                            vitae. Aenean a rutrum dolor. Ut quis nunc ligula. Fusce</p>
                                </blockquote>

                                <h4 className="testimonial-title">Chris Doe</h4>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={ { width: '80%' } }></span>
                                        <span className="tooltiptext tooltip-top">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
}

export default React.memo( TestimonialSection );
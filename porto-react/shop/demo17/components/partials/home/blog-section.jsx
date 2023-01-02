import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import BlogTypeFour from '../../features/blogs/blog-type-four';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function BlogSection ( props ) {
    const { blogs } = props;

    return (
        <section className="section-6 blog-section bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-2 mb-sm-0 media-with-zoom">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <h2 className="section-title">Latest News</h2>

                            <OwlCarousel options={ { dots: true } }>
                                {
                                    blogs ?
                                        blogs.slice( 0, 2 ).map( ( blog, index ) => (
                                            <BlogTypeFour blog={ blog } key={ "BlogTypeThree" + index } />
                                        ) )
                                        :
                                        new Array( 1 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro skel-pro-list" key={ "Skeleton:" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </Reveal>
                    </div>

                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeIn } delay={ 400 } duration={ 500 } triggerOnce>
                            <h2 className="section-title">Latest Product Reviews</h2>

                            <OwlCarousel options={ { dots: true } }>
                                <div className="testimonial bg-white">
                                    <div className="testimonial-owner">
                                        <figure>
                                            <LazyLoadImage
                                                alt="client"
                                                src="images/home/products/cart/2-1.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 58 }
                                            />
                                        </figure>

                                        <div className="testi-content">
                                            <div className="ratings-container mb-1">
                                                <div className="product-ratings">
                                                    <div className="ratings" style={ { width: '80' } }></div>
                                                </div>
                                            </div>

                                            <h4 className="testimonial-title p-0">Fashion High Hill</h4>

                                            <blockquote className="ml-3 pr-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing dolor sit
                                                amet,
                                                consectetur elitad adipiscin.
                                                </p>
                                            </blockquote>

                                            <h5 className="testi-author">by Joe Doe</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonial bg-white">
                                    <div className="testimonial-owner">
                                        <figure>
                                            <LazyLoadImage
                                                alt="client"
                                                src="images/home/products/cart/2-2.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 58 }
                                            />
                                        </figure>

                                        <div className="testi-content">
                                            <div className="ratings-container mb-1">
                                                <div className="product-ratings">
                                                    <div className="ratings" style={ { width: '80' } }></div>
                                                </div>
                                            </div>

                                            <h4 className="testimonial-title p-0">Summer High Hill</h4>

                                            <blockquote className="ml-3 pr-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing dolor sit
                                                amet,
                                                    consectetur elitad adipiscin.</p>
                                            </blockquote>

                                            <h5 className="testi-author">by Joe Doe</h5>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Reveal>
                    </div>
                </div>
            </div >
        </section >
    );
}
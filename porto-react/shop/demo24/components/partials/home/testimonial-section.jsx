import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { fadeInRightShorter } from '../../../utils/data/keyframes'

function TestimonialSection ( props ) {
    const { product } = props;

    return (
        <section className="testimonials-section bg-gray">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 500 } triggerOnce>
                            <OwlCarousel adClass="testimonials-carousel dots-inside dots-small mb-4 mb-lg-0" options={ { dots: true } }>
                                <div className="testimonial">
                                    <div className="testimonial-owner">
                                        <figure>
                                            <LazyLoadImage
                                                alt="client"
                                                src="images/clients/client1.png"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 55 }
                                            />
                                        </figure>

                                        <div>
                                            <strong className="testimonial-title">John Smith</strong>
                                            <span>CEO &amp; Founder</span>
                                        </div>
                                    </div>

                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie,
                                        massa ut semper egestas, ex ligula ifend neque, eget pharetra elit lectus ac
                                            ex.risus.</p>
                                    </blockquote>
                                </div>

                                <div className="testimonial">
                                    <div className="testimonial-owner">
                                        <figure>
                                            <LazyLoadImage
                                                alt="client"
                                                src="images/clients/client2.png"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 55 }
                                            />
                                        </figure>

                                        <div>
                                            <strong className="testimonial-title">John Smith</strong>
                                            <span>CEO &amp; Founder</span>
                                        </div>
                                    </div>

                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie,
                                        massa ut semper egestas, ex ligula ifend neque, eget pharetra elit lectus ac
                                            ex.risus.</p>
                                    </blockquote>
                                </div>
                            </OwlCarousel>
                        </Reveal>
                    </div>

                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 500 } triggerOnce>
                            <div className="widget news-widget">
                                <h3 className="widget-title ls-0 mt-0 m-b-4">Latest News</h3>

                                <div className="widget-content">
                                    <div className="row">
                                        <OwlCarousel adClass="dots-small" options={ { items: 2, nav: false } }>
                                            <article className="post">
                                                <div className="post-date">
                                                    <span>26- Feb -2018</span>
                                                </div>

                                                <div className="post-body">
                                                    <h2 className="post-title">
                                                        <ALink href="/pages/blog/post-format-standard-collection">Post Format Standard</ALink>
                                                    </h2>
                                                    <div className="post-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                            non placerat mi. Etiam non... </p>

                                                        <ALink href="/pages/blog/post-format-standard-collection" className="read-more">read more <i
                                                            className="fas fa-angle-right"></i></ALink>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="post">
                                                <div className="post-date">
                                                    <span>26- Feb -2018</span>
                                                </div>
                                                <div className="post-body">
                                                    <h2 className="post-title">
                                                        <ALink href="/pages/blog/post-format-video-collection">Post Format Video</ALink>
                                                    </h2>
                                                    <div className="post-content">
                                                        <p>Leap into electronic typesetting, remaining essentially
                                                            unchanged. It was popularised in the 1960s with... </p>

                                                        <ALink href="/pages/blog/post-format-video-collection" className="read-more">read more <i
                                                            className="fas fa-angle-right"></i></ALink>
                                                    </div>
                                                </div>
                                            </article>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default React.memo( TestimonialSection );
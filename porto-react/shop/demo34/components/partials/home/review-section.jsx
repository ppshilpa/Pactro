import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'

function ReviewSection () {
    return (
        <section className="reviews-section" style={ { backgroundImage: 'url(images/home/bg-text.png)' } }>
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title text-center m-b-2">Clients Reviews</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h5 className="section-info border-0 text-center mb-0">Only the best seller products added recently in our catalog</h5>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                    <OwlCarousel adClass="testimonial-carousel show-nav-hover nav-outer dots-small mb-2" options={ { dots: true } } >
                        <div className="testimonial">
                            <blockquote>
                                <p>I really love it. At first it does feel strange and a little sore after! But
                                    keep it up (I use morning and night) and my skin feels great.</p>
                            </blockquote>
                            <div className="testimonial-owner">
                                <strong className="testimonial-title">Mary Doe</strong>
                            </div>
                        </div>

                        <div className="testimonial">
                            <blockquote>
                                <p>I really love it. At first it does feel strange and a little sore after! But
                                    keep it up (I use morning and night) and my skin feels great.</p>
                            </blockquote>
                            <div className="testimonial-owner">
                                <strong className="testimonial-title">Mary Doe</strong>
                            </div>
                        </div>
                    </OwlCarousel >
                </Reveal>
            </div>
        </section>
    );
}

export default React.memo( ReviewSection );
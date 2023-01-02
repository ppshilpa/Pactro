import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'

function TestimonialSection () {
    return (
        <div className="testimonials-section custom-testimonials" style={ { backgroundImage: 'url(images/home/banners/banner-3.jpg)' } }>
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <OwlCarousel>
                        <div className="testimonial col-sm-8 col-9 m-auto">
                            <blockquote className="pl-0 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor tempus
                                rhoncus. Sed et magna quis nisi iaculis consectetur. Nullam molestie sed dui at
                                volutpat. Morbi porta malesuada tortor, eu hendrerit lectus.
                                </p>
                            </blockquote>

                            <div className="testimonial-owner justify-content-center text-center flex-column">
                                <figure>
                                    <img src="images/home/clients/client1.png" width="80" height="80" alt="client" />
                                </figure>

                                <div>
                                    <h5 className="testimonial-title">Mary Doe</h5>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={ { width: '100%' } }></span>
                                            <span className="tooltiptext tooltip-top">5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </Reveal>
            </div>
        </div>
    );
}

export default React.memo( TestimonialSection );
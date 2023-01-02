import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'
import { instagramSlider } from '../../../utils/data/slider';

function InstagramSection () {
    return (
        <section className="instagram-section position-relative">
            <div className="instagram-follow text-center bg-dark">
                <i className="fab fa-instagram text-white"></i>
                <div className="info-box-content">
                    <h4 className="font3 font-italic text-white">Follow on Instagram</h4>
                    <p className="font2 mb-0">@portoecommerce</p>
                </div>
            </div>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <OwlCarousel adClass="instagram-carousel" options={ instagramSlider } >
                    <div className="media-with-lazy">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Instagram"
                                src="images/home/instagrams/instagram-1.jpg"
                                width="100%"
                                height="auto"
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </div>

                    <div className="media-with-lazy">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Instagram"
                                src="images/home/instagrams/instagram-2.jpg"
                                width="100%"
                                height="auto"
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </div>

                    <div className="media-with-lazy">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Instagram"
                                src="images/home/instagrams/instagram-3.jpg"
                                width="100%"
                                height="auto"
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </div>

                    <div className="media-with-lazy">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Instagram"
                                src="images/home/instagrams/instagram-4.jpg"
                                width="100%"
                                height="auto"
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </div>

                    <div className="media-with-lazy">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Instagram"
                                src="images/home/instagrams/instagram-5.jpg"
                                width="100%"
                                height="auto"
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </div>

                    <div className="media-with-lazy">
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="Instagram"
                                src="images/home/instagrams/instagram-6.jpg"
                                width="100%"
                                height="auto"
                                threshold={ 500 }
                                effect="black and white"
                            />
                        </figure>
                    </div>
                </OwlCarousel >
            </Reveal>
        </section>
    );
}

export default React.memo( InstagramSection );
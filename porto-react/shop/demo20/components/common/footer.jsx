import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from "./ALink";
import OwlCarousel from '../features/owl-carousel';

// Import Settings
import { InstagramSlider } from '../../utils/data/slider';
import { fadeIn } from '../../utils/data/keyframes';

function Footer () {
    return (
        <footer>
            <div className="footer-top">
                <div className="container-fluid">
                    <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                        <div className="instagram-section mb-2">
                            <h2 className="section-title ls-n-10 text-center text-uppercase m-b-1">From Our Instagram</h2>
                            <h6 className="text-body text-center font-weight-normal m-b-4">@portoecommerce</h6>

                            <OwlCarousel adClass="instagram-feed-carousel" options={ InstagramSlider }>
                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-1.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-2.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-3.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-4.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-5.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-6.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-7.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-8.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>

                                <div className="instagram media-with-lazy">
                                    <figure className="mb-0">
                                        <LazyLoadImage
                                            alt="instagram"
                                            src="images/home/instagrams/instagram-9.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </div>
                            </OwlCarousel>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="footer font2">
                <div className="container">
                    <div className="footer-middle">
                        <div className="row">
                            <div className="col-lg-2 d-flex align-items-center">
                                <ALink href="/">
                                    <img src="images/logo-white.png" alt="Logo" className="logo mb-3" />
                                </ALink>
                            </div>
                            <div className="col-lg-5 col-xl-6 d-flex align-items-center">
                                <ul className="links mb-3">
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="/pages/blog">Blog</ALink></li>
                                    <li><ALink href="#">Order Tracking</ALink></li>
                                    <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                </ul>
                            </div>
                            <div className="col-lg-5 col-xl-4 d-flex justify-content-lg-end align-items-end">
                                <div className="footer-question mb-3">
                                    <h6 className="text-white m-b-1">QUESTIONS?</h6>
                                    <h3 className="m-b-1"><a href="tel:1-888-123-456" className="text-white">1-888-123-456</a>
                                    </h3>
                                </div>

                                <div className="social-icons mb-3">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"
                                        title="Facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"
                                        title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-instagram icon-instagram"
                                        title="Instagram"></ALink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">Porto eCommerce. © 2021. All Rights Reserved</span>
                        </div>

                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <div className="payment-icons mr-0">
                                <span className="payment-icon visa" style={ { backgroundImage: "url(images/payments/payment-visa.svg)" } }></span>
                                <span className="payment-icon paypal" style={ { backgroundImage: "url(images/payments/payment-paypal.svg)" } }></span>
                                <span className="payment-icon stripe" style={ { backgroundImage: "url(images/payments/payment-stripe.png)" } }></span>
                                <span className="payment-icon verisign" style={ { backgroundImage: "url(images/payments/payment-verisign.svg)" } }></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
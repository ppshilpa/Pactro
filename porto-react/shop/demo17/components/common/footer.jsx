import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from "./ALink";
import OwlCarousel from '../features/owl-carousel';

// Import Settings
import { InstagramSlider } from '../../utils/data/slider';

function Footer () {
    return (
        <footer className="footer font2">
            <div className="instagram-section">
                <h2 className="section-title text-center">From Our Instagram</h2>
                <h6 className="section-subtitle text-center font-weight-normal">@portoecommerce</h6>

                <OwlCarousel adClass="instagram-feed-carousel instagram-feed" options={ InstagramSlider }>
                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

                    <div className="instagram media-with-lazy overlay-dark">
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

            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-5 m-b-4">
                            <ALink href="/">
                                <img src="images/logo-black.png" alt="Logo" className="m-b-3 logo" />
                            </ALink>
                            <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <br />Praesent pulvinar feugiat quam, vitae aliquam.</p>

                            <div className="row ls-0 footer-question">
                                <div className="col-5">
                                    <h6 className="mb-0">QUESTIONS</h6>
                                    <h3>1-888-123-456</h3>
                                </div>

                                <div className="col-7">
                                    <div className="social-icons">
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


                        <div className="col-lg-2 col-sm-4 m-b-4">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="links">
                                    <li>
                                        <ALink href="/pages/account">My Account</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Track Your Order</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Payment Methods</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Shipping Guide</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">FAQs</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Product Support</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-2 col-sm-4 m-b-4">
                            <div className="widget">
                                <h4 className="widget-title">About</h4>

                                <ul className="links">
                                    <li>
                                        <ALink href="/pages/about-us">About Porto</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Our Guarantees</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms And Conditions</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy policy</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Return Policy</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Intellectual Property Claims</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Site Map</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-4 m-b-4">
                            <div className="widget">
                                <h4 className="widget-title">Features</h4>

                                <ul className="links">
                                    <li>
                                        <ALink href="#">Super Fast React Template</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">1st Fully working Ajax Theme</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">40 Unique Shop Layouts</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Powerful Admin Panel</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Mobile &amp; Retina Optimized</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark">
                <div className="container">
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div className="footer-left">
                            <p className="footer-copyright py-3 pr-4 mb-0">&copy; Porto eCommerce 2021. All Rights Reserved.
                            </p>
                        </div>

                        <div className="footer-right">
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
            </div>
        </footer>
    );
}

export default React.memo( Footer );
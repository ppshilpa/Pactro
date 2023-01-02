import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from "./ALink";
import OwlCarousel from '../features/owl-carousel';

// Import Settings
import { partnerSlider } from '../../utils/data/slider';

function Footer () {
    return (
        <footer className="footer">
            <div className="partners-panel">
                <div className="container">
                    <OwlCarousel adClass="partners-carousel text-center" options={ partnerSlider }>
                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="logo"
                                src="images/home/logos/1.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="logo"
                                src="images/home/logos/2.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="logo"
                                src="images/home/logos/3.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="logo"
                                src="images/home/logos/4.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="logo"
                                src="images/home/logos/5.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <figure className="mb-0">
                            <LazyLoadImage
                                alt="logo"
                                src="images/home/logos/6.png"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </OwlCarousel>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle row">
                    <div className="col-lg-5 col-xl-6">
                        <div className="row mt-2 d-flex align-items-center">
                            <div className="col-md-4 col-lg-12 col-xl-4">
                                <ALink href="/" className="logo-footer">
                                    <img src="images/logo-black.png" width="112" height="44" alt="logo" />
                                </ALink>
                            </div>

                            <div className="col-md-8 col-lg-12 col-xl-8">
                                <div className="social-link">
                                    <h4>Questions</h4>
                                    <div className="links">
                                        <ALink href="#" className="phone_link">1-888-123-456</ALink>
                                        <hr className="vertical" />
                                        <div className="social-icons">
                                            <ALink href="#" className="social-icon social-facebook"
                                                title="Facebook">
                                                <i className="icon-facebook"></i>
                                            </ALink>
                                            <ALink href="#" className="social-icon social-twitter"
                                                title="Twitter">
                                                <i className="icon-twitter"></i>
                                            </ALink>
                                            <ALink href="#" className="social-icon social-instagram"
                                                title="instagram">
                                                <i className="icon-instagram"></i>
                                            </ALink>

                                            <ALink href="#" className="social-icon social-linkedin"
                                                title="Linkedin">
                                                <i className="fab fa-linkedin-in"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-xl-6">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="widget">
                                    <h3 className="widget-title">Account</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><ALink href="/pages/account">My Account</ALink></li>
                                            <li><ALink href="#">Track Your Order</ALink></li>
                                            <li><ALink href="#">Payment Methods</ALink></li>
                                            <li><ALink href="#">Shipping Guide</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4">
                                <div className="widget">
                                    <h3 className="widget-title">About</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><ALink href="/pages/about-us">About Porto</ALink></li>
                                            <li><ALink href="#">Our Guarantees</ALink></li>
                                            <li><ALink href="#">Terms And Conditions</ALink></li>
                                            <li><ALink href="#">Privacy Policy</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4">
                                <div className="widget">
                                    <h3 className="widget-title">Features</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                            <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                            <li><ALink href="#">Super Fast React Template</ALink></li>
                                            <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-lg-flex align-items-center">
                    <p className="footer-copyright font2 mb-0">© copyright 2021. All Rights Reserved.</p>
                    <img className="ml-lg-auto ml-0 mt-lg-0 mt-1" src="images/home/payments_long.png"
                        width="255" height="22" alt="payment" />
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
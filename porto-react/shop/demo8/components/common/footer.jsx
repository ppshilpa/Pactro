import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        < footer className="footer" >
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row row-sm">
                                <div className="col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <ul className="contact-info mb-3">
                                            <li>
                                                <span className="contact-info-label">Phone:</span>Toll Free <ALink
                                                    href="tel:">(123) 456-7890</ALink>
                                            </li>
                                            <li>
                                                <span className="contact-info-label">Email:</span>
                                                <ALink href="mailto:mail@example.com">mail@example.com</ALink>
                                            </li>
                                        </ul>
                                        <div className="social-icons">
                                            <ALink href="#" className="social-icon social-facebook icon-facebook"
                                                title="Facebook"></ALink>
                                            <ALink href="#" className="social-icon social-twitter icon-twitter"
                                                title="Twitter"></ALink>
                                            <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                                title="Linkedin-In"></ALink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="widget pl-sm-1">
                                        <h4 className="widget-title">CUSTOMER SERVICE</h4>
                                        <ul className="links">
                                            <li><ALink href="/pages/about-us">About Us</ALink></li>
                                            <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                            <li><ALink href="/pages/account">My Account</ALink></li>
                                            <li><ALink href="#">Orders history</ALink></li>
                                            <li><ALink href="#">Advanced search</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="widget pl-sm-2">
                                        <h4 className="widget-title">ABOUT US</h4>
                                        <ul className="links">
                                            <li><ALink href="#">Super Fast React Template</ALink></li>
                                            <li><ALink href="#">Top Rated Theme in Themeforest</ALink></li>
                                            <li><ALink href="#">40 Unique Shop Demos</ALink></li>
                                            <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                            <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Subscribe newsletter</h4>
                                <p>Get all the latest information on events, sales and offers. Sign up for newsletter:
        						</p>
                                <form action="#" className="mb-0">
                                    <input type="email" className="form-control" placeholder="Email address" required />

                                    <input type="submit" className="btn btn-primary shadow-none" value="Go!" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom">
                    <div className="container d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">© copyright 2021. All Rights Reserved.</span>
                        </div>

                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <div className="payment-icons">
                                <span className="payment-icon visa" style={ { backgroundImage: "url(images/payments/payment-visa.svg)" } }></span>
                                <span className="payment-icon paypal" style={ { backgroundImage: "url(images/payments/payment-paypal.svg)" } }></span>
                                <span className="payment-icon stripe" style={ { backgroundImage: "url(images/payments/payment-stripe.png)" } }></span>
                                <span className="payment-icon verisign" style={ { backgroundImage: "url(images/payments/payment-verisign.svg)" } }></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default React.memo( Footer );
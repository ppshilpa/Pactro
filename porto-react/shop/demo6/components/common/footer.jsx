import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="footer-top">
                    <div className="widget widget-newsletter">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-9">
                                <h4 className="widget-title">Subscribe newsletter</h4>
                                <p>Get all the latest information on Events, Sales and Offers. Sign up for newsletter
                                    today.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-7 d-flex align-items-center">
                                <form action="#" className="d-flex w-100 pb-2">
                                    <input type="email" className="form-control mb-0" placeholder="Enter Your Email address"
                                        required />
                                    <button type="submit" className="btn btn-primary text-white">Subscribe</button>
                                </form>
                            </div>

                            <div
                                className="col-lg-2 col-md-12 col-sm-5 widget-social d-flex align-items-center justify-content-lg-end justify-content-start mt-2 mb-1 mb-sm-0 mt-sm-0">
                                <div className="social-icons pb-1">
                                    <ALink href="#" className="social-icon"><i className="icon-instagram"></i></ALink>
                                    <ALink href="#" className="social-icon"><i className="icon-twitter"></i></ALink>
                                    <ALink href="#" className="social-icon"><i className="icon-facebook"></i></ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title pb-2 mb-1">Contact Info</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Address:</span>1234 Street Name, City, England
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span>Toll Free <a href="tel:">(123)
                                            456-7890</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span> <a
                                            href="mailto:mail@example.com">mail@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="row footer-content">
                                <div className="col-lg-4">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="links mb-0">
                                                    <li><ALink href="/pages/about-us">About us</ALink></li>
                                                    <li><ALink href="/pages/contact-us">Contact us</ALink></li>
                                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-6">
                                                <ul className="links">
                                                    <li><ALink href="#">Order history</ALink></li>
                                                    <li><ALink href="#">Advanced search</ALink></li>
                                                    <li><ALink href="/pages/account">Login</ALink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 mb-sm-2">
                                    <div className="widget">
                                        <h4 className="widget-title">Main Features</h4>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="links mb-0">
                                                    <li><ALink href="#">Super Fast React Template</ALink></li>
                                                    <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                                    <li><ALink href="#">33 Unique Shop Layouts</ALink></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="links">
                                                    <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                                    <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="widget widget-time">
                                        <h4 className="widget-title mb-1">Working Days/Hours</h4>
                                        <ul className="contact-info">
                                            <li>
                                                Mon - Sun / 9:00AM - 8:00PM
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-bottom d-sm-flex align-items-center">
                                <div className="footer-left">
                                    <span className="footer-copyright">Porto eCommerce. © 2021 All Rights Reserved</span>
                                </div>

                                <div className="payment-icons mt-1 mt-sm-0">
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


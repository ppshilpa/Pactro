import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer bg-dark">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-2 col-lg-2 d-flex align-items-center">
                            <ALink href="/">
                                <img src="images/home/footer-logo.png" alt="Logo" className="logo-footer" />
                            </ALink>
                        </div>

                        <div className="col-md-12 col-xl-3 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">GET IN TOUCH</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Address</span>123 Street Name, City, England
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Phone</span><a href="tel:">Toll Free (123)
                                            456-7890</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email</span> <a
                                            href="mailto:mail@example.com">mail@example.com</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Working Days/Hours</span>
                                        Mon - Sun / 9:00AM - 8:00PM
                                    </li>
                                </ul>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-instagram icon-instagram"
                                        title="Instagram"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"
                                        title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"
                                        title="Facebook"></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 col-lg-3 col-12">
                            <div className="widget">
                                <h4 className="widget-title">Customer Services</h4>

                                <ul className="links">
                                    <li><ALink href="#">Help & FAQs</ALink></li>
                                    <li><ALink href="#">Order Tracking</ALink></li>
                                    <li><ALink href="#">Shipping & Delivery</ALink></li>
                                    <li><ALink href="#">Orders History</ALink></li>
                                    <li><ALink href="#">Advanced Search</ALink></li>
                                    <li><ALink href="/pages/login">Login</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="#">Corporate Sales</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 col-lg-4 col-12">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title ls-n-10">Subscribe newsletter</h4>
                                <p>Get all the latest information on events,<br /> sales and offers. Sign up for
                                    newsletter:
                                </p>
                                <form action="#" className="mb-0">
                                    <input type="email" className="form-control m-b-3" placeholder="Email address" required />

                                    <input type="submit" className="btn btn-outline-primary shadow-none" value="Subscribe" />
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
                            <span className="footer-copyright">Porto Medical. © <span className="d-inline-block">2021.</span>
                                All Rights Reserved
                            </span>
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
        </footer>
    );
}

export default React.memo( Footer );
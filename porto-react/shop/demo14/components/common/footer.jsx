import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer bg-dark position-relative">
            <div className="footer-middle">
                <div className="container position-static">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="widget">
                                <h4 className="widget-title font-weight-bold">Contact Info</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Address:</span>1234 Street Name, City, England
									</li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span>
                                        <a href="tel:">(123) 456-7890
										</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span>
                                        <a href="mailto:mail@example.com">mail@example.com</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Working Days/Hours:</span>
										Mon - Sun / 9:00 AM - 8:00 PM
									</li>
                                </ul>
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

                        <div className="col-lg-9 col-md-8">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Subscribe newsletter</h4>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 mb-1">
                                        <p className="mb-0">Get all the latest information on Events, Sales and Offers. Sign
											up for newsletter today.</p>
                                    </div>

                                    <div className="col-lg-6 col-md-12 mb-1">
                                        <form action="#" className="d-flex mb-0 w-100">
                                            <input type="email" className="form-control mb-0" placeholder="Email address"
                                                required />

                                            <input type="submit" className="btn btn-primary shadow-none" value="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row widget-middle">
                                <div className="col-sm-5">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="/pages/about-us">About us</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/contact-us">Contact us</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/account">My Account</ALink>
                                                </li>
                                            </ul>
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="#">Order history</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">Advanced search</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/login">Login</ALink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-7">
                                    <div className="widget">
                                        <h4 className="widget-title">About Us</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="#">Super Fast React Template</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">1st Fully working Ajax Theme</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">36 Unique Shop Layouts</ALink>
                                                </li>
                                            </ul>
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="#">Powerful Admin Panel</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">Mobile & Retina Optimized</ALink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">© Copyright 2021. All Rights Reserved.</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <div className="payment-icons mr-0">
                            <span className="payment-icon visa" style={ { backgroundImage: `url("images/payments/payment-visa.svg")` } }></span>
                            <span className="payment-icon paypal" style={ { backgroundImage: `url("images/payments/payment-paypal.svg")` } }></span>
                            <span className="payment-icon stripe" style={ { backgroundImage: `url("images/payments/payment-stripe.png")` } }></span>
                            <span className="payment-icon verisign" style={ { backgroundImage: `url("images/payments/payment-verisign.svg")` } }></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <div className="container">
            <footer className="footer bg-dark">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul className="contact-info">
                                        <li>
                                            <span className="contact-info-label">Address:</span>1234 Street Name, City, England
        								</li>
                                        <li>
                                            <span className="contact-info-label">Phone:</span>Toll Free <a href="tel:">(123)
        										456-7890</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Email:</span>
                                            <ALink href="mailto:mail@example.com">mail@example.com</ALink>
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

                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>

                                    <ul className="links">
                                        <li><ALink href="#">Help & FAQs</ALink></li>
                                        <li><ALink href="#">Order Tracking</ALink></li>
                                        <li><ALink href="#">Shipping & Delivery</ALink></li>
                                        <li><ALink href="#">Orders History</ALink></li>
                                        <li><ALink href="#">Advanced search</ALink></li>
                                        <li><ALink href="/pages/account">My Account</ALink></li>
                                        <li><ALink href="#">Careers</ALink></li>
                                        <li><ALink href="/pages/about-us">About Us</ALink></li>
                                        <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                        <li><ALink href="#">Corporate Sales</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">MAIN FEATURES</h4>

                                    <ul className="links">
                                        <li><ALink href="#">Super Fast React Template</ALink></li>
                                        <li><ALink href="#">Top Rated React Template</ALink></li>
                                        <li><ALink href="#">33 Unique Shop Layouts</ALink></li>
                                        <li><ALink href="#">Powerful Wordpress Features</ALink></li>
                                        <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                        <li><ALink href="#">Super Fast React Template</ALink></li>
                                        <li><ALink href="#">Top Rated React Template</ALink></li>
                                        <li><ALink href="#">33 Unique Shop Layouts</ALink></li>
                                        <li><ALink href="#">Powerful Wordpress Features</ALink></li>
                                        <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Popular Tags</h4>

                                    <div className="tagcloud">
                                        <ALink href={ { pathname: "/shop", query: { tag: "clothes" } } } scroll={ false }>Clothes</ALink>
                                        <ALink href={ { pathname: "/shop", query: { tag: "fashion" } } } scroll={ false }>Fashion</ALink>
                                        <ALink href={ { pathname: "/shop", query: { tag: "hub" } } } scroll={ false }>Hub</ALink>
                                        <ALink href={ { pathname: "/shop", query: { tag: "shirt" } } } scroll={ false }>Shirt</ALink>
                                        <ALink href={ { pathname: "/shop", query: { tag: "skirt" } } } scroll={ false }>Skirt</ALink>
                                        <ALink href={ { pathname: "/shop", query: { tag: "sports" } } } scroll={ false }>Sports</ALink>
                                        <ALink href={ { pathname: "/shop", query: { tag: "sweater" } } } scroll={ false }>Sweater</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-6">
                    <div className="footer-bottom">
                        <div className="container d-md-flex align-items-center">
                            <div className="footer-left">
                                <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
                            </div>

                            <div className="footer-right ml-auto mt-1 mt-md-0">
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
        </div>
    );
}

export default React.memo( Footer );
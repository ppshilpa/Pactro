import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                            <div className="widget">
                                <h4 className="widget-title">About Us</h4>
                                <ALink href="/">
                                    <img src="images/logo-footer.png" alt="Logo" className="logo footer-logo"
                                        width="202" height="80" />
                                </ALink>
                                <p className="widget-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                vestibulum magna, et dapibus lacus. Duis nec vestibulum
									magna, et dapibus lacus.</p>
                                <ALink href="#" className="read-more text-white">read more...</ALink>
                            </div>

                        </div>


                        <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                            <div className="widget mb-2">
                                <h4 className="widget-title mb-1 pb-1">Contact Info</h4>
                                <ul className="contact-info m-b-4">
                                    <li>
                                        <span className="contact-info-label">Address:</span>123 Street Name, City, England
									</li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span>
                                        <span>(123) 456-7890</span>
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
                                    <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                        title="Linkedin"></ALink>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="links">
                                    <li>
                                        <ALink href="#">Help &amp; FAQs</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Order Tracking</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Shipping &amp; Delivery</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Orders History</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Advanced Search</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/account">My Account</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Careers</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/about-us">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Corporate Sales</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                            <div className="widget widget-tags">
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

            <div className="footer-bottom">
                <div className="container d-sm-flex justify-content-between align-items-center flex-wrap">
                    <div className="footer-left">
                        <span className="footer-copyright">© copyright 2021. All Rights Reserved.</span>
                    </div>

                    <div className="footer-right mt-1 mt-sm-0">
                        <div className="payment-icons">
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
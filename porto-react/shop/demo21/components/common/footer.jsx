import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-3">
                            <h4 className="widget-newsletter-title font1 font-weight-bold text-white ls-n-10">Sign Up to
                                    Newsletter</h4>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <p className="widget-newsletter-content ls-n-10 text-white mb-0">Get all the latest
                                    information on Events, Sales and Offers.</p>
                            <span
                                className="widget-newsletter-content d-block font-weight-bold ls-n-10 text-white">Receive
                                    $10 coupon for first shopping.</span>
                        </div>
                        <div className="col-md-10 col-lg-5">
                            <form action="#" className="mb-0">
                                <div className="footer-submit-wrapper d-flex">
                                    <input type="email" className="form-control mb-0"
                                        placeholder="Enter your Email address..." required />
                                    <button type="submit" className="btn btn-md btn-dark">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-6 mb-1">
                            <ALink href="/" className="logo">
                                <img src="images/logo-black.png" width="111" height="114" alt="Logo" className="logo mb-3 mb-lg-6" />
                            </ALink>

                            <div className="row no-gutters m-0">
                                <div className="col-md-4 mb-2">
                                    <div className="contact-widget phone">
                                        <h4 className="widget-title">call us now:</h4>
                                        <ALink href="#">+123 5678 890</ALink>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="contact-widget email">
                                        <h4 className="widget-title">e-mail address:</h4>
                                        <a href="mailto:mail@example.com">mail@example.com</a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="contact-widget follow">
                                        <h4 className="widget-title ls-n-10">follow us</h4>
                                        <div className="social-icons">
                                            <ALink href="#" className="social-icon social-facebook icon-facebook"
                                            ></ALink>
                                            <ALink href="#" className="social-icon social-twitter icon-twitter"
                                            ></ALink>
                                            <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                            ></ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Categories</h4>

                                <ul className="links">
                                    <li><ALink href={ { pathname: "/shop", query: { tag: "electronic" } } } scroll={ false }>Electronics</ALink></li>
                                    <li><ALink href={ { pathname: "/shop", query: { tag: "fashion" } } } scroll={ false }>Fashion</ALink></li>
                                    <li><ALink href={ { pathname: "/shop", query: { tag: "gifts" } } } scroll={ false }>Gifts</ALink></li>
                                    <li><ALink href={ { pathname: "/shop", query: { tag: "music" } } } scroll={ false }>Music</ALink></li>
                                    <li><ALink href={ { pathname: "/shop", query: { tag: "trousers" } } } scroll={ false }>Trousers</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">About</h4>

                                <ul className="links">
                                    <li><ALink href="/pages/about-us">About us</ALink></li>
                                    <li><ALink href="/pages/contact-us">Contact us</ALink></li>
                                    <li><ALink href="#">All Collections</ALink></li>
                                    <li><ALink href="#">Privacy policy</ALink></li>
                                    <li><ALink href="#">Terms &amp; Conditions</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Care</h4>

                                <ul className="links">
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="/pages/wishlist">Wishlist</ALink></li>
                                    <li><ALink href="/pages/cart">Shopping Cart</ALink></li>
                                    <li><ALink href="#">Terms &amp; Conditions</ALink></li>
                                    <li><ALink href="#">FAQs</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
                        </div>

                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <img src="images/home/payment-icon.png" width="267" height="36" alt="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
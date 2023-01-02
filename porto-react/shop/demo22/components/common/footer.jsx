import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-3">
                            <h4 className="widget-newsletter-title font1 font-weight-bold text-white">Sign Up to
                                    Newsletter</h4>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <p className="widget-newsletter-content ls-10 text-white mb-0">Get all the latest
                                    information on Events, Sales and Offers.</p>
                            <span
                                className="widget-newsletter-content d-block font-weight-bold ls-10 text-white">Receive
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
                        <div className="col-lg-4">
                            <ALink href="/" className="logo">
                                <img src="images/logo-black.png" width="111" height="114" alt="Logo" className="logo" />
                            </ALink>

                            <div className="row">
                                <div className="col-sm-6 pr-sm-0">
                                    <div className="contact-widget">
                                        <h4 className="widget-title">ADDRESS:</h4>
                                        <ALink href="#">123 Street Name, City, England</ALink>
                                    </div>
                                </div>

                                <div className="col-sm-6 pl-sm-0">
                                    <div className="contact-widget">
                                        <h4 className="widget-title">PHONE:</h4>
                                        <ALink href="#">Toll Free (123) 456-7890</ALink>
                                    </div>
                                </div>

                                <div className="col-sm-6 pr-sm-0">
                                    <div className="contact-widget">
                                        <h4 className="widget-title">EMAIL:</h4>
                                        <a href="mailto:mail@example.com">mail@example.com</a>
                                    </div>
                                </div>

                                <div className="col-sm-6 pl-sm-0">
                                    <div className="contact-widget">
                                        <h4 className="widget-title">WORKING DAYS/HOURS:</h4>
                                        <ALink href="#">Mon - Sun / 9:00AM - 8:00PM</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="social-icons mb-3 mb-lg-0">
                                <ALink href="#" className="social-icon social-facebook"><i
                                    className="fab fa-facebook-f"></i></ALink>
                                <ALink href="#" className="social-icon social-twitter"><i
                                    className="fab fa-twitter"></i></ALink>
                                <ALink href="#" className="social-icon social-linkedin"><i
                                    className="fab fa-linkedin-in"></i></ALink>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Account</h4>
                                <div className="row links link-lg link-parts">
                                    <div className="col-sm-6 link-part">
                                        <ul className="mb-0">
                                            <li><ALink href="/pages/account">My Account</ALink></li>
                                            <li><ALink href="#">Track Your Order</ALink></li>
                                            <li><ALink href="#">Payment Methods</ALink></li>
                                            <li><ALink href="#">Shipping Guide</ALink></li>
                                            <li><ALink href="#">FAQs</ALink></li>
                                            <li><ALink href="#">Product Support</ALink></li>
                                            <li><ALink href="#">Privacy</ALink></li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-6 link-part">
                                        <ul className="mb-0">
                                            <li>
                                                <ALink href="#">Orders History</ALink>
                                            </li>
                                            <li><ALink href="#">Advanced Search</ALink></li>
                                            <li><ALink href="#">Affiliate Program</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget widget-sm">
                                <h4 className="widget-title">About</h4>

                                <ul className="links">
                                    <li>
                                        <ALink href="/pages/about-us">About Porto</ALink>
                                    </li>
                                    <li><ALink href="#">Our Guarantees</ALink></li>
                                    <li><ALink href="#">Terms And Conditions</ALink></li>
                                    <li><ALink href="#">Privacy policy</ALink></li>
                                    <li><ALink href="#">Return Policy</ALink></li>
                                    <li>
                                        <ALink href="#">Intellectual Property Claims</ALink>
                                    </li>
                                    <li><ALink href="#">Site Map</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="widget widget-sm">
                                <h4 className="widget-title">Features</h4>

                                <ul className="links">
                                    <li>
                                        <ALink href="#">Super Fast REACT Template</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Mobile & Retina Optimized</ALink>
                                    </li>
                                    <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                    <li>
                                        <ALink href="#">1st Fully working Ajax Theme</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">40 Unique Shop Layouts</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <img src="images/home/payment-icon.png" alt="payment" width="200"
                            height="27" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
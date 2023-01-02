import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-xl-4">
                            <ALink href="/" className="logo">
                                <img src="images/home/logo.png" width="113" height="48" alt="Logo" className="logo mb-3" />
                            </ALink>

                            <div className="row">
                                <div className="col-sm-6 pr-sm-0">
                                    <div className="contact-widget m-b-3">
                                        <h4 className="widget-title font2">ADDRESS:</h4>
                                        <ALink href="#">123 Street Name, City, England</ALink>
                                    </div>
                                </div>

                                <div className="col-sm-6 pl-sm-0">
                                    <div className="contact-widget m-b-3">
                                        <h4 className="widget-title font2">PHONE:</h4>
                                        <ALink href="#">Toll Free (123) 456-7890</ALink>
                                    </div>
                                </div>

                                <div className="col-sm-6 pr-sm-0">
                                    <div className="contact-widget m-b-3">
                                        <h4 className="widget-title font2">EMAIL:</h4>
                                        <a href="mailto:mail@example.com">mail@example.com</a>
                                    </div>
                                </div>

                                <div className="col-sm-6 pl-sm-0">
                                    <div className="contact-widget m-b-3">
                                        <h4 className="widget-title font2">
                                            WORKING DAYS/HOURS:
                                        </h4>
                                        <ALink href="#">Mon - Sun / 9:00AM - 8:00PM</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="social-icons mt-1 mb-3">
                                <ALink href="#" className="social-icon social-facebook icon-facebook"
                                ></ALink>
                                <ALink href="#" className="social-icon social-twitter icon-twitter"
                                ></ALink>
                                <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                ></ALink>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-2">
                            <div className="widget">
                                <h4 className="widget-title">Account</h4>

                                <div className="row link-lg link-parts">
                                    <div className="col-6 link-part">
                                        <ul className="links mb-0">
                                            <li>
                                                <ALink href="/pages/account">My Account</ALink>
                                            </li>
                                            <li><ALink href="#">Track Your Order</ALink></li>
                                            <li><ALink href="#">Payment Methods</ALink></li>
                                            <li><ALink href="#">Shipping Guide</ALink></li>
                                            <li><ALink href="#">FAQs</ALink></li>
                                            <li><ALink href="#">Product Support</ALink></li>
                                            <li><ALink href="#">Privacy</ALink></li>
                                        </ul>
                                    </div>

                                    <div className="col-6 link-part">
                                        <ul className="links mb-0">
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

                        <div className="col-lg-6 col-xl-4">
                            <div className="widget">
                                <h4 className="widget-title">About</h4>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="links mb-0">
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

                                    <div className="col-sm-6">
                                        <ul className="links mb-0">
                                            <li>
                                                <ALink href="#">Site Index</ALink>
                                            </li>
                                            <li><ALink href="#">Porto for the Press</ALink></li>
                                            <li><ALink href="#">Business Accounts</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-2">
                            <div className="widget">
                                <h4 className="widget-title">Newsletter</h4>
                                <div className="widget-newsletter">
                                    <div className="widget-newsletter-info">
                                        <p className="widget-newsletter-content m-b-4">Get all the latest
                                        information on
                                            Events, Sales and Offers. Sign up for newsletter today</p>
                                    </div>
                                    <form action="#">
                                        <div className="footer-submit-wrapper d-flex">
                                            <input type="email" className="form-control mb-0" placeholder="Email Address"
                                                size="40" required />
                                            <button type="submit" className="btn btn-primary btn-sm ls-0">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container-fluid d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <img src="images/home/payment-icon.png" className="w-auto" width="200" height="26" alt="payment" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
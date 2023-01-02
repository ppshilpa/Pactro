import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2">
            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-5">
                            <ALink href="/" className="logo">
                                <img src="images/logo-white.png" width="111" height="48" alt="Logo" className="m-b-4" />
                            </ALink>

                            <div className="contact-widget mb-2 mb-lg-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar feugiat
                                quam, vitae aliquam urna egestas nec. Phasellus sit amet consequat tortor.</p>

                                <div className="row ls-0">
                                    <div className="col-md-2-5">
                                        <h6 className="text-uppercase text-white mb-0">Questions?</h6>
                                        <h3 className="ls-n-10 text-primary">1-888-123-456</h3>
                                    </div>
                                    <div className="col-md-3-5">
                                        <h6 className="text-uppercase text-white mb-0">Payment Methods</h6>
                                        <img src="images/home/payments.png" alt="payment methods"
                                            className="footer-payments m-b-3" width="295" height="32" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4">
                            <div className="widget">
                                <h4 className="widget-title">Account</h4>

                                <ul className="links">
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
                        </div>

                        <div className="col-lg-3 col-sm-4">
                            <div className="widget">
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

                        <div className="col-lg-2 col-sm-4">
                            <div className="widget">
                                <h4 className="widget-title">Features</h4>

                                <ul className="links">
                                    <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                    <li><ALink href="#">Mobile &amp; Retina Optimized</ALink></li>
                                    <li><ALink href="#">Super Fast React Template</ALink></li>
                                    <li><ALink href="#">1st Fully Working Ajax Theme</ALink></li>
                                    <li><ALink href="#">40 Unique Shop Demos</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-4 mb-0">&copy; Porto eCommerce. 2021. All Rights Reserved</p>

                    <div className="social-icons py-3">
                        <ALink href="#" className="social-icon social-facebook icon-facebook"
                        ></ALink>
                        <ALink href="#" className="social-icon social-twitter icon-twitter"
                        ></ALink>
                        <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                        ></ALink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
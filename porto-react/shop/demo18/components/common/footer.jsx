import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2">
            <div className="container-fluid">
                <div className="footer-top top-border d-flex align-items-center justify-content-between flex-wrap">
                    <div className="footer-left widget-newsletter d-md-flex align-items-center">
                        <div className="widget-newsletter-info">
                            <h5 className="widget-newsletter-title text-white text-uppercase ls-0 mb-0">subscribe newsletter</h5>
                            <p className="widget-newsletter-content mb-0">Get all the latest information on Events, Sales and Offers.</p>
                        </div>

                        <form action="#">
                            <div className="footer-submit-wrapper d-flex">
                                <input type="email" className="form-control" placeholder="Email address..." size="40"
                                    required />
                                <button type="submit" className="btn btn-dark btn-sm">Subscribe</button>
                            </div>
                        </form>
                    </div>

                    <div className="footer-right">
                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3">
                            <ALink href="/"><img src="images/home/logo.png" width="111" height="40" alt="Logo" className="logo" /></ALink>
                            <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipis.</p>

                            <div className="ls-0 footer-question">
                                <h6 className="mb-0 text-white">QUESTIONS?</h6>
                                <h3 className="mb-3 text-white"><a href="tel:1-888-123-456">1-888-123-456</a></h3>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Account</h4>

                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="links">
                                            <li><ALink href="/pages/about-us">About us</ALink></li>
                                            <li><ALink href="/pages/contact-us">Contact us</ALink></li>
                                            <li><ALink href="/pages/account">My Account</ALink></li>
                                            <li><ALink href="#">Payment Methods</ALink></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-6">
                                        <ul className="links">
                                            <li><ALink href="#">Order history</ALink></li>
                                            <li><ALink href="#">Advanced Search</ALink></li>
                                            <li><ALink href="/pages/login">Login</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">About</h4>

                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="links">
                                            <li><ALink href="/pages/about-us">About Porto</ALink></li>
                                            <li><ALink href="#">Our Guarantees</ALink></li>
                                            <li><ALink href="#">Terms And Conditions</ALink></li>
                                            <li><ALink href="#">Privacy Policy</ALink></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-6">
                                        <ul className="links">
                                            <li><ALink href="#">Return Policy</ALink></li>
                                            <li><ALink href="#">Intellectual Property Claims</ALink></li>
                                            <li><ALink href="#">Site Map</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget text-lg-right">
                                <h4 className="widget-title">Features</h4>

                                <ul className="links">
                                    <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                    <li><ALink href="#">Mobile &amp; Retina Optimized</ALink></li>
                                    <li><ALink href="#">Super Fast React Template</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-copyright text-lg-center mb-0">&copy; Porto eCommerce. 2021. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default React.memo( Footer );
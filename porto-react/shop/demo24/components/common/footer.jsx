import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <div className="contact-widget mb-1">
                                    <strong className="d-block">ADDRESS:</strong>
                                    <p className="mb-0">1234 Street Name, City, England</p>
                                </div>
                                <div className="contact-widget">
                                    <strong className="d-block">PHONE:</strong>
                                    <p className="mb-0">(123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <div className="row link-lg link-parts">
                                    <div className="col-sm-6 link-part">
                                        <ul className="links mb-0">
                                            <li>
                                                <ALink href="/pages/about-us">About Us</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/contact-us">Contact Us</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/account">My Account</ALink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 link-part">
                                        <ul className="links mb-0">
                                            <li>
                                                <ALink href="#">Orders History</ALink>
                                            </li>
                                            <li><ALink href="#">Advanced Search</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="widget">
                                <h4 className="widget-title">Main Features</h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="links mb-0">
                                            <li><ALink href="#">Super Fast REACT Template</ALink></li>
                                            <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                            <li><ALink href="#">42 Unique Shop Layouts</ALink></li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-6">
                                        <ul className="links mb-0">
                                            <li>
                                                <ALink href="#">Powerful Admin Panel</ALink>
                                            </li>
                                            <li><ALink href="#">Mobile &amp; Retina Optimized</ALink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle">
                    <div className="row justify-content-between widget-newsletter m-0 no-gutters">
                        <div className="col-lg-4 mb-2">
                            <div className="social-icons">
                                <ALink href="#" className="social-icon social-facebook icon-facebook"
                                ></ALink>
                                <ALink href="#" className="social-icon social-twitter icon-twitter"
                                ></ALink>
                                <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-2">
                            <h4 className="widget-newsletter-title font-weight-bold ls-0 text-uppercase">Subscribe
                                Newsletter</h4>
                            <p className="widget-newsletter-content">Get all the latest information on
                                Events, Sales and Offers.</p>
                        </div>

                        <div className="col-lg-4 mb-2">
                            <form action="#" className="mb-0">
                                <div className="footer-submit-wrapper d-flex">
                                    <input type="email" className="form-control mb-0" placeholder="Email address" size="40"
                                        required />
                                    <button type="submit" className="btn btn-primary btn-sm ls-0">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">© copyright 2021 Porto. All Rights Reserved.</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <img src="images/home/payment-icon.png" className="w-auto" width="220" height="30" alt="payment" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
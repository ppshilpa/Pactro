import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2">
            <div className="container">
                <div className="footer-top">
                    <div
                        className="widget-newsletter d-flex align-items-center flex-column flex-md-row justify-content-center justify-content-md-between">
                        <div className="widget-newsletter-info text-center text-md-left">
                            <h5 className="widget-newsletter-title text-uppercase">NEWSLETTER</h5>
                            <p className="widget-newsletter-content mb-0">Get all the latest information on Events, Sales
                            and Offers.</p>
                        </div>
                        <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
                            <div className="footer-submit-wrapper d-flex">
                                <input type="email" className="form-control mb-0" placeholder="Email address..." size="40"
                                    required />
                                <button type="submit" className="btn btn-primary btn-sm">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">CUSTOMER SERVICE</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><ALink href="#">Help & FAQs</ALink></li>
                                        <li><ALink href="#">Order Tracking</ALink></li>
                                        <li><ALink href="#">Shipping & Delivery</ALink></li>
                                        <li><ALink href="#">Orders History</ALink></li>
                                        <li><ALink href="#">Advanced Search</ALink></li>
                                        <li><ALink href="/pages/login">Login</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">About Us</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><ALink href="/pages/about-us">About Us</ALink></li>
                                        <li><ALink href="#">Careers</ALink></li>
                                        <li><ALink href="#">Our Stores</ALink></li>
                                        <li><ALink href="#">Corporate Sales</ALink></li>
                                        <li><ALink href="#">Careers</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">More Information</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><ALink href="#">Affiliates</ALink></li>
                                        <li><ALink href="#">Refer a Friend</ALink></li>
                                        <li><ALink href="#">Student Beans Offers</ALink></li>
                                        <li><ALink href="#">Gift Vouchers</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">Social Media</h3>
                                <div className="widget-content">
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

                            <div className="widget widget-payment">
                                <h3 className="widget-title ls-n-10">PAYMENT METHODS</h3>

                                <div className="widget-content">
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
                </div>

                <div className="footer-bottom text-left text-md-center">
                    <span className="footer-copyright">Porto eCommerce. © 2021. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
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
                        <div className="col-sm-6 col-lg-3">
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
                        <div className="col-sm-6 col-lg-3">
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
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">Social Media</h3>
                                <div className="widget-content">
                                    <div className="social-icons">
                                        <ALink href="#" className="social-icon"><i
                                            className="fab fa-facebook-f"></i></ALink>
                                        <ALink href="#" className="social-icon"><i
                                            className="fab fa-twitter"></i></ALink>
                                        <ALink href="#" className="social-icon"><i
                                            className="icon-instagram"></i></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="container d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">Porto eCommerce. © 2021. All Rights Reserved</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <div className="payment-icons">
                            <span className="payment-icon visa" style={ { backgroundImage: "url(images/payments/payment-visa.svg)" } }></span>
                            <span className="payment-icon paypal" style={ { backgroundImage: "url(images/payments/payment-paypal.svg)" } }></span>
                            <span className="payment-icon stripe" style={ { backgroundImage: "url(images/payments/payment-stripe.png)" } }></span>
                            <span className="payment-icon verisign" style={ { backgroundImage: "url(images/payments/payment-verisign.svg)" } }></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
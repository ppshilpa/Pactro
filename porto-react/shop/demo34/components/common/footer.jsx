import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2">
            <div className="footer-top">
                <div className="container">
                    <div className="widget-newsletter">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-lg-4">
                                <h4 className="newsletter-title line-height-1 text-uppercase m-b-1">Subscribe Newsletter
                                </h4>
                                <p className="newsletter-info">Get all the latest information on Events, Sales and
                                    Offers.</p>
                            </div>

                            <div className="col-sm-6 col-lg-8">
                                <form action="#" className="mb-0">
                                    <div className="footer-submit-wrapper d-flex">
                                        <input type="email" className="form-control mb-1" placeholder="Email address..."
                                            size="40" required />
                                        <button type="submit" className="btn btn-dark btn-sm">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="links">
                                    <li><ALink href="#">Help &amp; FAQs</ALink></li>
                                    <li><ALink href="/pages/account">Order Tracking</ALink></li>
                                    <li><ALink href="#">Shipping &amp; Delivery</ALink></li>
                                    <li><ALink href="#">Orders History</ALink></li>
                                    <li><ALink href="#">Advanced Search</ALink></li>
                                    <li><ALink href="/pages/login">Login</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">About Us</h4>

                                <ul className="links">
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                    <li><ALink href="#">Our Stores</ALink></li>
                                    <li><ALink href="#">Corporate Sales</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">More Information</h4>

                                <ul className="links">
                                    <li><ALink href="#">Affiliates</ALink></li>
                                    <li><ALink href="#">Refer a Friend</ALink></li>
                                    <li><ALink href="#">Student Beans Offers</ALink></li>
                                    <li><ALink href="#">Gift Vouchers</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">Social Media</h4>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                                    <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                                </div>
                            </div>

                            <div className="widget mb-3">
                                <h4 className="widget-title">Payment Methods</h4>

                                <img src="images/home/payments.png" alt="payment" width="240" height="32" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright text-lg-center mb-0">Porto eCommerce. &copy; 2021. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
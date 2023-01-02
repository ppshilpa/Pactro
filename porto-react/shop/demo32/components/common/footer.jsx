import React from 'react';

import ALink from "./ALink";

function Footer () {
    function close ( e ) {
        e.preventDefault();
        e.currentTarget.parentElement.classList.add( 'd-none' );
    }

    return (
        <footer className="footer">
            <div className="footer-top bg-dark">
                <div className="container d-flex align-items-center justify-content-between flex-wrap">
                    <div className="widget-newsletter pl-3 d-md-flex align-items-center">
                        <div className="widget-newsletter-info">
                            <h5 className="widget-newsletter-title text-uppercase m-b-1 text-white">SIGN UP TO NEWSLETTER</h5>
                            <p className="widget-newsletter-content font2 mb-0">Get all the latest information..</p>
                        </div>
                        <form action="#" className="mb-0">
                            <div className="footer-submit-wrapper d-flex  mt-2 mb-1 mt-md-0 mb-md-0">
                                <input type="email" className="form-control bg-dark" placeholder="Enter your e-mail address"
                                    size="40" required />
                                <button type="submit" className="btn btn-dark btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="porto-content-box">
                    <h4>20$ OFF</h4>
                    <h3>GOPORTO</h3>
                    <span>USE COUPONS</span>

                    <ALink href="#" className="box-close" onClick={ close }>×</ALink>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="info-box info-box-icon-left text-white justify-content-start">
                                <i className="icon-shipping"></i>

                                <div className="info-box-content">
                                    <h4>FREE SHIPPING &amp; RETURN</h4>
                                    <p className="font2">Free shipping on all orders over $99.</p>
                                </div>
                            </div>

                            <div className="info-box info-box-icon-left text-white justify-content-start">
                                <i className="icon-money"></i>

                                <div className="info-box-content">
                                    <h4>MONEY BACK GUARANTEE</h4>
                                    <p className="font2">100% money back guarantee</p>
                                </div>
                            </div>

                            <div className="info-box info-box-icon-left text-white justify-content-start">
                                <i className="icon-support"></i>

                                <div className="info-box-content">
                                    <h4>LIVE SUPPORT</h4>
                                    <p className="font2">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div className="widget">
                                <h3 className="widget-title">Account</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><ALink href="/pages/account">My Account</ALink></li>
                                        <li><ALink href="#">Track Your Order</ALink></li>
                                        <li><ALink href="#">Payment Methods</ALink></li>
                                        <li><ALink href="#">Shipping Guide</ALink></li>
                                        <li><ALink href="#">FAQs</ALink></li>
                                        <li><ALink href="#">Product Support</ALink></li>
                                        <li><ALink href="#">Privacy</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">About</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><ALink href="/pages/about-us">About Porto</ALink></li>
                                        <li><ALink href="#">Our Guarantees</ALink></li>
                                        <li><ALink href="#">Terms And Conditions</ALink></li>
                                        <li><ALink href="#">Privacy Policy</ALink></li>
                                        <li><ALink href="#">Return Policy</ALink></li>
                                        <li><ALink href="#">Intellectual Property Claims</ALink></li>
                                        <li><ALink href="#">Site Map</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget-group">
                                <div className="widget mb-3">
                                    <h3 className="widget-title">Follow Us</h3>
                                    <div className="widget-content">
                                        <div className="social-icons ml-1">
                                            <ALink href="#" className="social-icon social-facebook"
                                                title="Facebook">
                                                <i className="icon-facebook"></i>
                                            </ALink>
                                            <ALink href="#" className="social-icon social-twitter"
                                                title="Twitter">
                                                <i className="icon-twitter"></i>
                                            </ALink>
                                            <ALink href="#" className="social-icon social-instagram"
                                                title="instagram">
                                                <i className="icon-instagram"></i>
                                            </ALink>

                                            <ALink href="#" className="social-icon social-linkedin"
                                                title="Linkedin">
                                                <i className="fab fa-linkedin-in"></i>
                                            </ALink>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">Payment Methods</h3>
                                    <div className="widget-content">
                                        <img src="images/home/payments_long.png" alt="payment image" width="201" height="31" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom flex-column flex-sm-row">
                    <p>Porto eCommerce. © 2021. All Rights Reserved</p>
                    <ul>
                        <li><ALink href="#">Affiliates</ALink></li>
                        <li><ALink href="#">Privacy Policy</ALink></li>
                        <li><ALink href="#">Terms & Conditions</ALink></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
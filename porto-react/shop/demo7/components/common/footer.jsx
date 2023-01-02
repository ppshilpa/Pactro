import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer bg-dark">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <div className="widget">
                                    <h4 className="widget-title">About Us</h4>
                                    <ALink href="/">
                                        <img src="images/logo-footer.png" alt="Logo" className="logo-footer" />
                                    </ALink>
                                    <p className="m-b-4 ls-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                    vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</p>
                                    <div className="social-icons">
                                        <ALink href="#" className="social-icon social-facebook icon-facebook"
                                            title="Facebook"></ALink>
                                        <ALink href="#" className="social-icon social-twitter icon-twitter"
                                            title="Twitter"></ALink>
                                        <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                            title="Linkedin"></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="widget widget-links">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="links">
                                    <li><ALink href="#">Help & FAQs</ALink></li>
                                    <li><ALink href="#">Order Tracking</ALink></li>
                                    <li><ALink href="#">Shipping & Delivery</ALink></li>
                                    <li><ALink href="#">Orders History</ALink></li>
                                    <li><ALink href="#">Advanced search</ALink></li>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="#">Corporate Sales</ALink></li>
                                    <li><ALink href="#">Privacy</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="widget widget-post">
                                <h4 className="widget-title pb-1">Latest News</h4>

                                <ul className="links">
                                    <li><ALink href="#">Top Jeans Collection<br /><span className="font1">JULY 23,
                                                2021</span></ALink></li>
                                    <li><ALink href="#">Post Format Standard<br /><span className="font1">FEBRUARY 26,
                                                2020</span></ALink></li>
                                    <li><ALink href="#">Post Format Video<br /><span className="font1">FEBRUARY 26,
                                                2019</span></ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Subscribe newsletter</h4>
                                <p className="mb-2 ls-0">Get all the latest information on events, sales and offers. Sign up for newsletter:
								</p>
                                <form action="#" className="mb-0">
                                    <input type="email" className="form-control email-box" placeholder="Email address" required />
                                    <input type="submit" className="btn btn-primary ls-10 shadow-none" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom">
                    <div className="container d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
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
            </div>
        </footer>
    );
}

export default React.memo( Footer );
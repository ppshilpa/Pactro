import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2">
            <div className="footer-top">
                <div className="container">
                    <div className="newsletter-widget row align-items-center">
                        <div className="col-md-6 mb-2 mb-md-0">
                            <h3 className="mb-0">Sign Up to Newsletter</h3>
                            <p>Get all the latest information on Events, Sales and Offers.</p>
                        </div>

                        <div className="col-md-6">
                            <form action="#" method="get" className="mb-0">
                                <div className="submit-wrapper">
                                    <input type="email" className="form-control" name="q" id="qqq"
                                        placeholder="Enter your Email address" required />
                                    <button className="btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
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

                        <div className="col-sm-6 col-lg-3">
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

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">Features</h3>
                                <div className="widget-content">
                                    <ul>
                                        <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                        <li><ALink href="#">Mobile & Retina Optimized</ALink></li>
                                        <li><ALink href="#">Super Fast React Template</ALink></li>
                                        <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                        <li><ALink href="#">10 Unique Homepage Layouts</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h3 className="widget-title">Follow Us</h3>
                                <div className="widget-content">
                                    <div className="social-icons">
                                        <ALink href="#" className="social-icon social-facebook icon-facebook"
                                            title="Facebook"></ALink>
                                        <ALink href="#" className="social-icon social-twitter icon-twitter"
                                            title="Twitter"></ALink>
                                        <ALink href="#" className="social-icon social-instagram icon-instagram"
                                            title="Instagram"></ALink>
                                        <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                            title="linkedin"></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">© copyright 2021. All Rights Reserved.</span>
                        </div>

                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <img src="images/home/payments_long.png" width="200" height="27" alt="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
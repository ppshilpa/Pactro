import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mb-2 mb-md-0">
                            <div className="widget widget-contact-info">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Address:</span>1234 Street Name, City, England
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span><a href="tel:">(123) 456-7890</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span> <a
                                            href="mailto:mail@example.com">mail@example.com</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Working Days/Hours:</span>
                                        Mon - Sun / 9:00AM - 8:00PM
                                    </li>
                                </ul>
                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook" title="Facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter" title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-instagram icon-instagram" title="Instagram"></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title m-b-1 pb-2">Subscribe newsletter</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p className="pt-2 mb-lg-0">Get all the latest information on Events, Sales and
                                            Offers. Sign up for newsletter today.</p>
                                    </div>

                                    <div className="col-lg-6">
                                        <form action="#" className="d-flex mb-0 w-100">
                                            <input type="email" className="form-control mb-0" placeholder="Email Address"
                                                required />

                                            <input type="submit" className="btn btn-primary shadow-none ls-10"
                                                value="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row pt-3">
                                <div className="col-sm-6 col-lg-5">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-sm-6 mb-0">
                                                <li><ALink href="/pages/about-us">About Us</ALink></li>
                                                <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                                <li><ALink href="/pages/account">My Account</ALink></li>
                                            </ul>
                                            <ul className="link-part col-sm-6">
                                                <li><ALink href="#">Orders History</ALink></li>
                                                <li><ALink href="#">Advanced search</ALink></li>
                                                <li><ALink href="/pages/login">Login</ALink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-7">
                                    <div className="widget">
                                        <h4 className="widget-title">About Us</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-xl-6 mb-0">
                                                <li><ALink href="#">Super Fast React Template</ALink></li>
                                                <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                                <li><ALink href="#">33 Unique Shop Layouts</ALink></li>
                                            </ul>
                                            <ul className="link-part col-xl-6">
                                                <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                                <li><ALink href="#">Mobile &amp; Retina Optimized</ALink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright py-3 pr-4 mb-0 ls-n-10">© Porto eCommerce. 2021. All Rights Reserved</span>
                        </div>

                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <img src="images/payments.png" alt="payment methods" className="footer-payments py-3" width="240" height="32" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
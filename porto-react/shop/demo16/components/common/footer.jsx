import React from "react";
import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="widget widget-about">
                                <h4 className="widget-title">About Us</h4>
                                <ALink href="/" className="footer-logo mb-2">
                                    <img src="images/logo-black.png" width="111" height="44"
                                        alt="Porto Logo" />
                                </ALink>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                vestibulum magna, et dapibus
                                lacus.&nbsp;
                                    <ALink href="#" className="text-dark">
                                        <strong>
                                            <ins>read more...</ins>
                                        </strong>
                                    </ALink>
                                </p>
                            </div>

                            <div>
                                <div className="widget">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul className="contact-info d-flex flex-wrap">
                                        <li>
                                            <span className="contact-info-label">Address:</span>1234 Street Name, City,
                                            England
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Phone:</span>
                                            <a href="tel:">(123) 456-7890</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Email:</span>
                                            <a href="mailto:mail@example.com">mail@example.com</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Working Days/Hours:</span>
                                            <a href="tel:">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                        </li>
                                    </ul>
                                </div>
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
                        <div className="col-lg-3">
                            <div className="widget widget-product mb-4">
                                <h4 className="widget-title">Featured Products</h4>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <ALink href="/product/default/black-woman-underwear-one">
                                            <img src="images/home/products/product-1.jpg" width="95"
                                                height="95" alt="product" />
                                        </ALink>
                                    </figure>
                                    <div className="product-details">
                                        <h2 className="product-title text-dark">
                                            <ALink href="/product/default/black-woman-underwear-one">Black Woman Underwear</ALink>
                                        </h2>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings w-100"></span>
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                        </div>
                                        <div className="price-box">
                                            <span className="product-price text-dark">$39.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <ALink href="/product/default/black-watch-one">
                                            <img src="images/home/products/product-2.jpg" width="95"
                                                height="95" alt="product" />
                                        </ALink>
                                    </figure>
                                    <div className="product-details">
                                        <h2 className="product-title text-dark">
                                            <ALink href="/product/default/black-watch-one">Black Watch</ALink>
                                        </h2>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings w-100"></span>
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                        </div>
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <ALink href="/product/default/porto-golden-glasses">
                                            <img src="images/home/products/product-3.jpg" width="95"
                                                height="95" alt="product" />
                                        </ALink>
                                    </figure>
                                    <div className="product-details">
                                        <h2 className="product-title text-dark">
                                            <ALink href="/product/default/porto-golden-glasses">Porto Golden Glasses</ALink>
                                        </h2>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={ { width: '80%' } }></span>
                                                <span className="tooltiptext tooltip-top">4.00</span>
                                            </div>
                                        </div>
                                        <div className="price-box">
                                            <span className="product-price">$299.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h4 className="widget-title">Twitter Feed</h4>

                                <div className="twitter-feed">
                                    <div className="twitter-feed-content">
                                        <a className="d-inline-block align-top text-dark" href="#">
                                            <i className="mr-1 icon-twitter"></i>
                                        </a>&nbsp;
                                        <p className="d-inline-block">Oops, our twitter feed is unavailable right now.
                                            <br />
                                            <a className="meta" href="http://twitter.com/swtheme">Follow us on Twitter</a>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="links link-parts row">
                                    <li className="link-part col-md-6 mb-0">
                                        <ul>
                                            <li>
                                                <ALink href="/pages/about-us">About us</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/contact-us">Contact us</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/account">My Account</ALink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="link-part col-md-6 mb-0">
                                        <ul>
                                            <li>
                                                <ALink href="#">Order history</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Advanced search</ALink>
                                            </li>
                                            <li>
                                                <ALink href="/pages/login" className="login-link">Login</ALink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="widget">
                                <h4 className="widget-title">Main Features</h4>

                                <ul className="links link-parts row">
                                    <li className="link-part col-md-6 mb-0">
                                        <ul>
                                            <li>
                                                <ALink href="#">Super Fast React Templete</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">1st Fully working Ajax Theme</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">34 Unique Shop Layouts</ALink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="link-part col-md-6 mb-0">
                                        <ul>
                                            <li>
                                                <ALink href="#">Powerful Admin Panel</ALink>
                                            </li>
                                            <li>
                                                <ALink href="#">Mobile & Retina Optimized</ALink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-4 mb-0">&copy; Porto eCommerce. 2021. All Rights Reserved</p>

                    <div className="footer-right mt-1 mt-sm-0">
                        <div className="payment-icons">
                            <span className="payment-icon visa" style={ { backgroundImage: `url("images/payments/payment-visa.svg")` } }></span>
                            <span className="payment-icon paypal" style={ { backgroundImage: `url("images/payments/payment-paypal.svg")` } }></span>
                            <span className="payment-icon stripe" style={ { backgroundImage: `url("images/payments/payment-stripe.png")` } }></span>
                            <span className="payment-icon verisign" style={ { backgroundImage: `url("images/payments/payment-verisign.svg")` } }></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-left nav-links">
                        <ALink href="/pages/account">My Account</ALink>
                        <ALink href="#">Track Your Order</ALink>
                        <ALink href="#">Shipping Guide</ALink>
                        <ALink href="#">FAQs</ALink>
                        <ALink href="#">Product Support</ALink>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="footer-left">
                        <ALink href="/">
                            <img src="images/home/logo-white.png" className="logo-footer" alt="logo image"
                                width="110" height="46" />
                        </ALink>
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
                    <img src="images/home/payments_long.png" alt="payment_image" width="180"
                        height="28" />
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container justify-content-center">
                    <p>© copyright 2021. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
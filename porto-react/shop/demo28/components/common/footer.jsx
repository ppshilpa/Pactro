import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRouter } from 'next/router';

import ALink from "./ALink";

function Footer () {
    const router = useRouter();

    return (
        <footer className="footer mb-0">
            <div className="container">
                <div className="footer-top">
                    <ALink href="/" className="footer-logo">
                        <img src="images/logo-white.png" alt="footer=logo" width="202" height="80" />
                    </ALink>
                </div>

                <div className="footer-middle">
                    <ul className="link-btns scrolling-box">
                        {
                            router.pathname === '/' ?
                                <>
                                    <li>
                                        <AnchorLink href="#intro" offset="0">Intro</AnchorLink>
                                    </li>
                                    <li>
                                        <AnchorLink href="#feature" offset="0">Features</AnchorLink>
                                    </li>
                                    <li>
                                        <AnchorLink href="#tour" offset="0">Tour</AnchorLink>
                                    </li>
                                    <li>
                                        <AnchorLink href="#specific" offset="0">Specifications</AnchorLink>
                                    </li>
                                    <li>
                                        <AnchorLink href="#testimonial" offset="0">Testimonials</AnchorLink>
                                    </li>
                                    <li>
                                        <a href="https://1.envato.market/DdLk5" target="_blank">Buy Now</a>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <ALink className="nav-link intro" href="/#intro">Intro</ALink>
                                    </li>
                                    <li>
                                        <ALink className="nav-link feature" href="/#feature">Features</ALink>
                                    </li>
                                    <li>
                                        <ALink className="nav-link tour" href="/#tour">Tour</ALink>
                                    </li>
                                    <li>
                                        <ALink className="nav-link specific" href="/#specific">Specifications</ALink>
                                    </li>
                                    <li>
                                        <ALink className="nav-link testimonial" href="/#testimonial">Testimonials</ALink>
                                    </li>
                                    <li>
                                        <a href="https://1.envato.market/DdLk5" target="_blank">Buy Now</a>
                                    </li>
                                </>
                        }
                    </ul>

                    <figure className="brands-img">
                        <img src="images/home/payment.png" className="mx-auto" alt="payment" width="237"
                            height="36" />
                    </figure>

                    <form action=" #" method="get" className="mb-0">
                        <div className="submit-wrapper">
                            <label className="text-uppercase text-white mb-0">newsletter</label>
                            <input type="search" className="form-control mb-0" name="q" id="q"
                                placeholder="Email Address..." required />
                            <button className="btn btn-primary" type="submit">GO</button>
                        </div>
                    </form>
                </div>

                <div className="footer-bottom d-flex justify-content-center justify-content-md-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-4 mb-0">&copy; copyright 2021. All Rights Reserved.</p>

                    <div className="social-icons">
                        <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                        <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                        <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"></ALink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
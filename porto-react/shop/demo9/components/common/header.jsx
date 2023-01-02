// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import VerticalMenu from "./partials/vertical-menu";
import SearchForm from "./partials/search-form";
import LoginModal from "../features/modals/login-modal";
import OwlCarousel from "../../components/features/owl-carousel";

import { serviceSlider } from "../../utils/data/slider"

export default function Header ( { adClass = '' } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header mb-0 ${ adClass }` }>
            <div className="container">
                <div className="pre-header w-100">
                    <OwlCarousel adClass="feature-box-carousel" data-toggle="owl" options={ serviceSlider }>
                        <div className="info-box info-box-icon-left">
                            <i className="icon-shipping line-height-1"></i>

                            <div className="info-box-content">
                                <h4 className="ls-n-25 line-height-1">FREE SHIPPING &amp; RETURN</h4>
                            </div>
                        </div>
                        <div className="info-box info-box-icon-left">
                            <i className="icon-money line-height-1"></i>

                            <div className="info-box-content">
                                <h4 className="ls-n-25 line-height-1">MONEY BACK GUARANTEE</h4>
                            </div>
                        </div>
                        <div className="info-box info-box-icon-left">
                            <i className="icon-support line-height-1"></i>

                            <div className="info-box-content">
                                <h4 className="ls-n-25 line-height-1">ONLINE SUPPORT 24/7</h4>
                            </div>
                        </div>
                        <div className="info-box info-box-icon-left">
                            <i className="icon-secure-payment line-height-1"></i>

                            <div className="info-box-content">
                                <h4 className="ls-n-25 line-height-1">SECURE PAYMENT</h4>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                            <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-dropdown">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-links mega-menu show-arrow d-none d-lg-inline-block mt-0 mb-0">
                            <li className="menu-item narrow"><ALink href="/pages/account">My Account</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/about-us">About Us</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/blog">Blog</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/cart">Cart</ALink></li>

                            <LoginModal />
                        </ul>

                        <span className="separator d-none d-lg-block"></span>

                        <div className="social-icons d-flex align-items-center">
                            <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter" ></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="header-middle sticky-header d-flex w-100">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler text-white mr-2" type="button" onClick={ openMobileMenu }>
                                <i className="fa fa-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="images/logo-white.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                            </ALink>
                        </div>

                        <div className="header-center flex-1 ml-lg-0 justify-content-end justify-content-lg-start  w-lg-max">
                            <SearchForm />
                        </div>

                        <div className="header-right ml-0 ml-lg-auto">
                            <div className="header-contact d-none d-lg-flex align-items-center">
                                <i className="icon-phone-2"></i>
                                <h6>Call us now<a href="tel:#" className="text-white font1">+123 5678 890</a></h6>
                            </div>

                            <ALink href="/pages/login" className="header-icon header-icon-user text-white" title="login"><i className="icon-user-2 d-inline-flex-center"></i></ALink>

                            <ALink href="/pages/wishlist" className="header-icon d-inline-flex text-white" title="wishlist"><i className="icon-wishlist-2 d-inline-flex-center line-height-1"></i></ALink>

                            <CartMenu />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-none  d-lg-block">
                <div className="row">
                    <VerticalMenu />
                </div>
            </div>
        </header>
    )
}
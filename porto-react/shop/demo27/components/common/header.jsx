// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import OwlCarousel from '../features/owl-carousel';
import LoginModal from "../features/modals/login-modal";

// Import Settings
import { infoBoxSlider } from "../../utils/data/slider";

export default function Header ( { adClass = '' } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown">
                            <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right d-none d-lg-flex">
                        <p className="top-message text-uppercase mr-2">Default Welcome Msg</p>
                        <div className="header-dropdown dropdown-expanded">
                            <a className="#">Links</a>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>
                                    <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="/pages/blog">Blog</ALink></li>

                                    <LoginModal />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>

                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <SearchForm />

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2 line-height-1"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <OwlCarousel adClass="info-boxes-slider bg-primary" options={ infoBoxSlider }>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping text-white"></i>

                        <div className="info-box-content">
                            <h4 className="text-white">Free Shipping &amp; Return</h4>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-money text-white"></i>

                        <div className="info-box-content">
                            <h4 className="text-white">Money Back Guarantee</h4>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-support text-white"></i>

                        <div className="info-box-content">
                            <h4 className="text-white">Online Support 24/7</h4>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </header >
    )
}
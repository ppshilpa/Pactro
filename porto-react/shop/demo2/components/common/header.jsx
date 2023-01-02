// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import LoginModal from "../features/modals/login-modal";

export default function Header ( { adClass = '' } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="container">
                <div className="header-top d-flex align-items-center w-100">
                    <div className="header-left">
                        <p className="top-message ls-0 text-uppercase text-white d-none d-sm-block">FREE Returns. Standard Shipping Orders $99+</p>
                    </div>

                    <div className="header-right header-dropdowns w-sm-100">
                        <div className="header-dropdown dropdown-expanded d-none d-lg-block mr-2">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                    <li><ALink href="/pages/blog">Blog</ALink></li>
                                    <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>
                                    <LoginModal />
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

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

                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter" ></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-white.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max ml-0">
                        <SearchForm sticky="true" />

                        <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5">
                            <img alt="phone" src="images/phone-white.png" width="30" height="30" className="pb-1" />
                            <h6>Call us now<a href="tel:#" className="font1">+123 5678 890</a></h6>
                        </div>

                        <ALink href="/pages/login" className="header-icon d-inline-block" title="login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon d-inline-block" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-block">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            <img src="images/logo-white.png" alt="Porto Logo" />
                        </ALink>
                    </div>
                    <div className="header-center">
                        <MainMenu />
                    </div>
                    <div className="header-right">
                        <SearchForm />

                        <ALink href="/pages/login" className="header-icon d-inline-block" title="login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon d-inline-block" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
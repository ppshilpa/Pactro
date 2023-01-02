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
            <div className="header-top">
                <div className="container">
                    <div className="header-left header-dropdowns">
                        <div className="header-dropdown lang-menu">
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
                            <ALink href="#" className="pl-0">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <p className="top-message text-uppercase d-none d-sm-block">Free returns. Standard shipping orders $99+</p>

                        <span className="separator"></span>

                        <div className="header-dropdown dropdown-expanded mx-3 px-1">
                            <ALink href="#">Links</ALink>
                            <ul className="header-menu">
                                <li><ALink href="/pages/account">My Account</ALink></li>
                                <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                                <li><ALink href="/pages/cart">Cart</ALink></li>
                                <LoginModal />
                            </ul>
                        </div>

                        <span className="separator separator-1"></span>

                        <div className="social-icons d-flex">
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
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="black-logo" width="202" height="80" alt="Porto Logo" />
                            <img src="images/logo-white.png" className="white-logo" width="202" height="80" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max">
                        <SearchForm />

                        <div className="header-contact d-none d-lg-flex pl-1 mr-xl-5 pr-4">
                            <img alt="phone" src="images/phone.png" width="30" height="30" className="pb-1" />
                            <h6>Call us now
								<a href="tel:#" className="text-dark font1">+123 5678 890</a>
                            </h6>
                        </div>

                        <ALink href="/pages/account" className="header-icon login-btn pl-1">
                            <i className="icon-user-2"></i>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon account-link pl-1" title="wishlist"><i
                            className="icon-wishlist-2"></i></ALink>

                        <CartMenu />

                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            <img src="images/sticky-logo.png" className="white-logo sticky-logo" alt="Porto Logo"
                                width="110" height="46" />
                        </ALink>
                    </div>
                    <div className="header-center">
                        <MainMenu />
                    </div>
                    <div className="header-right">
                        <SearchForm sticky={ true } />

                        <ALink href="/pages/account" className="header-icon">
                            <i className="icon-user-2"></i>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i
                            className="icon-wishlist-2"></i></ALink>

                        <CartMenu sticky={ true } />
                    </div>
                </div>
            </div>
        </header>
    )
}
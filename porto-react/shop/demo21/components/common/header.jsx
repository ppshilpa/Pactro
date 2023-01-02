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
        <header className={ `header ${adClass}` }>
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
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

                        <span className="gap mx-3">|</span>

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

                    <div className="header-right ml-0 ml-lg-auto">
                        <p className="top-message mb-0 text-uppercase">Welcome To Porto!</p>
                        <span className="gap mx-4 d-none d-lg-block">|</span>

                        <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="#">Site Map</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>

                                    <LoginModal />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-white.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                            <img src="images/logo-black.png" className="w-100 sticky-logo" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-center">
                        <SearchForm adClass="header-search-inline mt-0" type="1" />
                    </div>

                    <div className="header-right ml-0 ml-lg-auto">
                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-block">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right pr-0">
                        <SearchForm adClass="header-search-popup" />

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    )
}
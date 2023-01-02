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
            <div className="header-top text-uppercase">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown mr-3 pr-1">
                            <ALink href="#" className="pl-0">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-dropdown mr-auto">
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

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto overflow-hidden">
                        <div className="header-dropdown dropdown-expanded mr-3">
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="/pages/contact-us">About Us</ALink></li>
                                    <li><ALink href="/pages/blog">Blog</ALink></li>
                                    <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>
                                    <LoginModal />
                                </ul>
                            </div>
                        </div>

                        <span className="separator d-none d-lg-inline-block"></span>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter" ></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram mr-1"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>

                        <MainMenu />

                        <SearchForm />

                    </div>

                    <div className="header-right">
                        <div className="header-contact d-none d-lg-flex pl-4 pr-4">
                            <img alt="phone" src="images/phone.png" width="30" height="30" className="phone-icon" />
                            <h6><span>Call us now</span><a href="tel:#" className="text-dark font1">+123 5678 890</a></h6>
                        </div>

                        <ALink href="/pages/login" className="header-icon header-icon-user d-lg-none d-block" title="login"><i
                            className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon d-lg-none d-block" title="wishlist"><i
                            className="icon-wishlist-2"></i></ALink>

                        <span className="separator d-lg-inline-block d-none"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
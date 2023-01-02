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
                <div className="header-row container">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <ALink href="#" className="pl-0">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

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
                    </div>

                    <div className="header-right">
                        <div className="wel-msg text-uppercase d-none d-lg-block">FREE Returns. Standard Shipping Orders
                            $99+</div>
                        <span className="separator d-none d-xl-block"></span>
                        <ul className="top-links mega-menu show-arrow d-none d-sm-inline-block">
                            <li className="menu-item narrow"><ALink href="/pages/account">My Account</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/about-us">About Us</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/blog">Blog</ALink></li>
                            <li className="menu-item narrow"><ALink href="/pages/cart">Cart</ALink></li>
                            <LoginModal />
                        </ul>
                    </div>

                    <span className="separator d-none d-xl-block"></span>

                    <div className="share-links d-none d-xl-block">
                        <ALink href="#" className="share-facebook icon-facebook"></ALink>
                        <ALink href="#" className="share-twitter icon-twitter"></ALink>
                        <ALink href="#" className="share-instagram icon-instagram"></ALink>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left d-lg-block d-none">
                        <div className="header-contact d-none d-lg-flex align-items-center pl-1 mr-lg-5 pr-xl-2">
                            <i className="icon-phone-2"></i>
                            <h6>Call us now<a href="tel:#" className="text-dark font1">+123 5678 890</a></h6>
                        </div>
                    </div>

                    <div className="header-center">
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fas fa-bars"></i>
                        </button>
                        <ALink href="/" className="logo">
                            <img src="images/home/logo_red.png" alt="Porto Logo" width="102"
                                height="41" />
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max">
                        <ALink href="/pages/login" className="header-icon header-icon-user" title="login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <SearchForm />

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-flex">
                <div className="container">
                    <MainMenu />
                </div>
            </div>
        </header >
    )
}
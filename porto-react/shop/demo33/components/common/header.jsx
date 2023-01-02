// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

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
                    <div className="header-left d-none d-sm-block">
                        <h6 className="telephone mb-0"><a href="tel:#">Call Us (123) 456-7890</a></h6>
                    </div>

                    <div className="header-right w-sm-100">
                        <div className="header-dropdown dropdown-expanded mr-auto mr-sm-3">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <ALink href="/pages/account">My account </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/wishlist">Wishlist</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle header-align-center sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left d-none d-lg-flex">
                        <div className="header-dropdown switcher">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown switcher">
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

                    <div className="header-center">
                        <button className="mobile-menu-toggler d-lg-none mr-1 mr-md-3" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <SearchForm />

                        <div className="icons-group d-flex d-lg-none">
                            <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                            <CartMenu />
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-block">
                <div className="container">
                    <div className="header-left">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    )
}
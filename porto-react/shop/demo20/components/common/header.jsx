import { connect } from 'react-redux';

// Import Actions
import { actions as WishlistAction } from "../../store/wishlist";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import LoginModal from "../features/modals/login-modal";

function Header ( { adClass = '', wishlist } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-top d-none d-lg-block">
                <div className="container">
                    <div className="header-left">
                        <SearchForm />
                    </div>

                    <div className="header-right ml-0 ml-lg-auto">
                        <div className="header-dropdowns">
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

                            <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                                <ALink href="#">Links</ALink>
                                <div className="header-menu">
                                    <ul className="mb-0 d-none d-lg-flex">
                                        <li><ALink href="/pages/about-us">About Us</ALink></li>
                                        <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                        <LoginModal />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ALink href="/pages/login" className="header-icon login-link"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="badge-circle">{ wishlist.length }</span>
                        </ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left d-none d-lg-flex justify-content-center">
                        <MainMenu />
                    </div>

                    <div className="header-center ml-0">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" width="101" height="40" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right justify-content-center ml-0">
                        <nav className="main-nav">
                            <ul className="menu">
                                <li><ALink href="/pages/blog">Blog</ALink></li>
                                <li><ALink href="/pages/about-us">About Us</ALink></li>
                                <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right d-lg-none">
                        <SearchForm type="1" />

                        <ALink href="/pages/login" className="header-icon login-link"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="badge-circle">{ wishlist.length }</span>
                        </ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, WishlistAction )( Header );
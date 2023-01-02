import { connect } from 'react-redux';

// Import Actions
import { actions as WishlistAction } from "../../store/wishlist";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

function Header ( { adClass = '', wishlist } ) {
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

                        <div className="header-dropdown ml-4">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="header-menu">
                            <ul className="mb-0 d-none d-lg-flex">
                                <li>
                                    <ALink href="/pages/checkout">Checkout</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/cart">Cart</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/contact-us">Contact Us</ALink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="header-right w-lg-max ml-0 ml-lg-auto">
                        <div className="header-contact d-none d-sm-flex align-items-center ml-auto">
                            <i className="icon-phone-2"></i>
                            <h6>
                                <a href="tel:#" className="d-block">+123 5678 890</a>
                            </h6>
                        </div>

                        <span className="separator d-sm-block d-none"></span>

                        <SearchForm />

                        <ALink href="/pages/login" className="header-icon login-link text-dark"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2 text-dark"></i>
                            <span className="badge-circle">{ wishlist.length }</span>
                        </ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left d-none d-lg-flex">
                        <MainMenu />
                    </div>

                    <div className="header-center justify-content-between">
                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="202" height="80" alt="Porto Logo" />
                        </ALink>

                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>

                    <div className="header-right d-none d-lg-flex">
                        <div className="main-nav d-flex w-lg-max justify-content-end">
                            <ul className="menu">
                                <li>
                                    <ALink href="/pages/blog">Blog</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/about-us">About Us</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/contact-us">Contact Us</ALink>
                                </li>
                                <li>
                                    <a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a>
                                </li>
                            </ul>
                        </div>
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
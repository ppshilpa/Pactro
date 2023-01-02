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
                    <div className="header-left d-none d-sm-block">
                        <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
                            <i className="icon-shipping"></i>

                            <div className="info-box-content">
                                <h4 className="text-transform-none">FREE Express Shipping On Orders $99+</h4>
                            </div>
                        </div>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                        <div className="header-dropdown">
                            <ALink href="#">USD</ALink>
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

                        <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/account">My account</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>
                                    <li><ALink href="/pages/login" className="login-link">Log In</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
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
                            <img src="images/logo-black.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max">
                        <SearchForm />

                        <ALink href="/pages/login" className="d-lg-block d-none">
                            <div className="header-user">
                                <i className="icon-user-2"></i>

                                <div className="header-userinfo">
                                    <span>Welcome</span>
                                    <h4 className="mb-0">My Account</h4>
                                </div>
                            </div>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="wishlist-count badge-circle">{ wishlist.length }</span>
                        </ALink>

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

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, WishlistAction )( Header );
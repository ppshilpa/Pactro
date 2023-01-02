import { connect } from 'react-redux';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

// Import Actions
import { actions as WishlistAction } from "../../store/wishlist";

function Header ( { adClass = '', wishlist } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-top">
                <div className="container-fluid">
                    <div className="header-left d-none d-sm-block">
                        <h4 className="mb-0"><a href="tel:#">Call Us: <strong>800-123-4567</strong></a></h4>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                        <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li className="d-xl-blcok d-none"><ALink href="/pages/account">Track Order</ALink></li>
                                    <li><ALink href="/pages/about-us">About</ALink></li>
                                    <li><ALink href="#">Our Stores</ALink></li>
                                    <li><ALink href="/pages/blog">Blog</ALink></li>
                                    <li><ALink href="/pages/contact-us">Contact</ALink></li>
                                    <li><ALink href="#" className="login-link">Help & FAQs</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown ml-sm-3 ml-0">
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

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left pl-0">
                        <MainMenu />
                    </div>

                    <div className="header-center ml-0 ml-lg-auto">
                        <button className="mobile-menu-toggler text-dark mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <SearchForm />

                        <ALink href="/pages/login" className="header-icon header-user-icon" title="Login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="wishlist-count badge-circle font2">{ wishlist.length }</span>
                        </ALink>

                        <div className="separator"></div>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, WishlistAction )( Header );
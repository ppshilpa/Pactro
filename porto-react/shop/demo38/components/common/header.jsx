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
                <div className="container">
                    <div className="header-left d-none d-md-flex">
                        <a href="tel:#" className="font-weight-bold text-primary d-flex align-items-center"><i className="sicon-phone"></i>(800) 123-4567</a>
                        <span className="separator"></span>
                        <p><span className="font-weight-bold text-primary">Extra 15% OFF</span> Health & Wellness</p>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-md-auto w-md-100">
                        <div className="header-dropdown dropdown-expanded d-none d-xl-block">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">Track Your Order</ALink></li>
                                    <li><ALink href="#" className="login-link">Help Center</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator d-none d-xl-block"></span>

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
                                    <li> <ALink href="#"><i className="flag-us flag"></i>ENG</ALink></li>
                                    <li><ALink href="#"><i className="flag-fr flag"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons ml-auto ml-md-0">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler text-dark" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <MainMenu />

                        <SearchForm />

                        <ALink href="/pages/login" className="header-icon header-icon-user" title="Login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="wishlist-count badge-circle">{ wishlist.length }</span>
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
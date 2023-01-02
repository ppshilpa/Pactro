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
        <header className={ `header ${adClass}` }>
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler text-white mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-center justify-content-between">
                        <MainMenu />
                    </div>

                    <div className="header-right justify-content-end">
                        <div className="header-dropdowns">
                            <div className="header-dropdown">
                                <ALink href="#">USD</ALink>
                                <div className="header-menu text-center">
                                    <ul>
                                        <li><ALink href="#">EUR</ALink></li>
                                        <li><ALink href="#">USD</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-dropdown">
                                <ALink href="#">ENG</ALink>
                                <div className="header-menu text-center">
                                    <ul>
                                        <li><ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                                        </li>
                                        <li><ALink href="#"><i className="flag-fr flag"></i>FRA</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-dropdown d-none d-xl-block">
                                <ALink href="#">Links</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="/pages/about-us">ABOUT US</ALink>
                                        </li>
                                        <li><ALink href="/pages/contact-us">CONTACT US</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ALink href="/pages/login" className="header-icon" title="Login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist">
                            <i className="icon-wishlist-2"><span className="badge-circle">{ wishlist.length }</span></i>
                        </ALink>

                        <SearchForm />

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
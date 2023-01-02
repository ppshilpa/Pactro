import { useRouter } from "next/router";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
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
                <div className="container-fluid">
                    <div className="header-left top-notice d-none d-md-flex p-0 font2">
                        <h5 className="d-inline-block text-dark mb-0 ls-0">Refer to a friend and Get <b>10% OFF</b></h5>
                        <ALink href="/shop" className="category text-white ls-0">START SHARING</ALink>
                        <small>* Limited time only.</small>
                    </div>

                    <div className="header-right header-dropdowns ml-auto w-sm-100 justify-content-end">
                        <div className="info-box info-box-icon-left p-0">
                            <i className="icon-shipping"></i>

                            <div className="info-box-content">
                                <h4>FREE Express Shipping On Orders $99+</h4>
                            </div>
                        </div>

                        <div className="separator"></div>

                        <div className="header-dropdown font2">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown mr-0 pl-2 font2">
                            <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="separator"></div>

                        <div className="info-box-container align-items-center">
                            <div className=" info-box info-box-icon-left">
                                <i className="icon-pin"></i>

                                <div className="info-box-content">
                                    <h4>Our Stores</h4>
                                </div>
                            </div>

                            <div className="info-box info-box-icon-left">
                                <i className="icon-shipping-truck"></i>

                                <div className="info-box-content">
                                    <h4 className="ls-0">Track Your Order</h4>
                                </div>
                            </div>

                            <div className="info-box info-box-icon-left">
                                <i className="icon-help-circle"></i>

                                <div className="info-box-content">
                                    <h4>Help</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container-fluid">
                    <div className="header-left justify-content-lg-center">
                        <button className="mobile-menu-toggler text-dark mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className={ `header-right w-lg-max  ${ useRouter().pathname.indexOf( 'wishlist' ) !== -1 ? '' : 'box-shadow' }` }>
                        <SearchForm />

                        <div className="header-contact header-wishlist d-lg-flex pl-4 pr-sm-4 pr-2 ml-2">
                            <ALink href="/pages/wishlist" className="header-icon mr-0" title="wishlist"><i className="icon-wishlist-2"></i></ALink>
                            <h6 className="text-capitalize"><span>Favorites</span><ALink href="/pages/wishlist">Wishlist</ALink></h6>
                        </div>

                        <div className="header-contact d-lg-flex pr-sm-4 pr-2">
                            <ALink href="/pages/login" className="header-icon mr-0" title="login"><i className="icon-user-2"></i></ALink>
                            <h6 className="text-capitalize"><span className="ls-n-20">Welcome</span><ALink href="/pages/login">Sign In / Register</ALink></h6>
                        </div>

                        <div className="separator"></div>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    )
}
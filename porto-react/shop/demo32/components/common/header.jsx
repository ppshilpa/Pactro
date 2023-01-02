import { useRouter } from "next/router";

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
            <div className="header-top d-flex align-items-center">
                <div className="container">
                    <div className="header-left mr-lg-0 mr-3 d-sm-flex d-none">
                        <h4 className="mb-0">Get 10% OFF at the Porto GIFTs Selection - <ALink href="/shop">Shop Now!</ALink></h4>
                    </div>

                    <div className="header-right">
                        <ul className="d-lg-flex d-none">
                            <li><ALink href="/pages/account">My account</ALink></li>
                            <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                            <li><ALink href="/pages/cart">Cart</ALink></li>
                            <li><ALink href="/pages/login">Log In</ALink></li>
                        </ul>

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
                    </div>

                    <div className="header-right">
                        <SearchForm />

                        <ALink href="/pages/login" className="header-icon header-icon-user" title="Login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            {
                useRouter().pathname === '/' &&
                <div className="header-bottom">
                    <MainMenu />
                </div>
            }
        </header >
    )
}
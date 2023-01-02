import { useRouter } from 'next/router';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import PopupMenu from "./partials/popup-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { adClass = '' } ) {
    const router = useRouter();

    function openMenu ( e ) {
        e.preventDefault();
        if ( document.querySelector( '.popup-menu' ) )
            document.querySelector( '.popup-menu' ).classList.add( 'open' );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-top bg-dark">
                <div className="container">
                    <div className="header-left">
                        <div className="top-notice mb-0 text-white">
                            <h5 className="mb-0">Get 10% OFF at the Porto Fashion Selection - <ALink href="/shop" className="text-white">Shop Now!</ALink>
                            </h5>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="top-menu text-upper">
                            <ul className="d-lg-flex d-none mb-0">
                                <li>
                                    <ALink href="/shop">SHOP</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/blog">BLOG</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/about-us">ABOUT US</ALink>
                                </li>
                                <li>
                                    <ALink href="/pages/wishlist">WISHLIST</ALink>
                                </li>
                            </ul>
                        </nav>

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

                            <div className="header-dropdown text-nowrap">
                                <ALink href="#" className="pl-0"><i className="flag-us flag"></i>ENG</ALink>
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
            </div>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <a href="#" className="popup-menu-toggler mr-2 pr-1" onClick={ openMenu }>
                            <i className="toggler-icon"></i>
                        </a>

                        <div className="separator sepa-1"></div>

                        <PopupMenu />

                        <SearchForm />

                        <div className="separator sepa-2"></div>

                        <ALink href="/pages/login" className="header-icon login-link mr-3 ml-3"><i className="icon-user-2"></i></ALink>

                        <div className="separator sepa-3"></div>

                        <ALink href="/pages/wishlist" className="header-icon icon-wish"><i className="icon-wishlist-2"></i></ALink>

                        <div className="separator sepa-4"></div>

                        <CartMenu />
                    </div>

                </div>
            </div>
        </header >
    )
}
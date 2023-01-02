import { useRouter } from 'next/router';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { adClass = '' } ) {
    const router = useRouter();

    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ router.pathname === '/' ? 'header-transparent' : '' } ${ adClass }` }>
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left flex-1 d-none d-lg-flex">
                        <MainMenu />
                    </div>
                    <div className="header-center ml-0 mx-lg-auto">
                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="113" height="46" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right flex-1 justify-content-end">
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <div className="header-dropdowns d-none d-xl-flex">
                            <div className="header-dropdown lang-dropdown">
                                <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                        </li>
                                        <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                    </ul>
                                </div>
                            </div>

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
                                <ALink href="#">Links</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="/pages/account">MY ACCOUNT</ALink></li>
                                        <li><ALink href="/pages/about-us">ABOUT US</ALink></li>
                                        <li><ALink href="/pages/contact-us">CONTACT US</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ALink href="/pages/login" className="header-icon user-icon" title="login"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <SearchForm />

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
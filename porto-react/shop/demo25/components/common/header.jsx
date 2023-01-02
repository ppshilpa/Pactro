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
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler pl-0" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>

                        <MainMenu />

                        <span className="separator d-none d-lg-inline"></span>

                        <nav className="main-nav ml-0 d-none d-xl-block">
                            <ul className="menu sf-js-enabled sf-arrows">
                                <li className="d-none d-xxl-block"><ALink href="#">Special Offer</ALink></li>
                                <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto</a></li>
                            </ul>
                        </nav>

                        <span className="separator d-none d-xl-inline"></span>
                    </div>

                    <div className="header-right pl-0 pl-lg-4">
                        <SearchForm />

                        <span className="separator d-none d-lg-inline"></span>

                        <ALink href="/pages/login">
                            <div className="header-user">
                                <i className="icon-user-2"></i>

                                <div className="header-userinfo">
                                    <span className="d-inline-block font2 line-height-1">Hello!</span>
                                    <h4 className="mb-0">My Account</h4>
                                </div>
                            </div>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
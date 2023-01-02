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
        <header className={ `header ${adClass}` }>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left pl-0">
                        <MainMenu />
                    </div>

                    <div className="header-center ml-0 ml-lg-auto">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/login" className="header-icon" title="Login"><i className="icon-user-2"></i></ALink>

                        <SearchForm adClass=" d-none d-sm-block" />

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="header-bottom w-100">
                    <h4 className="mb-0 text-center pr-3 pl-3">Get 10% OFF at the Porto Kitchen Selection - <ALink
                        href="/pages/shop">Shop Now!</ALink>
                    </h4>
                </div>
            </div>
        </header>
    )
}
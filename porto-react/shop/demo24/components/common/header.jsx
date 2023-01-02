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
            <div className="header-top">
                <div className="container">
                    <div className="header-col w-100 text-center">
                        <span className="text-primary text-uppercase">Use <strong>PORTO24</strong> and get 20% off in all products</span>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-center d-none d-lg-block">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/login" className="header-icon"><i className="icon-user-2"></i></ALink>

                        <SearchForm />

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
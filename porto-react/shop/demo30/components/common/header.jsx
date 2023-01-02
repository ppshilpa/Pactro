// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import LoginModal from "../features/modals/login-modal";

export default function Header ( { adClass = '' } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${adClass}` }>
            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left d-none d-lg-flex">
                        <div className="header-contact phone">
                            <span>Call us now</span>
                            <a href="tel:#">1-888-123-456</a>
                        </div>

                        <div className="header-contact">
                            <ALink href="/pages/wishlist">Wishlist</ALink>
                        </div>

                        <div className="header-contact">
                            <ALink href="/pages/contact-us">Contact Us</ALink>
                        </div>
                    </div>

                    <div className="header-center ml-0 ml-lg-auto">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/login" className="d-lg-block d-none">
                            <div className="header-user">
                                <i className="icon-user-2"></i>

                                <div className="header-userinfo">
                                    <span>Hello!</span>
                                    <h4 className="mb-0">My Account</h4>
                                </div>
                            </div>
                        </ALink>

                        <SearchForm type="1" />

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-block">
                <div className="container">
                    <div className="header-left">
                        <MainMenu />
                    </div>

                    <div className="header-right pr-0">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </header>
    )
}
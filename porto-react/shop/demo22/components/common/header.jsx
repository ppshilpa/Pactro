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
            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            <img src="images/logo-white.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>

                        <div className="header-col">
                            <SearchForm />

                            <div className="tagcloud d-none d-lg-flex">
                                <ALink href={ { pathname: "/shop", query: { category: "clothes" } } } scroll={ false }>clothes</ALink>
                                <ALink href={ { pathname: "/shop", query: { category: "fashion" } } } scroll={ false }>fashion</ALink>
                                <ALink href={ { pathname: "/shop", query: { category: "hub" } } } scroll={ false }>hub</ALink>
                                <ALink href={ { pathname: "/shop", query: { category: "shirt" } } } scroll={ false }>shirt</ALink>
                                <ALink href={ { pathname: "/shop", query: { category: "skirt" } } } scroll={ false }>skirt</ALink>
                                <ALink href={ { pathname: "/shop", query: { category: "sports" } } } scroll={ false }>sports</ALink>
                                <ALink href={ { pathname: "/shop", query: { category: "sweater" } } } scroll={ false }>sweater</ALink>
                            </div>
                        </div>
                    </div>

                    <div className="header-right ml-0 ml-lg-auto">
                        <ALink href="/pages/login" className="header-icon d-md-block d-none mr-0">
                            <div className="header-user">
                                <i className="icon-user-2"></i>
                                <div className="header-userinfo">
                                    <span className="d-inline-block line-height-1 ls-10">Hello!</span>
                                    <h4 className="font1 mb-0">My Account</h4>
                                </div>
                            </div>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky">
                <div className="container">
                    <div className="header-center">
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <MainMenu />

                        <div className="header-dropdowns ml-auto">
                            <ALink href="#" className="link-seller font-weight-bold d-none d-sm-block">Become a Seller</ALink>

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
            </div>
        </header >
    )
}
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
                <div className="container-fluid">
                    <div className="header-left d-none d-lg-flex">
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

                    <div className="header-center ml-0 ml-lg-auto">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" className="w-100" width="101" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/login" className="header-icon d-lg-block d-none">
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

                        <SearchForm adClass="d-none d-sm-flex d-lg-none" />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-block">
                <div className="container-fluid">
                    <div className="header-left d-flex">
                        <nav className="main-nav">
                            <ul className="menu">
                                <li><ALink href="#">Outlet</ALink></li>
                                <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-center w-auto">
                        <MainMenu />
                    </div>

                    <div className="header-right d-flex pr-0">
                        <SearchForm tyle="1" />
                    </div>
                </div>
            </div>
        </header >
    )
}
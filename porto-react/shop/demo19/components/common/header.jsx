import { connect } from 'react-redux';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

// Import Actions
import { actions as WishlistAction } from "../../store/wishlist";

function Header ( { adClass = '', wishlist } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-middle sticky-header mobile-sticky">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right justify-content-end">
                        <MainMenu />

                        <ALink href="/pages/login" className="header-icon d-lg-block d-none"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="badge-circle">{ wishlist.length }</span>
                        </ALink>

                        <SearchForm />

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, WishlistAction )( Header );
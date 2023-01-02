import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Import Actions
import { actions as WishlistAction } from "../../store/wishlist";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import SearchForm from "./partials/search-form";

function Header ( { adClass = '', wishlist } ) {
    const router = useRouter();

    useEffect( () => {
        if ( router.pathname.indexOf( '/shop' ) !== -1 && Object.entries( router.query ).length === 0 ) {
            document.querySelector( '.thumbs .active' ) && document.querySelector( '.thumbs .active' ).classList.remove( 'active' );
            document.querySelector( '.thumbs li' ).classList.add( 'active' );
        } else {
            document.querySelector( '.thumbs li.active' ) && document.querySelector( '.thumbs li.active' ).classList.remove( 'active' );
            let items = document.querySelectorAll( '.thumbs li' );
            for ( let i = 0; i < items.length; i++ ) {
                if ( items[ i ].querySelector( 'a' ).getAttribute( 'href' ).indexOf( router.query.category ) !== -1 ) {
                    document.querySelector( '.thumbs .active' ) && document.querySelector( '.thumbs .active' ).classList.remove( 'active' );
                    items[ i ].classList.add( 'active' );
                }
            }
        }
    }, [ router.query ] )

    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header border-0 ${ adClass }` }>
            <div className="header-top">
                <div className="container">
                    <div className="header-left d-none d-sm-block">
                        <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
                            <i className="icon-shipping"></i>

                            <div className="info-box-content">
                                <h4>FREE Express Shipping On Orders $99+</h4>
                            </div>
                        </div>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                        <div className="header-dropdown">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0 pl-2">
                            <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown dropdown-expanded d-none d-lg-block pr-1">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>
                                    <li><ALink href="/pages/login" className="login-link">Log In</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                        <button className="mobile-menu-toggler text-primary mr-2" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max">
                        <SearchForm />

                        <div className="header-contact d-lg-flex pl-4 pr-4">
                            <ALink href="/pages/login" className="header-icon mr-0" title="login"><i className="icon-user-2"></i></ALink>
                            <h6 className="text-capitalize d-none d-lg-block"><span className="ls-n-20">Welcome</span><ALink
                                href="/pages/login">Sign In / Register</ALink></h6>
                        </div>

                        <ALink href="/pages/wishlist" className="header-icon position-relative" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="wishlist-count badge-circle">{ wishlist.length }</span>
                        </ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom d-none d-lg-block">
                <div className="container">
                    <nav className="thumbs-nav w-100">
                        <ul className="thumbs d-flex align-items-center justify-content-center mb-2 row">
                            <li className="thumb-item col-1">
                                <ALink href="/shop"><i className="fas fa-bars bg-primary"></i>Categories</ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'women' } } } className=" has-preview">
                                    <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat1.jpg)' } }></span>
                                    Women
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'men' } } } className=" has-preview">
                                    <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat2.jpg)' } }></span>
                                    Men
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'girls' } } } className=" has-preview">
                                    <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat3.jpg)' } }></span>
                                    Girls
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'boys' } } } className=" has-preview">
                                    <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat4.jpg)' } }></span>
                                    Boys
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'baby-1' } } } className=" has-preview">
                                    <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat5.jpg)' } }></span>
                                    Baby
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } } className=" has-preview">
                                    <span className="thumb-info thumb-info-preview">
                                        <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat6.jpg)' } }></span>
                                    </span>
                                    Shoes
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'jewelry' } } } className=" has-preview">
                                    <span className="thumb-info thumb-info-preview">
                                        <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat7.jpg)' } }></span>
                                    </span>
                                    Jewelry
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'underwear' } } } className=" has-preview">
                                    <span className="thumb-info thumb-info-preview">
                                        <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat8.jpg)' } }></span>
                                    </span>
                                    Underwear
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } } className=" has-preview">
                                    <span className="thumb-info thumb-info-preview">
                                        <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat9.jpg)' } }></span>
                                    </span>
                                    Accessories
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'new-arrivals' } } } className=" has-preview">
                                    <span className="thumb-info thumb-info-preview">
                                        <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat10.png)' } }></span>
                                    </span>
                                    New Arrivals
                                </ALink>
                            </li>
                            <li className="thumb-item col-1">
                                <ALink href={ { pathname: '/shop', query: { category: 'sale' } } } className=" has-preview">
                                    <span className="thumb-info thumb-info-preview">
                                        <span className="thumb-info-image fixed-image" style={ { backgroundImage: 'url(images/home/categories/cat11.jpg)' } }></span>
                                    </span>
                                    Sale
                                </ALink>
                            </li>
                        </ul>
                    </nav>
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
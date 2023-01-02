import { useEffect } from "react";
import { useRouter } from "next/router";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { adClass = '' } ) {
    const router = useRouter();

    useEffect( () => {
        if ( router.pathname.indexOf( '/shop' ) !== -1 && Object.entries( router.query ).length === 0 ) {
            document.querySelector( '.nav-categories .active' ) && document.querySelector( '.nav-categories .active' ).classList.remove( 'active' );
            document.querySelector( '.nav-categories li' ).classList.add( 'active' );
        } else {
            document.querySelector( '.nav-categories li.active' ) && document.querySelector( '.nav-categories li.active' ).classList.remove( 'active' );
            let items = document.querySelectorAll( '.nav-categories li' );
            for ( let i = 0; i < items.length; i++ ) {
                if ( items[ i ].querySelector( 'a' ).getAttribute( 'href' ).indexOf( router.query.category ) !== -1 ) {
                    document.querySelector( '.nav-categories .active' ) && document.querySelector( '.nav-categories .active' ).classList.remove( 'active' );
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
        <header className={ `header ${ adClass }` }>
            <div className="header-top font2">
                <div className="container d-block">
                    <div className="row">
                        <div className="col-lg-5 order-lg-last">
                            <div className="info-box info-box-icon-left justify-content-lg-end p-0">
                                <i className="icon-shipping"></i>

                                <div className="info-box-content">
                                    <h4 className="font-weight-bold line-height-1 ls-10 text-dark text-uppercase">Free
                                    next day
                                        delivery*</h4>
                                    <p className="ls-n-20 text-body">* On Business Days - Purchases $100 or More</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center text-center pt-3 pt-lg-0">
                            <h2 className="text-body ls-n-20 m-b-2">
                                <span className="sale-off">30% OFF</span> <b>$200*</b> Use Code:
                                <b className="pl-2">PORTOCARS</b>
                            </h2>

                            <div className="m-b-2">
                                <h5 className="line-height-1 ls-n-20 text-dark mb-0">Online Purchases Only</h5>
                                <p className="ls-n-20 text-left">* Minimal Purchase Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler pl-0" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>

                        <SearchForm adClass="d-none d-sm-block" />
                    </div>

                    <div className="header-right">
                        <span className="separator d-none d-lg-inline"></span>

                        <div className="contact-widget d-none d-lg-block">
                            <p className="font2 text-body mb-0">CALL US NOW</p>
                            <h3 className="contact-phone ls-n-10 text-dark">1-888-123-456 </h3>
                            <ALink href="#" className="d-block font2 ">or Chat Online</ALink>
                        </div>

                        <span className="separator d-none d-lg-inline"></span>

                        <ALink className="header-icon" href="/pages/login">
                            <div className="header-user">
                                <i className="icon-user-2"></i>
                                <div className="header-userinfo d-none d-lg-block">
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

            <div className="header-bottom sticky-header desktop-sticky d-none d-lg-flex bg-transparent">
                <div className="container">
                    <div className="header-menu">
                        <ul className="nav-categories">
                            <li>
                                <ALink href={ { pathname: '/shop' } }><i className="fas fa-bars"></i>All<br />Categories</ALink>
                            </li>
                            <li >
                                <ALink href={ { pathname: '/shop', query: { category: 'sound-and-video' } } }><i className="icon-category-sound-video size-big"></i>Sound
                                    &amp; Video</ALink></li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'lanterns-and-lighting' } } }><i className="icon-category-lanterns-lighting"></i>Lanterns
                                    &
                                    lighting</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'internal-accessories' } } }><i className="icon-category-internal-accessories"></i>Internal
                                    Accessories</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'external-accessories' } } }><i
                                    className="icon-category-external-accessories size-big"></i>External
                                    Accessories</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'motorcycles-parts' } } }><i className="icon-category-motorcycles size-big"></i>Motorcycles
                                    Parts</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'fluids-and-chemicals' } } }><i className="icon-category-fluids size-big"></i>Fluids
                                    & Chemicals</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'steering-wheels' } } }><i className="icon-category-steering"></i>Steering
                                    Wheels</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'mechanics-and-performance' } } }><i className="icon-category-mechanics"></i>Mechanics
                                    &
                                    performance</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'hot-deals' } } }><i className="icon-category-hot-deals"></i>Hot
                                    <br />Deals</ALink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}
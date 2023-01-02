import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SlideToggle from 'react-slide-toggle';

// Import Custom Component
import ALink from "../ALink";
import { mainMenu } from "../../../utils/data/menu";

function MobileMenu ( { router } ) {
    const pathname = router.pathname;
    const [ searchText, setSearchText ] = useState( '' );

    useEffect( () => {
        if ( router.pathname.indexOf( '/shop' ) !== -1 && Object.entries( router.query ).length === 0 ) {
            document.querySelector( '.mobile-categories .active' ) && document.querySelector( '.mobile-categories .active' ).classList.remove( 'active' );
            document.querySelector( '.mobile-categories li' ).classList.add( 'active' );
        } else {
            document.querySelector( '.mobile-categories li.active' ) && document.querySelector( '.mobile-categories li.active' ).classList.remove( 'active' );
            let items = document.querySelectorAll( '.mobile-categories li' );
            for ( let i = 0; i < items.length; i++ ) {
                if ( items[ i ].querySelector( 'a' ).getAttribute( 'href' ).indexOf( router.query.category ) !== -1 ) {
                    document.querySelector( '.mobile-categories .active' ) && document.querySelector( '.mobile-categories .active' ).classList.remove( 'active' );
                    items[ i ].classList.add( 'active' );
                }
            }
        }
    }, [ router.query ] )

    useEffect( () => {
        router.events.on( 'routeChangeStart', closeMobileMenu );

        return () => {
            router.events.off( 'routeChangeStart', closeMobileMenu );
        }
    }, [] );

    function closeMobileMenu () {
        document.querySelector( "body" ).classList.remove( "mmenu-active" );

        if ( document.querySelector( ".menu-toggler" ) ) {
            document.querySelector( ".menu-toggler" ).classList.remove( "active" );
        }
    }

    function searchProducts ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: searchText
            }
        } );
    }

    function onChangeSearchText ( e ) {
        setSearchText( e.target.value );
    }

    return (
        <>
            <div className="mobile-menu-overlay" onClick={ closeMobileMenu }></div>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close" onClick={ closeMobileMenu }><i className="fa fa-times"></i></span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu mobile-categories">
                            <li>
                                <ALink href="/shop"><i className="fas fa-bars bg-primary mr-3"></i>Categories</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'women' } } }>Women</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'men' } } }>Men</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'girls' } } }>Girls</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'boys' } } }>Boys</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'baby' } } }>Baby</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>Shoes</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'jewelry' } } }>Jewelry</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'underwear' } } }>Underwear</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'new-arrivals' } } }>New Arrivals</ALink>
                            </li>
                            <li>
                                <ALink href={ { pathname: '/shop', query: { category: 'sale' } } }>Sale</ALink>
                            </li>
                        </ul>

                        <ul className="mobile-menu mt-2">
                            <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                            <li><ALink href="/pages/blog">Blog</ALink></li>
                            <li><ALink href="/pages/cart">Cart</ALink></li>
                            <li><ALink href="/pages/login">Log In</ALink></li>
                        </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#" onSubmit={ searchProducts }>
                        <input type="text" className="form-control mb-0" placeholder="Search..." required onChange={ onChangeSearchText } />
                        <button className="btn icon-search text-white bg-transparent p-0" type="submit"></button>
                    </form>

                    <div className="social-icons">
                        <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                        <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                        <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter( MobileMenu );
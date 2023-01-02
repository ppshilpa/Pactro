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
        router.events.on( 'routeChangeStart', closeMobileMenu );

        return () => {
            router.events.off( 'routeChangeStart', closeMobileMenu );
        }
    }, [] );

    useEffect( () => {
        if ( router.pathname === '/shop' && Object.entries( router.query ).length === 0 ) {
            document.querySelector( '.mobile-category-list .active' ) && document.querySelector( '.mobile-category-list .active' ).classList.remove( 'active' );
            document.querySelector( '.mobile-category-list li' ).classList.add( 'active' );
        } else {
            let items = document.querySelectorAll( '.mobile-category-list li' );
            for ( let i = 0; i < items.length; i++ ) {
                if ( items[ i ].querySelector( 'a' ).getAttribute( 'href' ).indexOf( router.query.category ) !== -1 ) {
                    document.querySelector( '.mobile-category-list .active' ) && document.querySelector( '.mobile-category-list .active' ).classList.remove( 'active' );
                    items[ i ].classList.add( 'active' );
                }
            }
        }
    }, [ router.query ] )

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
                        <ul className="mobile-menu mobile-category-list">
                            <li><ALink href={ { pathname: '/shop' } }><i className="fas fa-bars"></i>AllCategories</ALink></li>
                            <li ><ALink href={ { pathname: '/shop', query: { category: 'sound-and-video' } } }><i className="icon-category-sound-video size-big"></i>Sound
                                    &amp; Video</ALink></li>
                            <li><ALink href={ { pathname: '/shop', query: { category: 'lanterns-and-lighting' } } }><i className="icon-category-lanterns-lighting"></i>Lanterns
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
                                    Deals</ALink>
                            </li>
                        </ul>

                        <ul className="mobile-menu mt-2 mb-2">
                            <li className="border-0"><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!<span className="tip tip-hot">Hot</span></a></li>
                        </ul>

                        <ul className="mobile-menu">
                            <li><ALink href="/pages/login" className="login-link">Log In</ALink></li>
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
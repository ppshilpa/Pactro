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

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

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
                        <ul className="mobile-menu">
                            <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                                {
                                    <SlideToggle collapsed={ true }>
                                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                            <>
                                                <ALink href="/shop" className={ `${ toggleState.toLowerCase() }` }><i className="icon-joystick font-size-lg mr-2 pr-1"></i>Games<span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span></ALink>

                                                <ul ref={ setCollapsibleElement }>
                                                    <li>
                                                        <SlideToggle collapsed={ true }>
                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                <>
                                                                    <ALink href="#" className={ `${ toggleState.toLowerCase() }` }>VARIATION 1
                                                                    <span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span>
                                                                    </ALink>
                                                                    <ul ref={ setCollapsibleElement }>
                                                                        {
                                                                            mainMenu.shop.variation1.map( ( variations, index ) => (
                                                                                <li key={ "menu-item" + index }>
                                                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </>
                                                            ) }
                                                        </SlideToggle>
                                                    </li>

                                                    <li>
                                                        <SlideToggle collapsed={ true }>
                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                <>
                                                                    <ALink href="#" className={ `${ toggleState.toLowerCase() }` }>VARIATION 2
                                                                    <span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span>
                                                                    </ALink>
                                                                    <ul ref={ setCollapsibleElement }>
                                                                        {
                                                                            mainMenu.shop.variation2.map( ( variations, index ) => (
                                                                                <li key={ "menu-item" + index }>
                                                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </>
                                                            ) }
                                                        </SlideToggle>
                                                    </li>
                                                </ul>
                                            </>
                                        ) }
                                    </SlideToggle>
                                }
                            </li>

                            <li className={ pathname.startsWith( '/product' ) ? 'active' : '' }>
                                {
                                    <SlideToggle collapsed={ true }>
                                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                            <>
                                                <ALink href="/product/default/war-3" className={ `${ toggleState.toLowerCase() }` }><i className="icon-bars mr-2 pr-1"></i>Products<span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span></ALink>

                                                <ul ref={ setCollapsibleElement }>
                                                    <li>
                                                        <SlideToggle collapsed={ true }>
                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                <>
                                                                    <ALink href="#" className={ `${ toggleState.toLowerCase() }` }>PRODUCT PAGES
                                                                    <span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span>
                                                                    </ALink>
                                                                    <ul ref={ setCollapsibleElement }>
                                                                        {
                                                                            mainMenu.product.pages.map( ( variations, index ) => (
                                                                                <li key={ "menu-item" + index }>
                                                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </>
                                                            ) }
                                                        </SlideToggle>
                                                    </li>

                                                    <li>
                                                        <SlideToggle collapsed={ true }>
                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                <>
                                                                    <ALink href="#" className={ `${ toggleState.toLowerCase() }` }>PRODUCT LAYOUTS
                                                                    <span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span>
                                                                    </ALink>
                                                                    <ul ref={ setCollapsibleElement }>
                                                                        {
                                                                            mainMenu.product.layout.map( ( variations, index ) => (
                                                                                <li key={ "menu-item" + index }>
                                                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </>
                                                            ) }
                                                        </SlideToggle>
                                                    </li>
                                                </ul>
                                            </>
                                        ) }
                                    </SlideToggle>
                                }
                            </li>

                            <li><a href="https://1.envato.market/DdLk5" target="_blank"><i
                                className="icon-star-empty mr-2 pr-1"></i>Buy Porto</a></li>
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
import { withRouter } from 'next/router';

import { useEffect } from 'react';

// Import Custom Component
import ALink from "../ALink";

// Import Utils
import { mainMenu } from "../../../utils/data/menu";

function PopupMenu ( { router } ) {
    const pathname = router.pathname;

    useEffect( () => {
        router.events.on( 'routeChangeStart', closeMenu );

        return () => {
            router.events.off( 'routeChangeStart', closeMenu );
        }
    }, [] )

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    function closeMenu () {
        if ( document.querySelector( '.popup-menu' ) )
            document.querySelector( '.popup-menu' ).classList.remove( 'open' );
    }

    function submenuHandler ( e ) {
        e.preventDefault();
        e.currentTarget.nextSibling && e.currentTarget.nextSibling.classList.toggle( "open" );
    }

    return (
        <>
            <div className="popup-menu">
                <button title="Close (Esc)" type="button" className="mfp-close popup-menu-close" onClick={ ( e ) => closeMenu( e ) }></button>
                <nav>
                    <ul className="popup-menu-ul">
                        <li className={ pathname === '/' ? 'active' : '' }>
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                            <a href="#" className="sf-with-ul" onClick={ submenuHandler }>Categories</a>
                            <ul>
                                <li>
                                    <a href="#" onClick={ e => submenuHandler( e ) }>Variations 1<span className="tip tip-new">New!</span></a>
                                    <ul>
                                        {
                                            mainMenu.shop.variation1.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" onClick={ e => submenuHandler( e ) }>Variations 2</a>
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.variation2.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={ pathname.startsWith( '/product' ) ? 'active' : '' }>
                            <a href="#" className="sf-with-ul" onClick={ e => submenuHandler( e ) }>Products</a>
                            <ul>
                                <li>
                                    <a href="#" onClick={ e => submenuHandler( e ) }>PRODUCT PAGES</a>
                                    <ul>
                                        {
                                            mainMenu.product.pages.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" onClick={ e => submenuHandler( e ) }>Product Layout Types</a>
                                    <ul>
                                        {
                                            mainMenu.product.layout.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                        <li >
                                            <ALink href="#">BUILD YOUR OWN</ALink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={ isOtherPage() ? 'active' : '' }>
                            <a href="#" onClick={ e => submenuHandler( e ) }>Pages</a>
                            <ul>
                                {
                                    mainMenu.other.map( ( variations, index ) => (
                                        <li key={ "menu-item" + index }>
                                            <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </li>
                        <li>
                            <ALink href="https://1.envato.market/DdLk5" className="pl-15" target="_blank">Buy Porto!</ALink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default withRouter( PopupMenu );
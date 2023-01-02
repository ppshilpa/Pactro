import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SlideToggle from 'react-slide-toggle';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";

export default function Header ( { adClass = '' } ) {
    const router = useRouter();

    useEffect( () => {
        if ( router.pathname === '/' ) {
            window.addEventListener( 'scroll', activeHandler );

            return ( () => {
                let parentElement = window.innerWidth > 991 ? '.desktop-scrolling-box' : '.mobile-scrolling-box';
                document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
                window.removeEventListener( 'scroll', activeHandler );
            } )
        }
    }, [ router ] )

    function activeHandler () {
        let featureTop = document.querySelector( '#feature' ) && document.querySelector( '#feature' ).getBoundingClientRect().top + window.pageYOffset,
            tourTop = document.querySelector( '#tour' ) && document.querySelector( '#tour' ).getBoundingClientRect().top + window.pageYOffset,
            specificTop = document.querySelector( '#specific' ) && document.querySelector( '#specific' ).getBoundingClientRect().top + window.pageYOffset,
            testimonialTop = document.querySelector( '#testimonial' ) && document.querySelector( '#testimonial' ).getBoundingClientRect().top + window.pageYOffset,
            productTop = document.querySelector( '.product-section' ) && document.querySelector( '.product-section' ).getBoundingClientRect().top + window.pageYOffset,
            parentElement = window.innerWidth > 991 ? '.desktop-scrolling-box' : '.mobile-scrolling-box';

        if ( window.pageYOffset > 0 ) {
            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
            document.querySelector( parentElement + ' .intro' ) && document.querySelector( parentElement + ' .intro' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > featureTop - 59 ) {
            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
            document.querySelector( parentElement + ' .feature' ) && document.querySelector( parentElement + ' .feature' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > tourTop - 59 ) {
            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
            document.querySelector( parentElement + ' .tour' ) && document.querySelector( parentElement + ' .tour' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > specificTop - 59 ) {
            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
            document.querySelector( parentElement + ' .specific' ) && document.querySelector( parentElement + ' .specific' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > testimonialTop - 59 ) {
            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
            document.querySelector( parentElement + ' .testimonial' ) && document.querySelector( parentElement + ' .testimonial' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > productTop ) {
            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
        }
    }

    const onLinkClick = ( e ) => {
        if ( router.pathname === '/' ) {
            let parentElement = window.innerWidth > 991 ? '.desktop-scrolling-box' : '.mobile-scrolling-box';

            document.querySelector( parentElement + ' .active' ) && document.querySelector( parentElement + ' .active' ).classList.remove( 'active' );
            e.currentTarget.classList.add( "active" );
        } else {
            router.push( '/' );
        }
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            <img src="images/logo-black.png" className="black-logo" alt="Porto Logo" width="202" height="80" alt="Porto Logo" />
                        </ALink>

                        <ul className="header-links scrolling-box desktop-scrolling-box" id="caty-list">
                            {
                                router.pathname === '/' ?
                                    <>
                                        <li>
                                            <AnchorLink className="nav-link intro active" href="#intro" offset="0" onClick={ onLinkClick }>intro</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink className="nav-link feature" href="#feature" offset="0" onClick={ onLinkClick }>features</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink className="nav-link tour" href="#tour" offset="0" onClick={ onLinkClick }>tour</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink className="nav-link specific" href="#specific" offset="0" onClick={ onLinkClick }>specifications</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink className="nav-link testimonial" href="#testimonial" offset="0" onClick={ onLinkClick }>testimonials</AnchorLink>
                                        </li>
                                        <li>
                                            <a href="https://1.envato.market/DdLk5" className="nav-link" target="_blank">buy now</a>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <ALink className="nav-link intro" href="/#intro">intro</ALink>
                                        </li>
                                        <li>
                                            <ALink className="nav-link feature" href="/#feature">features</ALink>
                                        </li>
                                        <li>
                                            <ALink className="nav-link tour" href="/#tour">tour</ALink>
                                        </li>
                                        <li>
                                            <ALink className="nav-link specific" href="/#specific">specifications</ALink>
                                        </li>
                                        <li>
                                            <ALink className="nav-link testimonial" href="/#testimonial">testimonials</ALink>
                                        </li>
                                        <li>
                                            <a href="https://1.envato.market/DdLk5" className="nav-link" target="_blank">buy now</a>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>

                    <div className="header-right header-dropdowns">
                        <div className="header-dropdown">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown lang-menu">
                            <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <CartMenu />

                        {
                            <SlideToggle collapsed={ true }>
                                { ( { onToggle, setCollapsibleElement } ) => (
                                    <>
                                        <button type="button" className="mobile-btn text-white" onClick={ onToggle }>
                                            <i className="fas fa-bars"></i>
                                        </button>

                                        <div className="mobile-slide d-lg-none" ref={ setCollapsibleElement }>
                                            <ul className="mobile-body scrolling-box bg-white mobile-scrolling-box" id="widget-mobile">
                                                {
                                                    router.pathname === '/' ?
                                                        <>
                                                            <li>
                                                                <AnchorLink className="nav-link intro active" href="#intro" offset="0" onClick={ onLinkClick }>intro</AnchorLink>
                                                            </li>
                                                            <li>
                                                                <AnchorLink className="nav-link feature" href="#feature" offset="0" onClick={ onLinkClick }>features</AnchorLink>
                                                            </li>
                                                            <li>
                                                                <AnchorLink className="nav-link tour" href="#tour" offset="0" onClick={ onLinkClick }>tour</AnchorLink>
                                                            </li>
                                                            <li>
                                                                <AnchorLink className="nav-link specific" href="#specific" offset="0" onClick={ onLinkClick }>specifications</AnchorLink>
                                                            </li>
                                                            <li>
                                                                <AnchorLink className="nav-link testimonial" href="#testimonial" offset="0" onClick={ onLinkClick }>testimonials</AnchorLink>
                                                            </li>
                                                            <li>
                                                                <a href="https://1.envato.market/DdLk5" className="nav-link" target="_blank">buy now</a>
                                                            </li>
                                                        </>
                                                        :
                                                        <>
                                                            <li>
                                                                <ALink className="nav-link intro" href="/#intro">intro</ALink>
                                                            </li>
                                                            <li>
                                                                <ALink className="nav-link feature" href="/#feature">features</ALink>
                                                            </li>
                                                            <li>
                                                                <ALink className="nav-link tour" href="/#tour">tour</ALink>
                                                            </li>
                                                            <li>
                                                                <ALink className="nav-link specific" href="/#specific">specifications</ALink>
                                                            </li>
                                                            <li>
                                                                <ALink className="nav-link testimonial" href="/#testimonial">testimonials</ALink>
                                                            </li>
                                                            <li>
                                                                <a href="https://1.envato.market/DdLk5" className="nav-link" target="_blank">buy now</a>
                                                            </li>
                                                        </>
                                                }
                                                <li>
                                                    {
                                                        <SlideToggle collapsed={ true }>
                                                            {
                                                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                    <>
                                                                        <a href="#widget-link-1" onClick={ onToggle }>Links<span className={ `toggle ${ toggleState.toLowerCase() }` }></span></a>

                                                                        <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                                            <ul className="sub-link">
                                                                                <li>
                                                                                    <a href="https://1.envato.market/DdLk5"  target="_blank">buy now</a>
                                                                                </li>
                                                                                <li>
                                                                                    <ALink href="#">Help Center</ALink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </SlideToggle>
                                                    }
                                                </li>

                                                <li>
                                                    {
                                                        <SlideToggle collapsed={ true }>
                                                            {
                                                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                    <>
                                                                        <a href="#widget-link-1" onClick={ onToggle }>USD<span className={ `toggle ${ toggleState.toLowerCase() }` }></span></a>

                                                                        <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                                            <ul className="sub-link">
                                                                                <li>
                                                                                    <ALink href="#">EUR</ALink>
                                                                                </li>
                                                                                <li>
                                                                                    <ALink href="#">USD</ALink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </SlideToggle>
                                                    }
                                                </li>

                                                <li>
                                                    {
                                                        <SlideToggle collapsed={ true }>
                                                            {
                                                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                    <>
                                                                        <a href="#widget-link-1" onClick={ onToggle }>ENG<span className={ `toggle ${ toggleState.toLowerCase() }` }></span></a>

                                                                        <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                                            <ul className="sub-link">
                                                                                <li>
                                                                                    <ALink href="#">
                                                                                        <i className="flag-us flag mr-2"></i>ENG</ALink>
                                                                                </li>
                                                                                <li>
                                                                                    <ALink href="#">
                                                                                        <i className="flag-fr flag mr-2"></i>ENG</ALink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </SlideToggle>
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ) }
                            </SlideToggle>
                        }
                    </div>
                </div>
            </div>
        </header >
    )
}
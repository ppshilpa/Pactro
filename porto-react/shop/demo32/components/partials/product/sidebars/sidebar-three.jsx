import React, { useEffect } from 'react';
import SlideToggle from 'react-slide-toggle';
import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Aollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ALink from '../../../common/ALink';


function ProductSidebarThree ( props ) {
    const { adClass = "" } = props;
    const { loading } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { featured: true } } );

    useEffect( () => {
        return () => {
            closeSidebar();
        }
    }, [] )

    function sidebarToggle ( e ) {
        let body = document.querySelector( 'body' );

        e.preventDefault();
        if ( body.classList.contains( 'sidebar-opened' ) ) {
            body.classList.remove( 'sidebar-opened' );

        } else {
            body.classList.add( 'sidebar-opened' );
        }
    }

    function closeSidebar () {
        document.querySelector( 'body' ).classList.contains( 'sidebar-opened' ) && document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
    }

    return (
        <>
            {
                useRouter().pathname.indexOf( '/shop' ) === -1 &&
                <>
                    <div className="sidebar-overlay" onClick={ closeSidebar }></div>
                    <div className="sidebar-toggle custom-sidebar-toggle" onClick={ e => sidebarToggle( e ) }><i className="fas fa-sliders-h"></i></div>
                </>
            }
            <aside className={ `sidebar-product d-block skeleton-body skel-shop-products h-100 ${ adClass } ${ loading ? '' : 'loaded' }` }>
                <StickyBox className="sticky-wrapper" offsetTop={ 70 }>
                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget">
                                <SlideToggle>
                                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a href="#" onClick={ ( e ) => { e.preventDefault(), onToggle() } } className={ toggleState === 'COLLAPSED' ? 'collapsed' : '' }>Custom HTML Block</a>
                                            </h3>
                                            <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                <div className="widget-body">
                                                    <h4 className="widget-subtitle">This is a custom sub-title.</h4>

                                                    <p className="mb-4 ls-0">Lorem ipsum dolor sit amet, con sec tetur elitad.</p>
                                                </div>
                                            </div>
                                        </>
                                    ) }
                                </SlideToggle>
                            </div>
                    }

                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget widget-banner pb-2">
                                <div className="product-category media-with-lazy">
                                    <ALink href="/shop">
                                        <figure>
                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-sidebar.jpg"
                                                threshold={ 500 }
                                                effect="blur"
                                                width="100%"
                                                height="auto"
                                            />
                                        </figure>

                                        <div className="category-content content-right p-0">
                                            <h3>Sport<br />Shoes</h3>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                    }
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductSidebarThree );
import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { useQuery } from '@apollo/react-hooks';

// Import Aollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ALink from '../../../common/ALink';
import ProductThree from '../../../features/products/product-three';
import OwlCarousel from '../../../features/owl-carousel';

// Import Settings
import { widgetFeaturedProductSlider } from '../../../../utils/data/slider';

function ProductSidebarThree ( props ) {
    const { adClass = "" } = props;
    const { data, loading, error } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { demo: 4, featured: true } } );

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
            <div className="sidebar-overlay" onClick={ closeSidebar }></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={ e => sidebarToggle( e ) }><i className="fas fa-sliders-h"></i></div>
            <aside className={ `sidebar-product custom-sidebar-product col-lg-3 mobile-sidebar skeleton-body skel-shop-products ${adClass} ${loading ? '' : 'loaded'}` }>
                <StickyBox className="sticky-wrapper" offsetTop={ 90 }>
                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget widget-info">
                                <h3 className="widget-title m-b-3">AUTHOR</h3>

                                <div className="widget-body bg-gray">
                                    <h4 className="font2 text-dark line-height-1 m-b-1">Wendy Walker</h4>
                                    <p className="font2 font-weight-normal line-height-1 ls-0 text-uppercase">12
                                            Books</p>
                                    <ALink href="/shop" className="d-inline-block text-uppercase">View All
                                            Books</ALink>
                                </div>
                            </div>
                    }

                    <div className="widget widget-featured">
                        <h3 className="widget-title m-b-3">FEATURED BOOKS</h3>

                        <div className="widget-body p-0">
                            <OwlCarousel adClass="widget-featured-products" isTheme={ false } options={ widgetFeaturedProductSlider }>
                                <div className="featured-col">
                                    {
                                        loading ?
                                            [ 0, 1, 2 ].map( ( item, index ) =>
                                                <div className="skel-product-col skel-pro mb-2" key={ "product-one" + index }></div>
                                            )
                                            :
                                            data.shopSidebarData.featured.map( ( item, index ) => (
                                                <ProductThree
                                                    product={ item }
                                                    key={ "product-three" + index }
                                                />
                                            ) )
                                    }
                                </div>

                                <div className="featured-col">
                                    { data && data.shopSidebarData.featured.map( ( item, index ) => (
                                        <ProductThree product={ item } key={ `featured-${index}` } />
                                    ) ) }
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget widget-custom">
                                <h3 className="widget-title m-b-1">CUSTOM HTML BLOCK</h3>

                                <div className="widget-body p-0">
                                    <h4 className="mb-2">This is a custom sub-title.</h4>
                                    <p className="font2 text-dark mb-0">Lorem ipsum dolor sit amet, consectetur elitad
                            adipiscing Cras non placerat mi.</p>
                                </div>
                            </div>
                    }

                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="sidebar-banner d-flex justify-content-end mb-4" style={ { backgroundImage: 'url(images/home/banners/banner-sidebar.jpg)', backgroundColor: '#343339' } }>
                                <div className="banner-layer">
                                    <h3 className="line-height-1 text-uppercase text-white m-b-1">Award Winners</h3>
                                    <p className="font2 line-height-1 mb-2">12 Books</p>
                                    <ALink href="/shop" className="btn btn-primary">View Collections
                                        <i className="fas fa-long-arrow-alt-right"></i>
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
import SlideToggle from 'react-slide-toggle';
import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Aollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ProductThree from '../../../features/products/product-three';

// Import Settings
import ALink from '../../../common/ALink';

function ProductSidebarThree ( props ) {
    const { adClass = "" } = props;
    const { data, loading, error } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { demo: 4, featured: true } } );

    if ( error ) {
        return <div>{ error.message }</div>
    }

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
            <aside className={ `sidebar-product custom-sidebar-product col-lg-3 padding-left-lg mobile-sidebar ${ adClass }` }>
                <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={ 70 }>
                    <div className="widget">
                        <h3 className="widget-title">Featured Products</h3>

                        <div className="widget-body">
                            <div className="product-intro">
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
                        </div>
                    </div>

                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget widget-block ">
                                <SlideToggle>
                                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a href="#" onClick={ ( e ) => { e.preventDefault(), onToggle() } } className={ toggleState === 'COLLAPSED' ? 'collapsed' : '' }>Custom HTML Block</a>
                                            </h3>
                                            <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                <div className="widget-body">
                                                    <h4 className="widget-subtitle">This is a custom sub-title.</h4>

                                                    <p className="font2 ls-0">Lorem ipsum dolor ist amet, consec tetur elitad adipiscing Cras non placerat mi.</p>
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
                            <div className="widget">
                                <div className="home-banner2 text-center">
                                    <h3 className="mb-0">Flash Sale Running!</h3>
                                    <div className="banner-content">
                                        <div className="product-panel">
                                            <div className="product-default mt-0">
                                                <figure>
                                                    <ALink href="/product/default/teddy-bear-blue">
                                                        <LazyLoadImage
                                                            alt="product"
                                                            src="images/home/products/400x400/product-1.jpg"
                                                            threshold={ 500 }
                                                            effect="black and white"
                                                            width="100%"
                                                            height="auto"
                                                        />
                                                    </ALink>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <ALink href="/product/default/teddy-bear-blue">Teddy Bear Blue</ALink>
                                                    </h2>
                                                    <div className="price-box">
                                                        <span className="old-price">$59.00</span>
                                                        <span className="product-price">$49.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <ALink href="/shop" className="btn text-white">SHOP SALE NOW</ALink>
                                    </div>
                                </div>
                            </div>
                    }
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductSidebarThree );
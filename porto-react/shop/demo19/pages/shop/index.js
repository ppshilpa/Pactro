import { useState, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../components/common/ALink';
import ShopBanner from '../../components/partials/shop/shop-banner';
import ShopSidebarOne from '../../components/partials/shop/sidebar/shop-sidebar-one';
import ProductsGrid from '../../components/partials/products-collection/product-grid';

import { GET_PRODUCTS } from '../../server/queries';
import withApollo from '../../server/apollo';
import ShopSidebarThree from '../../components/partials/shop/sidebar/shop-sidebar-three';

function Shop () {
    const router = useRouter();
    const query = router.query;
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const [ loadMoreProducts, { data: newData } ] = useLazyQuery( GET_PRODUCTS, { fetchPolicy: 'no-cache' } );
    const [ sortBy, setSortBy ] = useState( query.sortBy ? query.sortBy : 'default' );
    const [ products, setProducts ] = useState( [] );
    // const []
    const total = data && data.products.total;

    useEffect( () => {
        let offset = document.querySelector( '.main-content' ).getBoundingClientRect().top + window.pageYOffset - 58;

        setTimeout( () => {
            window.scrollTo( { top: offset, behavior: 'smooth' } );
        }, 200 );

        getProducts( {
            variables: {
                search: query.search,
                colors: query.colors ? query.colors.split( ',' ) : [],
                sizes: query.sizes ? query.sizes.split( ',' ) : [],
                min_price: parseInt( query.min_price ),
                max_price: parseInt( query.max_price ),
                category: query.category,
                tag: query.tag,
                sortBy: sortBy,
                from: 0,
                to: Math.max( products ? products.length : 0, 15 )
            }
        } );
    }, [ query, sortBy ] )

    useLayoutEffect( () => {
        data && setProducts( data.products.data );
    }, [ data ] )

    useEffect( () => {
        let newProducts = newData ? newData.products.data : [];
        setProducts( [ ...products, ...newProducts ] );
    }, [ newData ] )

    function onSortByChange ( e ) {
        router.push( {
            pathname: router.pathname,
            query: {
                ...query,
                sortBy: e.target.value,
                page: 1
            }
        } )
        setSortBy( e.target.value );
    }

    function sidebarToggle ( e ) {
        let body = document.querySelector( 'body' );
        e.preventDefault();
        if ( body.classList.contains( 'sidebar-opened' ) ) {
            body.classList.remove( 'sidebar-opened' );
        } else {
            body.classList.add( 'sidebar-opened' );
        }
    }

    function onLoadMoreProducts ( e ) {
        e.preventDefault();

        loadMoreProducts( {
            variables: {
                from: products.length,
                to: products.length + 5
            }
        } )
    }

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <main className="main">
            <div className="container-fluid">

                {
                    query && query.category == "electronics-and-computers" ?
                        <div className="category-description">
                            <div className="row">
                                <div className="col-lg-6 mb-lg-0 mb-2">
                                    <div className="banner banner3" style={ { backgroundColor: '#f4f4f4' } }>
                                        <figure>
                                            <LazyLoadImage
                                                alt="Banner"
                                                src="images/home/banners/banner-3.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </figure>
                                        <div
                                            className="banner-layer banner-layer-middle row align-items-center flex-md-nowrap">
                                            <div className="col-auto offset-4">
                                                <div className="coupon-sale-text">
                                                    <h4 className="m-b-2 font1 d-block text-white bg-dark">Exclusive
                                                COUPON</h4>
                                                    <h5 className="mb-0 font1 d-inline-block bg-dark"><i
                                                        className="text-dark ls-0">UP TO</i><b
                                                            className="text-white">$100</b><sub
                                                                className="text-dark">OFF</sub></h5>
                                                </div>
                                            </div>
                                            <div className="col-md-4 offset-md-0 offset-4">
                                                <h3 className="font1 ls-10 text-md-center text-uppercase mb-0">Drone
                                            &amp; Cameras</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner banner4" style={ { backgroundColor: '#242527' } }>
                                        <figure>
                                            <LazyLoadImage
                                                alt="Banner"
                                                src="images/home/banners/banner-4.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle row align-items-center">
                                            <div className="col-md-4 col-md-4 offset-4">
                                                <h3
                                                    className="ls-10 text-uppercase text-white text-md-center m-b-2 mb-lg-0">
                                                    Electronic Deals</h3>
                                            </div>
                                            <div className="col-auto offset-md-0 offset-4">
                                                <div className="coupon-sale-text">
                                                    <h4 className="m-b-2 font1 d-block text-dark bg-white">Exclusive
                                                COUPON</h4>
                                                    <h5 className="mb-0 font1 d-inline-block"><i
                                                        className="text-white ls-0">UP TO</i><b
                                                            className="text-dark">$100</b><sub
                                                                className="text-white">OFF</sub></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        query && query.category == "fashion-and-clothes" ?
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6 mb-lg-0 mb-2">
                                        <div className="banner banner1" style={ { backgroundColor: '#6db2d9' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-1.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                                <h5 className="m-b-2">Find the Boundaries. Push Through!</h5>
                                                <h3 className="text-white mb-0">Summer Sale</h3>
                                                <h4 className="text-uppercase text-white mb-0">30% off</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner banner2" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-2.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-center text-center">
                                                <h3 className="text-uppercase ls-10 m-b-1">Deal Promos</h3>
                                                <h5 className="text-body text-uppercase mb-0">Starting at $99</h5>
                                            </div>
                                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                                <h6 className="bg-dark text-white text-center mb-0">
                                                    50<small><sup>%</sup><sub>off</sub></small></h6>
                                            </div>
                                            <div className="banner-layer banner-layer-right banner-layer-top">
                                                <h6 className="bg-dark text-white text-center mb-0">
                                                    30<small><sup>%</sup><sub>off</sub></small></h6>
                                            </div>
                                            <div className="banner-layer banner-layer-right banner-layer-bottom">
                                                <h6 className="bg-dark text-white text-center mb-0">
                                                    70<small><sup>%</sup><sub>off</sub></small></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            query && query.category == "gifts-and-gadgets" ?
                                <div className="category-description">
                                    <div className="row">
                                        <div className="col-lg-6 mb-lg-0 mb-2">
                                            <div className="banner banner11" style={ { backgroundColor: '#f4f4f4' } }>
                                                <figure>
                                                    <LazyLoadImage
                                                        alt="Banner"
                                                        src="images/home/banners/banner-10.jpg"
                                                        threshold={ 500 }
                                                        effect="black and white"
                                                        width="100%"
                                                        height="auto"
                                                    />
                                                </figure>
                                                <div className="banner-layer banner-layer-middle banner-layer-right">
                                                    <h3 className="text-uppercase text-right ls-10 mb-0">
                                                        Top Electronic<br />For Gifts
                                            </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="banner banner12" style={ { backgroundColor: '#f4f4f4' } }>
                                                <figure>
                                                    <LazyLoadImage
                                                        alt="Banner"
                                                        src="images/home/banners/banner-11.jpg"
                                                        threshold={ 500 }
                                                        effect="black and white"
                                                        width="100%"
                                                        height="auto"
                                                    />
                                                </figure>

                                                <div className="banner-layer banner-layer-middle">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <h2 className="line-height-1 m-b-2">Outlet Selected Items</h2>
                                                            <h4 className="text-white ls-0 mb-0"><b>BIG SALE UP TO</b></h4>
                                                        </div>

                                                        <div className="col-auto">
                                                            <h3 className="text-white mb-0">80%<small
                                                                className="d-inline-block text-center"><b>OFF</b></small>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                query && query.category == "home-and-garden" ?
                                    <div className="category-description">
                                        <div className="row">
                                            <div className="col-lg-6 mb-2 mb-lg-0 d-flex">
                                                <div className="banner banner7 m-b-4" style={ { backgroundColor: '#f4f4f4' } }>
                                                    <figure>
                                                        <LazyLoadImage
                                                            alt="Banner"
                                                            src="images/home/banners/banner-7.jpg"
                                                            threshold={ 500 }
                                                            effect="black and white"
                                                            width="100%"
                                                            height="auto"
                                                        />
                                                    </figure>
                                                    <div
                                                        className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                                        <div className="content-left text-center">
                                                            <h5 className="heading-border text-dark text-uppercase m-b-1">Amazing
                                                    </h5>
                                                            <h3 className="font1 ls-n-10 text-uppercase m-b-2">Collection</h3>
                                                            <hr className="m-b-2 mt-0" />
                                                            <h5 className="text-uppercase mb-0">Check our discounts</h5>
                                                        </div>
                                                        <div className="content-right text-center">
                                                            <h4 className="text-uppercase ls-n-20 m-b-2">Starting AT
                                                        <sup>$</sup>199<sup>99</sup></h4>
                                                            <h6 className="text-body text-uppercase mb-0">* limited time only</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div
                                                    className="banner banner8 d-flex align-items-center justify-content-center m-b-4">
                                                    <div
                                                        className="row no-gutters banner-layer position-static justify-content-center align-items-center m-t-3 px-3">
                                                        <div
                                                            className="col-auto d-flex flex-column justify-content-center text-center">
                                                            <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden
                                                    </h4>
                                                            <h3 className="text-white m-b-3 align-left text-uppercase">Huge Sale
                                                    </h3>
                                                        </div>

                                                        <div className="col-auto">
                                                            <h2 className="text-white m-b-3 position-relative align-left">
                                                                50<small>%<ins>OFF</ins></small>
                                                            </h2>
                                                        </div>

                                                        <div className="col-auto">
                                                            <ALink href="/shop" className="btn m-b-3 ls-10">Shop Now!</ALink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    query && query.category == "home-and-garden" ?
                                        <div className="category-description">
                                            <div className="row">
                                                <div className="col-lg-6 mb-lg-0 mb-2">
                                                    <div className="banner banner9" style={ { backgroundColor: '#22252a' } }>
                                                        <figure>
                                                            <LazyLoadImage
                                                                alt="Banner"
                                                                src="images/home/banners/banner-8.jpg"
                                                                threshold={ 500 }
                                                                effect="black and white"
                                                                width="100%"
                                                                height="auto"
                                                            />
                                                        </figure>
                                                        <div
                                                            className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                                            <div className="content-left coupon-sale-text">
                                                                <h5 className="mb-0 font1 d-inline-block ls-10 text-white"><i
                                                                    className="ls-0">UP TO</i><b>50%</b><sub>OFF</sub></h5>
                                                            </div>
                                                            <div className="content-right">
                                                                <h4 className="font1 text-uppercase m-b-1">Flash Sales On</h4>
                                                                <h3 className="font1 text-white text-uppercase mb-0">Nice Shoes</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="banner banner10" style={ { backgroundColor: '#f4f4f4' } }>
                                                        <figure>
                                                            <LazyLoadImage
                                                                alt="Banner"
                                                                src="images/home/banners/banner-9.jpg"
                                                                threshold={ 500 }
                                                                effect="black and white"
                                                                width="100%"
                                                                height="auto"
                                                            />
                                                        </figure>
                                                        <div
                                                            className="banner-layer banner-layer-middle row no-gutters d-flex align-items-center justify-content-between justify-content-lg-start flex-nowrap overflow-hidden m-0">
                                                            <div className="col-auto col-lg-4 text-right ml-4 ml-lg-0">
                                                                <h6 className="font1 text-uppercase text-body m-b-1">Feel like a player
                                                        </h6>
                                                                <h3 className="font1 text-uppercase ls-n-25 mb-0">Football</h3>
                                                            </div>
                                                            <div className="col-auto coupon-sale-text offset-lg-4 mr-4 mr-lg-0">
                                                                <h4 className="m-b-2 font1 d-block ls-10 text-white bg-dark">Exclusive
                                                            COUPON</h4>
                                                                <h5 className="mb-0 font1 d-inline-block ls-10 bg-dark"><i
                                                                    className="text-dark ls-0">UP TO</i><b
                                                                        className="text-white">100%</b><sub className="text-dark">OFF</sub>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        query && query.category == "toys-and-games" ?
                                            <div className="category-description">
                                                <div className="row">
                                                    <div className="col-lg-6 mb-lg-0 mb-2">
                                                        <div className="banner banner5" style={ { backgroundColor: '#292929' } }>
                                                            <figure>
                                                                <LazyLoadImage
                                                                    alt="Banner"
                                                                    src="images/home/banners/banner-5.jpg"
                                                                    threshold={ 500 }
                                                                    effect="black and white"
                                                                    width="100%"
                                                                    height="auto"
                                                                />
                                                            </figure>
                                                            <div
                                                                className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                                                <div className="content-left">
                                                                    <h5 className="font1 text-uppercase m-b-1">Be a Kendo Warrior</h5>
                                                                    <h3 className="font1 text-white text-uppercase ls-n-20 mb-0">ProWarrior
                                                                    </h3>
                                                                </div>
                                                                <div className="content-right">
                                                                    <h4 className="font1 mb-0 text-white">
                                                                        <del>$59</del>
                                                        $29
                                                                </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="banner banner6" style={ { backgroundColor: '#f4f4f4' } }>
                                                            <figure>
                                                                <LazyLoadImage
                                                                    alt="Banner"
                                                                    src="images/home/banners/banner-6.jpg"
                                                                    threshold={ 500 }
                                                                    effect="black and white"
                                                                    width="100%"
                                                                    height="auto"
                                                                />
                                                            </figure>
                                                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                                                <h3 className="m-b-1">Consoles &amp; Games</h3>
                                                                <h4 className="mb-0">50% OFF</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <ShopBanner />
                }


                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-0">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/"><i className="icon-home"></i></ALink></li>
                        {
                            query.category ?
                                <>
                                    <li className="breadcrumb-item"><ALink href={ { query: {} } } scroll={ false }>shop</ALink></li>
                                    {
                                        data && data.products.categoryFamily.map( ( item, index ) => (
                                            <li className="breadcrumb-item" key={ `category-family-${index}` }><ALink href={ { query: { category: item.slug } } } scroll={ false }>{ item.name }</ALink></li>
                                        ) )
                                    }
                                    <li className="breadcrumb-item active">
                                        {
                                            query.search ?
                                                <>
                                                    Search - <ALink href={ { query: { category: query.category } } } scroll={ false }>{ query.category }</ALink> / { query.search }
                                                </>
                                                : query.category
                                        }
                                    </li>
                                </>
                                : query.search ?
                                    <>
                                        <li className="breadcrumb-item"><ALink href={ { query: {} } } scroll={ false }>Shop</ALink></li>
                                        <li className="breadcrumb-item active" aria-current="page">{ `Search - ${query.search}` }</li>
                                    </>
                                    : query.tag ?
                                        <>
                                            <li className="breadcrumb-item"><ALink href={ { query: {} } } scroll={ false }>Shop</ALink></li>
                                            <li className="breadcrumb-item active" aria-current="page">{ `Product Tag - ${query.tag}` }</li>
                                        </>
                                        : <li className="breadcrumb-item active" aria-current="page">Shop</li>
                        }
                    </ol>
                </nav>
            </div>

            <div className="main-container mt-3">
                <div className="container-fluid">
                    <ShopSidebarThree adClass="mb-2 mb-md-0" />

                    <div className="row">
                        <div className="col-lg-9 main-content">
                            <nav className="toolbox sticky-header mobile-sticky">
                                <div className="toolbox-left">
                                    <a href="#" className="sidebar-toggle" onClick={ e => sidebarToggle( e ) }>
                                        <svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <line x1="15" x2="26" y1="9" y2="9" className="cls-1"></line>
                                            <line x1="6" x2="9" y1="9" y2="9" className="cls-1"></line>
                                            <line x1="23" x2="26" y1="16" y2="16" className="cls-1"></line>
                                            <line x1="6" x2="17" y1="16" y2="16" className="cls-1"></line>
                                            <line x1="17" x2="26" y1="23" y2="23" className="cls-1"></line>
                                            <line x1="6" x2="11" y1="23" y2="23" className="cls-1"></line>
                                            <path
                                                d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                                                className="cls-2"></path>
                                            <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" className="cls-2"></path>
                                            <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3"></path>
                                            <path
                                                d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                                                className="cls-2"></path>
                                        </svg>
                                        <span>Filter</span>
                                    </a>

                                    <div className="toolbox-item toolbox-sort">
                                        <label>Sort By:</label>

                                        <div className="select-custom">
                                            <select name="orderby" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                                <option value="default">Default sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">Sort by average rating</option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">Sort by price: high to low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="toolbox-right">
                                    <div className="toolbox-item layout-modes">
                                        <ALink href={ { pathname: router.pathname, query: query } } className="layout-btn btn-grid active" title="Grid">
                                            <i className="icon-mode-grid"></i>
                                        </ALink>
                                        <ALink href={ { pathname: '/shop/list', query: query } } className="layout-btn btn-list" title="List">
                                            <i className="icon-mode-list"></i>
                                        </ALink>
                                    </div>
                                </div>
                            </nav>

                            <ProductsGrid adClass="product-ajax-grid" products={ products } loading={ loading } perPage={ 15 } />

                            {
                                total && products.length < total ?
                                    <div className="product-more-container d-flex justify-content-center">
                                        <a href="#" className="btn loadmore" onClick={ onLoadMoreProducts }>Load More...</a>
                                    </div>
                                    :
                                    ''
                            }
                        </div>

                        <ShopSidebarOne />
                    </div>
                </div>
            </div>

            <div className="mb-4"></div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Shop );
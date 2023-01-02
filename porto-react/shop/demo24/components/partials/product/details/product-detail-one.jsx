import SlideToggle from 'react-slide-toggle';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as WishlistAction } from "../../../../store/wishlist";
import { actions as CartAction } from "../../../../store/cart";

// Import Custom Component
import ProductNav from '../product-nav';
import Qty from '../qty';
import ALink from '../../../common/ALink';
import ProductCountdown from '../../../features/product-countdown';

function ProductDetailSix ( props ) {
    const router = useRouter();
    const { product, adClass = "col-lg-5 col-md-6", prev, next, isNav = true, parent = ".product-single-default", isSticky = false } = props;
    const [ radio, setRadio ] = useState( -1 );
    const [ qty, setQty ] = useState( 1 );

    useEffect( () => {
        if ( product ) {
            initState();
        }
    }, [ product ] )

    useEffect( () => {
        if ( product ) {
            let variationToggle = document.querySelector( `${ parent } .variation-toggle` );
            let licenseToggle = document.querySelector( `${ parent } .license-info` );

            if ( radio > -1 ) {
                document.querySelector( `${ parent } .shopping-cart` ) && document.querySelector( `${ parent } .shopping-cart` ).classList.remove( 'disabled' );
                document.querySelector( `${ parent } .sticky-cart .add-cart` ) && document.querySelector( `${ parent } .sticky-cart .add-cart` ).classList.remove( 'disabled' );
                variationToggle && !variationToggle.classList.contains( 'expanded' ) && variationToggle.click();
            } else {
                document.querySelector( `${ parent } .shopping-cart` ) && document.querySelector( `${ parent } .shopping-cart` ).classList.add( 'disabled' );
                document.querySelector( `${ parent } .sticky-cart .add-cart` ) && document.querySelector( `${ parent } .sticky-cart .add-cart` ).classList.add( 'disabled' );
                variationToggle && !variationToggle.classList.contains( 'collapsed' ) && variationToggle.click();
                licenseToggle && !licenseToggle.classList.contains( 'collapsed' ) && licenseToggle.click();
            }
        }
    }, [ radio ] )

    function isInWishlist () {
        return product && props.wishlist.findIndex( item => item.slug === product.slug ) > -1;
    }

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist() ) {
            let target = e.currentTarget;
            target.classList.add( "load-more-overlay" );
            target.classList.add( "loading" );

            setTimeout( () => {
                target.classList.remove( 'load-more-overlay' );
                target.classList.remove( 'loading' );
                props.addToWishList( product );
            }, 1000 );
        } else {
            router.push( '/pages/wishlist' );
        }
    }

    function onAddCartClick ( e ) {
        e.preventDefault();

        if ( product.stock > 0 && !e.currentTarget.classList.contains( 'disabled' ) ) {
            props.addToCart( product, qty, radio );
        }
    }

    function changeQty ( value ) {
        setQty( value );
    }

    function initState () {
        setRadio( -1 );
        setQty( 1 );
        document.querySelector( '.product-filters-container li.active' ) && document.querySelector( '.product-filters-container li.active' ).classList.remove( 'active' );
    }

    function clearVariation ( e ) {
        initState();
        e.preventDefault();
    }

    function radioClick ( e, index ) {
        e.preventDefault();

        if ( e.currentTarget.classList.contains( 'active' ) ) {
            e.currentTarget.classList.remove( 'active' );
        } else {
            document.querySelector( `${ parent } .product-single-filter .active` ) && document.querySelector( `${ parent } .product-single-filter .active` ).classList.remove( 'active' );
            e.currentTarget.classList.add( 'active' );
        }

        setRadio( index === radio ? -1 : index );
    }

    return (
        <>
            <div className={ `skel-pro skel-detail ${ adClass }` }></div>
            {
                product &&
                <div className={ `product-single-details ${ adClass }` }>
                    <h1 className="product-title">{ product.name }</h1>

                    {
                        isNav ?
                            <ProductNav prev={ prev } next={ next } />
                            : ""
                    }

                    <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={ { width: `${ 20 * product.ratings }%` } }></span>
                            <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                        </div>

                        <ALink href="#" className="rating-link">( { product.reviews > 0 ? `${ product.reviews } Reviews` : 'There are no reviews yet.' } )</ALink>
                    </div>

                    <div className="price-box">
                        {
                            product.price[ 0 ] == product.price[ 1 ] ?
                                <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                : product.variants.length > 0 ?
                                    <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) } &ndash; { '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                    : <>
                                        <span className="old-price">{ '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                        <span className="new-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                    </>
                        }
                    </div>

                    {
                        product.until && product.until !== null &&
                        <ProductCountdown type="1" />
                    }

                    <div className="product-desc">
                        <p>{ product.short_description }</p>
                    </div>

                    <ul className="single-info-list">
                        {
                            product.sku ?
                                <li>
                                    SKU: <strong>{ product.sku }</strong>
                                </li>
                                : ''
                        }

                        <li>
                            CATEGORY: { product.categories.map( ( item, index ) =>
                            (
                                <React.Fragment key={ `single-cat-${ index }` }>
                                    <strong>
                                        <ALink href={ { pathname: '/shop', query: { category: item.slug } } } className="category">{ item.name }</ALink>
                                    </strong>
                                    { index < product.categories.length - 1 ? ', ' : '' }
                                </React.Fragment>
                            ) )
                            }
                        </li>

                        {
                            !product.tags == null && product.tags.length > 0 ?
                                <li>
                                    TAGs: { product.tags.map( ( item, index ) =>
                                    (
                                        <React.Fragment key={ `single-cat-${ index }` }>
                                            <strong>
                                                <ALink href={ { pathname: '/shop', query: { tag: item.slug } } } className="category">{ item.name }</ALink>
                                            </strong>
                                            { index < product.tags.length - 1 ? ', ' : '' }
                                        </React.Fragment>
                                    ) )
                                    }
                                </li>
                                : ''
                        }
                    </ul>

                    <div className="product-filters-container">

                        {
                            <SlideToggle collapsed={ true }>
                                { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                    <>
                                        <div className="product-single-filter d-flex align-items-center">
                                            <label>License:</label>
                                            <ul className="config-size-list">
                                                <li onClick={ e => radioClick( e, 0 ) }>
                                                    <a href="#" className="d-flex align-items-center justify-content-center">Regular</a>
                                                </li>

                                                <li onClick={ e => radioClick( e, 1 ) }>
                                                    <a href="#" className="d-flex align-items-center justify-content-center">Extended</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <button className={ `d-none variation-toggle ${ toggleState.toLowerCase() }` } onClick={ onToggle }></button>

                                        <div className="product-single-filter" ref={ setCollapsibleElement }>
                                            {
                                                <SlideToggle collapsed={ true }>
                                                    { ( { onToggle, setCollapsibleElement } ) => (
                                                        <>
                                                            <a href="#read-more" className={ `license-info text-body d-block` } onClick={ e => { e.preventDefault(); onToggle(); } }>
                                                                <i className="fas fa-exclamation-circle"></i>
                                                                <i>Read More About License</i>
                                                            </a>

                                                            <div ref={ setCollapsibleElement } className="overflow-hidden">
                                                                <p id="read-more" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </div>
                                                        </>
                                                    ) }
                                                </SlideToggle>
                                            }

                                            <a className="font1 text-uppercase clear-btn ml-0" href="#" onClick={ clearVariation }>Clear</a>
                                        </div>
                                    </>
                                ) }
                            </SlideToggle>
                        }
                    </div>

                    {
                        isSticky &&
                        <div className="sticky-wrapper">
                            <div className="sticky-header desktop-sticky sticky-cart d-none d-lg-block">
                                <div className="container">
                                    <div className="sticky-img mr-4 media-with-lazy">
                                        <figure className="mb-0">
                                            <LazyLoadImage
                                                src={ process.env.NEXT_PUBLIC_ASSET_URI + product.small_pictures[ 0 ].url }
                                                width="100%"
                                                height="auto"
                                                alt="Thumbnail"
                                            />
                                        </figure>
                                    </div>
                                    <div className="sticky-detail">
                                        <div className="sticky-product-name">
                                            <h2 className="product-title w-100 ls-0">{ product.name }</h2>
                                            <div className="price-box">
                                                {
                                                    product.price[ 0 ] == product.price[ 1 ] ?
                                                        <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                                        :
                                                        <>
                                                            <span className="old-price">{ '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                                            <span className="new-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                                        </>
                                                }
                                            </div>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={ { width: `${ 20 * product.ratings }%` } }></span>
                                                <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                                            </div>

                                            <ALink href="#" className="rating-link">( { product.reviews > 0 ? `${ product.reviews } Reviews` : 'There are no reviews yet.' } )</ALink>
                                        </div>
                                    </div>

                                    <div className="product-action">
                                        <Qty max={ product.stock } value={ qty } onChangeQty={ changeQty } />

                                        <a href="#" className={ `btn btn-dark btn-round add-cart mr-2 ${ radio === -1 ? 'disabled' : '' }` } title="Add To Cart" onClick={ onAddCartClick }>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="product-action">
                        <Qty max={ product.stock } value={ qty } onChangeQty={ changeQty } />

                        <a href="#" className={ `btn btn-dark btn-round add-cart shopping-cart shopping-cart mr-2 ${ radio === -1 ? 'disabled' : '' }` } title="Add To Cart" onClick={ onAddCartClick }>Add to Cart</a>
                    </div>

                    <hr className="divider mb-0 mt-0" />

                    <div className="product-single-share mb-3">
                        <a href="#" className={ `btn-icon-wish add-wishlist ${ isInWishlist() ? 'added-wishlist' : '' }` } onClick={ onWishlistClick } title={ `${ isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist' }` }><i
                            className="icon-wishlist-2"></i><span>{ isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist' }</span></a>

                        <label className="sr-only">Share:</label>

                        <div className="social-icons ml-auto">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"
                                title="Facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"
                                title="Twitter"></ALink>
                            <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                title="Linkedin"></ALink>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { ...WishlistAction, ...CartAction } )( ProductDetailSix );
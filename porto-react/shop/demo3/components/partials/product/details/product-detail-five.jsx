import SlideToggle from 'react-slide-toggle';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyBox from 'react-sticky-box';

// Import Actions
import { actions as WishlistAction } from "../../../../store/wishlist";
import { actions as CartAction } from "../../../../store/cart";

// Import Custom Component
import ProductNav from '../product-nav';
import Qty from '../qty';
import ALink from '../../../common/ALink';
import ProductCountdown from '../../../features/product-countdown';

function ProductDetailFive ( props ) {
    const router = useRouter();
    const { product, adClassOne = "", type = '', prev, next, adClassTwo = "order-last", parent = ".product-single-default" } = props;
    const [ attrs, setAttrs ] = useState( { sizes: [], colors: [] } );
    const [ variant, setVariant ] = useState( null );
    const [ size, setSize ] = useState( null );
    const [ color, setColor ] = useState( null );
    const [ qty, setQty ] = useState( 1 );

    useEffect( () => {
        if ( product ) {
            let attributes = product.variants.reduce( ( acc, cur ) => {
                cur.size && !acc.sizes.find( size => size.size === cur.size.size ) && acc.sizes.push( cur.size );
                cur.color && !acc.colors.find( color => color.name === cur.color.name ) && acc.colors.push( cur.color );
                return acc;
            }, { sizes: [], colors: [] } );
            setAttrs( attributes );
            initState();
        }
    }, [ product ] )

    useEffect( () => {
        if ( product ) {
            let priceToggle = document.querySelector( `${ parent } .price-toggle` );
            let variationToggle = document.querySelector( `${ parent } .variation-toggle` );

            if ( attrs.sizes.length && !size || attrs.colors.length && !color ) {
                document.querySelector( `${ parent } .add-cart` ) && document.querySelector( `${ parent } .add-cart` ).classList.add( 'disabled' );
                priceToggle && ( priceToggle.classList.contains( 'expanded' ) && priceToggle.click() );
            } else {
                document.querySelector( `${ parent } .add-cart` ) && document.querySelector( `${ parent } .add-cart` ).classList.remove( 'disabled' );
                let index = product.variants.findIndex( item => {
                    return !( item.size && item.size.size !== size ) && !( item.color && item.color.name !== color );
                } );
                setVariant( { ...product.variants[ index ], id: index } );
            }

            if ( size !== null || color !== null ) {
                variationToggle && variationToggle.classList.contains( 'collapsed' ) && variationToggle.click();
            } else {
                variationToggle && variationToggle.classList.contains( 'expanded' ) && variationToggle.click();
            }
        }
    }, [ size, color ] )

    useEffect( () => {
        if ( variant && variant.id >= 0 ) {
            let priceToggle = document.querySelector( `${ parent } .price-toggle` );
            priceToggle && ( priceToggle.classList.contains( 'collapsed' ) && priceToggle.click() );
        }
    }, [ variant ] )

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
            if ( product.variants.length === 0 ) {
                props.addToCart( product, qty, -1 );
            } else {
                props.addToCart( product, qty, variant.id );
            }
        }
    }

    function changeQty ( value ) {
        setQty( value );
    }

    function selectColor ( name, e ) {
        e.preventDefault();
        setColor( color !== name ? name : null );
    }

    function selectSize ( name, e ) {
        e.preventDefault();
        setSize( size !== name ? name : null );
    }

    function initState () {
        setSize( null );
        setColor( null );
        setQty( 1 );
    }

    function clearVariation ( e ) {
        e.preventDefault();
        initState();
    }

    function isDisabled ( type, name ) {
        if ( type === 'color' && size ) {
            return !product.variants.find( variant => variant.size.size === size && variant.color.name === name );
        } else if ( type === 'size' && color ) {
            return !product.variants.find( variant => variant.color.name === color && variant.size.size === name );
        }
        return false;
    }

    return (
        <>
            <div className={ `col-lg-3 ${ adClassOne }` }>
                <StickyBox className="sidebar-wrapper" offsetTop={ 70 }>
                    <div className="skel-pro skel-sticky"></div>
                    {
                        product &&
                        <div className="product-single-details">

                            {
                                type == 1 &&
                                <>
                                    <h1 className="product-title">{ product.name }</h1>

                                    <ProductNav prev={ prev } next={ next } />

                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={ { width: `${ 20 * product.ratings }%` } }></span>
                                            <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                                        </div>

                                        <ALink href="#" className="rating-link">( { product.reviews > 0 ? `${ product.reviews } Reviews` : 'There are no reviews yet.' } )</ALink>
                                    </div>

                                    <hr className="short-divider" />
                                </>
                            }

                            <div className="price-box">
                                {
                                    product && product.price[ 0 ] == product.price[ 1 ] ?
                                        <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                        : product.variants.length > 0 ?
                                            <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) } &ndash; { '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                            : <>
                                                <span className="old-price">{ '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                                <span className="new-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                            </>
                                }
                            </div>

                            <div className="product-desc">
                                <p>{ product.short_description }</p>
                            </div>

                            {
                                product.until && product.until !== null &&
                                <ProductCountdown type="1" />
                            }

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
                                    product.tags && product.tags.length > 0 ?
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
                        </div>
                    }
                </StickyBox>
            </div>

            <div className={ `col-lg-3 ${ adClassTwo }` } style={ { zIndex: '2' } }>
                <StickyBox className="sticky-wrapper mb-3 mb-lg-0" offsetTop={ 70 }>
                    <div className="skel-pro skel-sticky"></div>
                    {
                        product &&
                        <div className="product-single-details mb-lg-0">
                            {
                                product.variants.length > 0 ?
                                    <div className="product-filters-container custom-product-filters pt-0">
                                        {
                                            attrs.colors.length > 0 ?
                                                <div className={ `product-single-filter ${ attrs.sizes.length > 0 ? '' : 'border-0' }` }><label>Color:</label>
                                                    <ul className="config-size-list config-color-list config-filter-list">
                                                        {
                                                            attrs.colors.map( ( item, index ) => (
                                                                <li key={ `filter-color-${ index }` } className={ `${ item.name === color ? 'active' : '' } ${ isDisabled( 'color', item.name ) ? 'disabled' : '' }` }>
                                                                    {
                                                                        item.thumb ?
                                                                            <a href="#" className="filter-thumb p-0" onClick={ ( e ) => selectColor( item.name, e ) }>
                                                                                <LazyLoadImage
                                                                                    src={ process.env.NEXT_PUBLIC_ASSET_URI + item.thumb.url }
                                                                                    alt='product thumb'
                                                                                    width={ item.thumb.width }
                                                                                    height={ item.thumb.height }
                                                                                />
                                                                            </a>
                                                                            :
                                                                            <a href="#" className="filter-color border-0"
                                                                                style={ { backgroundColor: item.color } } onClick={ ( e ) => selectColor( item.name, e ) }></a>
                                                                    }</li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </div>
                                                : ''
                                        }

                                        {
                                            attrs.sizes.length > 0 ?
                                                <div className={ `product-single-filter d-flex ${ attrs.colors.length > 0 ? '' : 'border-0' }` }>
                                                    <label>Size:</label>
                                                    <ul className="config-size-list">
                                                        {
                                                            attrs.sizes.map( ( item, index ) => (
                                                                <li key={ `filter-size-${ index }` } className={ `${ item.size === size ? 'active' : '' } ${ isDisabled( 'size', item.size ) ? 'disabled' : '' }` }>
                                                                    {
                                                                        item.thumb ?
                                                                            <a href="#" className="filter-thumb p-0" onClick={ ( e ) => selectSize( item.size, e ) }>
                                                                                <LazyLoadImage
                                                                                    src={ process.env.NEXT_PUBLIC_ASSET_URI + item.thumb.url }
                                                                                    alt='product thumb'
                                                                                    width={ item.thumb.width }
                                                                                    height={ item.thumb.height }
                                                                                />
                                                                            </a>
                                                                            :
                                                                            <a href="#" className="d-flex align-items-center justify-content-center" onClick={ ( e ) => selectSize( item.size, e ) }>{ item.size }</a>
                                                                    }
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </div>
                                                : ''
                                        }

                                        {
                                            <SlideToggle collapsed={ true }>
                                                { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                    <>
                                                        <button className={ `d-none variation-toggle ${ toggleState.toLowerCase() }` } onClick={ onToggle }></button>
                                                        <div className="product-single-filter m-0" ref={ setCollapsibleElement }>
                                                            <label></label>
                                                            <a className="font1 text-uppercase clear-btn" href="#" onClick={ clearVariation }>Clear</a>
                                                        </div>
                                                    </>
                                                ) }
                                            </SlideToggle>
                                        }
                                    </div>
                                    : ''
                            }

                            <div className="product-action pb-0">
                                {
                                    product.variants.length ?
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <>
                                                    <button className={ `d-none price-toggle ${ toggleState.toLowerCase() }` } onClick={ onToggle }></button>
                                                    <div className="price-box product-filtered-price m-0" ref={ setCollapsibleElement }>
                                                        {
                                                            variant && variant.id >= 0 && (
                                                                variant.price ?
                                                                    <>
                                                                        { variant.sale_price ? <del className="old-price"><span>${ variant.sale_price.toFixed( 2 ) }</span></del> : '' }
                                                                        <span className="product-price">${ variant && variant.price.toFixed( 2 ) }</span>
                                                                    </>
                                                                    : <span className="product-stock pb-3 d-block">{ product.is_out_of_stock ? 'Out of Stock' : `${ product.stock } in stock` }</span> )
                                                        }
                                                    </div>
                                                </>
                                            ) }
                                        </SlideToggle>
                                        : ''
                                }

                                <div className="product-single-qty d-flex align-items-center mb-1 pb-2 mt-0">
                                    <label className="mr-3 mb-0">QTY:</label>

                                    <Qty max={ product.stock } value={ qty } onChangeQty={ changeQty } />
                                </div>

                                <a href="#" className={ `btn btn-dark add-cart mr-2 ${ attrs.sizes.length > 0 || attrs.colors.length > 0 ? 'disabled' : '' }` } title="Add To Cart" onClick={ onAddCartClick }>Add to Cart</a>

                                <a href="#" className={ `btn-icon-wish add-wishlist mt-1 d-inline-flex justify-content-start ml-lg-0 ml-2 ${ isInWishlist() ? 'added-wishlist' : '' }` } onClick={ onWishlistClick } title={ `${ isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist' }` }><i
                                    className="icon-wishlist-2"></i><span>{ isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist' }</span></a>
                            </div>

                            <div className="product-single-share custom-product-single-share">
                                <label className="sr-only">Share:</label>

                                <div className="social-icons mt-0">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"
                                        title="Facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"
                                        title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in" title="Linkedin"></ALink>
                                    <ALink href="#" className="social-icon social-mail icon-mail-alt"
                                        title="Mail"></ALink>
                                </div>
                            </div>
                        </div>
                    }
                </StickyBox>
            </div>
        </>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { ...WishlistAction, ...CartAction } )( ProductDetailFive );
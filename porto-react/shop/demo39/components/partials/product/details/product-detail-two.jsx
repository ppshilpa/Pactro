import SlideToggle from 'react-slide-toggle';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import React, { useEffect, useState, useMemo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as WishlistAction } from "../../../../store/wishlist";
import { actions as CartAction } from "../../../../store/cart";

// Import Custom Component
import ProductNav from '../product-nav';
import Qty from '../qty';
import ALink from '../../../common/ALink';
import ProductCountdown from '../../../features/product-countdown';

function ProductDetailTwo ( props ) {
    const router = useRouter();
    const { product, adClass = "", prev, next, isNav = true, parent = ".product-single-default", isSticky = false } = props;
    const [ variant, setVariant ] = useState( null );
    const [ size, setSize ] = useState( '' );
    const [ color, setColor ] = useState( '' );
    const [ qty, setQty ] = useState( 1 );
    const attrs = useMemo( () => {
        let attributes = product ? product.variants.reduce( ( acc, cur ) => {
            cur.size && !acc.sizes.find( size => size.size === cur.size.size ) && acc.sizes.push( cur.size );
            cur.color && !acc.colors.find( color => color.name === cur.color.name ) && acc.colors.push( cur.color );
            return acc;
        }, { sizes: [], colors: [] } ) : { sizes: [], colors: [] };
        return attributes;
    }, [ product ] );

    useEffect( () => {
        if ( product ) {
            initState();
        }
    }, [ product ] )

    useEffect( () => {
        if ( product ) {
            let priceToggle = document.querySelector( `${parent} .price-toggle` );
            let variationToggle = document.querySelector( `${parent} .variation-toggle` );

            if ( attrs.sizes.length && !size || attrs.colors.length && !color ) {
                document.querySelector( `${parent} .add-cart` ) && document.querySelector( `${parent} .add-cart` ).classList.add( 'disabled' );
                priceToggle && ( priceToggle.classList.contains( 'expanded' ) && priceToggle.click() );
            } else {
                document.querySelector( `${parent} .add-cart` ) && document.querySelector( `${parent} .add-cart` ).classList.remove( 'disabled' );
                let index = product.variants.findIndex( item => {
                    return !( item.size && item.size.size !== size ) && !( item.color && item.color.name !== color );
                } );

                setVariant( { ...product.variants[ index ], id: index } );
            }

            if ( size !== '' || color !== '' ) {
                variationToggle && variationToggle.classList.contains( 'collapsed' ) && variationToggle.click();
            } else {
                variationToggle && variationToggle.classList.contains( 'expanded' ) && variationToggle.click();
            }
        }
    }, [ size, color ] )

    useEffect( () => {
        if ( variant && variant.id >= 0 ) {
            let priceToggle = document.querySelector( `${parent} .price-toggle` );
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
        setColor( color !== name ? name : '' );
    }

    function selectSize ( name, e ) {
        e.preventDefault();
        setSize( size !== name ? name : '' );
    }

    function initState () {
        setSize( '' );
        setColor( '' );
        setQty( 1 );
    }

    function clearVariation ( e ) {
        e.preventDefault();
        initState();
    }

    return (
        <>
            <div className={ `skel-pro skel-extended-detail ${adClass}` }></div>
            {
                product &&
                <div className={ `product-single-details ${adClass}` }>
                    <div className="product-single-header position-relative">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="product-title">{ product.name }</h1>
                            </div>

                            <div className="col-lg-6">
                                <div className="product-single-share pb-4 pb-lg-0 align-items-start justify-content-lg-end">
                                    <label className="sr-only">Share:</label>

                                    <div className="social-icons mt-0">
                                        <a href="#" className="social-icon social-facebook icon-facebook"
                                            title="Facebook"></a>
                                        <a href="#" className="social-icon social-twitter icon-twitter"
                                            title="Twitter"></a>
                                        <a href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                            title="Linkedin"></a>
                                        <a href="#" className="social-icon social-mail icon-mail-alt"
                                            title="Mail"></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            isNav ?
                                <ProductNav prev={ prev } next={ next } />
                                : ""
                        }

                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={ { width: `${20 * product.ratings}%` } }></span>
                                <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                            </div>

                            <ALink href="#" className="rating-link">( { product.reviews > 0 ? `${product.reviews} Reviews` : 'There are no reviews yet.' } )</ALink>
                        </div>

                        <hr className="short-divider" />

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="price-box pb-4 pb-xl-0">
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
                            </div>
                            <div className="col-xl-6 d-flex flex-column align-items-xl-end">
                                <div className="widget-area">
                                    <div className="widget widget-info">
                                        <ul className="promote">
                                            <li>
                                                <i className="icon-shipped"></i>
                                                <h4>FREE<br />SHIPPING</h4>
                                            </li>
                                            <li>
                                                <i className="icon-us-dollar"></i>
                                                <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                            </li>
                                            <li>
                                                <i className="icon-online-support"></i>
                                                <h4>ONLINE<br />SUPPORT 24/7</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <React.Fragment key={ `single-cat-${index}` }>
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
                                        <React.Fragment key={ `single-cat-${index}` }>
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

                    {
                        product.variants.length > 0 ?
                            <div className="product-filters-container d-flex flex-wrap align-items-center justify-content-xl-end mb-0 border-bottom-0">
                                {
                                    attrs.colors.length > 0 ?
                                        <div className="product-single-filter select-custom d-flex align-items-center mr-sm-5">
                                            <label className="mr-0">Production Year:</label>
                                            <select name='color' className='form-control select-color' value={ color } onChange={ ( e ) => selectColor( e.target.value, e ) }>
                                                <option value=''>CHOOSE AN OPTION</option>
                                                {
                                                    size === '' ?
                                                        attrs.colors.map( ( item, index ) =>
                                                            <option value={ item.name } key={ "color-" + index }>{ item.name }</option>
                                                        )
                                                        :
                                                        product.variants.filter( item => item.size && item.size.size === size ).map( ( item, index ) => (
                                                            <option value={ item.color.name } key={ "color-" + index }>{ item.color.name }</option>
                                                        ) )
                                                }
                                            </select>
                                        </div>
                                        : ''
                                }

                                {
                                    attrs.sizes.length > 0 ?
                                        <div className="product-single-filter select-custom d-flex align-items-center">
                                            <label className="mr-0">Production Country:</label>
                                            <select name='color' className='form-control select-size' value={ size } onChange={ ( e ) => selectSize( e.target.value, e ) } >
                                                <option value=''>CHOOSE AN OPTION</option>
                                                {
                                                    color === '' ?
                                                        attrs.sizes.map( ( item, index ) =>
                                                            <option value={ item.size } key={ "color-" + index }>{ item.name }</option>
                                                        )
                                                        :
                                                        product.variants.filter( item => item.color && item.color.name === color ).map( ( item, index ) => (
                                                            <option value={ item.size.size } key={ "color-" + index }>{ item.size.name }</option>
                                                        ) )
                                                }
                                            </select>
                                        </div>
                                        : ''
                                }

                                <div className="product-action mb-2 d-flex align-items-center flex-wrap p-0 border-0">
                                    <div className="single-qty-wrapper mr-md-4">
                                        <label>QTY:</label>
                                        <Qty max={ product.stock } value={ qty } onChangeQty={ changeQty } />
                                    </div>

                                    <a href="#" className={ `btn btn-dark add-cart icon-add-cart mr-3 ${attrs.sizes.length > 0 || attrs.colors.length > 0 ? 'disabled' : ''}` } title="Add To Cart" onClick={ onAddCartClick }>Add to Cart</a>

                                    <a href="#" className={ `btn-icon-wish add-wishlist ${isInWishlist() ? 'added-wishlist' : ''}` } onClick={ onWishlistClick } title={ `${isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist'}` }><i
                                        className="icon-wishlist-2"></i><span>{ isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist' }</span></a>
                                </div>

                            </div>
                            : ''
                    }

                    {
                        product.variants.length ?
                            <SlideToggle collapsed={ true }>
                                { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                    <>
                                        <button className={ `d-none price-toggle ${toggleState.toLowerCase()}` } onClick={ onToggle }></button>
                                        <div className="price-box text-lg-right product-filtered-price m-0" ref={ setCollapsibleElement }>
                                            {
                                                variant && variant.id >= 0 && (
                                                    variant.price ?
                                                        <>
                                                            { variant.sale_price ? <del className="old-price"><span>${ variant.sale_price.toFixed( 2 ) }</span></del> : '' }
                                                            <span className="product-price">${ variant && variant.price.toFixed( 2 ) }</span>
                                                        </>
                                                        : <span className="product-stock pb-3 d-block">{ product.is_out_of_stock ? 'Out of Stock' : `${product.stock} in stock` }</span> )
                                            }
                                        </div>
                                    </>
                                ) }
                            </SlideToggle>
                            : ''
                    }
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

export default connect( mapStateToProps, { ...WishlistAction, ...CartAction } )( ProductDetailTwo );
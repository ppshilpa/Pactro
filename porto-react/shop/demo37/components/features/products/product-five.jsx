import React from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as CartAction } from "../../../store/cart";

// Import Custom Component
import ALink from '../../common/ALink';

function ProductFive ( props ) {
    const { adClass = "", link = "default", product } = props;

    function onAddCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    return (
        <div className={ `product-default media-with-lazy ${adClass}` }>
            <figure className="d-none">
                <ALink href={ `/product/${link}/${product.slug}` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 0 ].url }
                        threshold={ 500 }
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 1 ].url }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>
            </figure>

            <div className="product-details d-flex align-items-center flex-wrap justify-content-start">
                <h3 className="product-title">
                    <ALink href={ `/product/default/${product.slug}` }>{ product.name }</ALink>
                </h3>

                <div className="price-box">
                    {
                        product.price[ 0 ] == product.price[ 1 ] ?
                            <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                            : product.variants.length > 0 ?
                                <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) } &ndash; { '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                : <>
                                    <span className="old-price">{ '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                    <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                </>
                    }
                </div>

                {
                    product.variants.length > 0 ?
                        <ALink href={ `/product/default/${product.slug}` } className="btn-icon btn-add-cart">Select Option</ALink>
                        : <a href="#" className="btn-icon btn-add-cart product-type-simple" title="Add To Cart" onClick={ onAddCartClick }>Add To Cart</a>
                }
            </div>
        </div>
    )
}

export default connect( null, CartAction )( React.memo( ProductFive ) );
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductCountdown from '../product-countdown';

function ProductFour ( props ) {
    const { adClass = "", link = "default", product } = props;

    return (
        <div className={ `product-default media-with-lazy pt-5 ${ adClass }` }>
            <figure>
                <ALink href={ `/product/${ link }/${ product.slug }` }>
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

            <div className="product-details">
                <h3 className="product-title">
                    <ALink href={ `/product/default/${ product.slug }` }>{ product.name }</ALink>
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
            </div>
        </div>
    )
}


export default React.memo( ProductFour );
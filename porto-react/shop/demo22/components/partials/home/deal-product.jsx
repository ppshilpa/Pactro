import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductCountdown from '../../features/product-countdown';

export default function DealProduct ( { product } ) {
    function isSale () {
        return product.price[ 0 ] !== product.price[ 1 ] && product.variants.length === 0 ?
            '-' + ( 100 * ( product.price[ 1 ] - product.price[ 0 ] ) / product.price[ 1 ] ).toFixed( 0 ) + '%'
            :
            product.variants.find( variant => variant.sale_price ) ? "Sale" : false;
    }

    return (
        <div className="product-default media-with-lazy count-down">
            <h3 className="product-name">Flash Deals</h3>

            <figure className="position-relative">
                <ALink href={ `/product/default/${ product.slug }` }>
                    <LazyLoadImage
                        alt="product"
                        src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 0 ].url }
                        threshold={ 500 }
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />

                    <div className="label-group">
                        { product.is_hot ? <div className="product-label label-primary">HOT</div> : '' }

                        { isSale() ? <div className="product-label label-dark">{ isSale() }</div> : '' }
                    </div>

                    {
                        product.until && product.until !== null &&
                        <ProductCountdown />
                    }
                </ALink>
            </figure>

            <div className="product-details">
                <h3 className="product-title">
                    <ALink href={ `/product/default/${ product.slug }` }>{ product.name }</ALink>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.ratings + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                    </div>
                </div>

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
    );
}
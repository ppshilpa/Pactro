import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

export default function ProductFour(props) {
    const router = useRouter();
    const { adClass = "", link = "default", product } = props;

    return (
        <div className={`product-default left-details product-widget mb-2 ${adClass}`}>
            <figure>
                <ALink href={`/product/${link}/${product.slug}`}>
                    <img
                        alt="product"
                        src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[0].url}
                        width={175}
                        height={175}
                    />
                    {
                        product.pictures.length >= 2 ?
                            <img
                                alt="product"
                                src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[1].url}
                                className="hover-img"
                                width={175}
                                height={175}
                            />
                            : ""
                    }
                </ALink>
            </figure>

            <div className="product-details">
                <div className="category-list">
                    {
                        product.categories ?
                            product.categories.map((item, index) => (
                                <React.Fragment key={item.slug + '-' + index}>
                                    <ALink href={{ pathname: '/shop', query: { category: item.slug } }}>
                                        {item.name}
                                    </ALink>
                                    {index < product.categories.length - 1 ? ', ' : ""}
                                </React.Fragment>
                            )) : ""
                    }
                </div>


                <h3 className="product-title">
                    <ALink href={`/product/default/${product.slug}`}>{product.name}</ALink>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.ratings.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        product.price[0] == product.price[1] ?
                            <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                            : product.variants.length > 0 ?
                                <span className="product-price">{'$' + product.price[0].toFixed(2)} &ndash; {'$' + product.price[1].toFixed(2)}</span>
                                : <>
                                    <span className="old-price">{'$' + product.price[1].toFixed(2)}</span>
                                    <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                                </>
                    }
                </div>
            </div>
        </div >
    )
}
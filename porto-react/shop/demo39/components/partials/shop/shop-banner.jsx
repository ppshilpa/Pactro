import React from 'react';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner banner banner1 d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-between ${adClass}` } style={ { backgroundImage: 'url(images/home/banners/banner-1.jpg)' } }>
            <div className="content-left text-sm-right text-center">
                <h2 className="text-white">RARE WINES</h2>
                <h5 className="mb-sm-0 mb-2">Incredible Discounts</h5>
            </div>

            <div className="content-right text-right">
                <h5 className="d-flex">
                    <span className="text-transform-none text-white">only</span>
                    <b className="coupon-sale-text text-white align-middle text-white font2"><sup>$</sup><em>39</em><sup>99</sup></b>
                </h5>
                <ALink href="/shop" className="btn btn-lg">Shop Now</ALink>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
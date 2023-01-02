import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner-container ${adClass}` }>
            <div className="container">
                <div className="banner banner1" style={ { backgroundColor: '#eee' } } >
                    <figure>
                        <LazyLoadImage
                            alt="Home Banner"
                            src="images/home/banners/shop-banner.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height={ 300 }
                        />
                    </figure>

                    <div className="banner-layer banner-layer-middle banner-layer-left">
                        <h3 className="text-body m-b-1 ml-0">Save Big Sale</h3>
                        <h4 className="d-flex align-items-center text-uppercase m-b-2">50%<small
                            className="d-inline-block">Off</small></h4>
                        <h5 className="mb-1">
                            <span className="d-inline-block align-top ls-n-20 text-uppercase">Starting At</span>
                            <b className="coupon-sale-text d-inline-block ls-n-20 text-primary mb-0"><sup>$</sup>199<sup>99</sup></b>
                        </h5>
                        <ALink href="/shop" className="btn btn-sm text-uppercase ls-10">Shop Now</ALink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner-container ${adClass}` }>
            <div className="container">
                <div className="category-banner p-0 bg-gray">
                    <div className="row align-items-center m-0">
                        <div className="col-md-4 col-lg-3 offset-lg-1">
                            <div className="brand m-b-3">
                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="brand"
                                        src="images/home/banners/brand.png"
                                        width="100%"
                                        height={ 26 }
                                    />
                                </figure>
                            </div>

                            <h3 className="line-height-1 text-body text-uppercase m-b-2 ml-0">Car shock absorbers</h3>
                            <h2 className="ls-n-20 text-uppercase mb-0">Starting at <small>$</small>99<small>99</small></h2>
                        </div>

                        <div className="col-md-4" style={ { backgroundImage: 'url(images/home/banners/shop-banner.jpg' } }></div>

                        <div className="col-md-4">
                            <h4 className="font-weight-normal line-height-1 ls-n-20 m-b-3">Start Shopping Right Now</h4>
                            <p className="font2 text-body m-b-3">* Get Plus Discount Buying Package</p>
                            <ALink href="/shop" className="btn btn-dark btn-lg ls-0 ml-0">View Sale</ALink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
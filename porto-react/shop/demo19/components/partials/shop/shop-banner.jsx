import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner-container ${ adClass }` }>
            <div className="banner category-banner p-0" style={ { backgroundColor: '#f4f4f4' } } >
                <figure>
                    <LazyLoadImage
                        alt="Banner"
                        src="images/home/banners/shop-banner.jpg"
                        threshold={ 500 }
                        effect="black and white"
                        width="auto"
                        height={ 262 }
                    />
                </figure>
                <div className="container p-0">
                    <div className="banner-layer banner-layer-middle row">
                        <div className="col-md-4 col-xl-5 text-center text-md-right">
                            <h3 className="text-uppercase mb-2 mb-md-0 ml-0">
                                Top Electronic<br />Deals
                        </h3>
                        </div>
                        <div className="col-md-4 col-xl-2 text-center">
                            <a href="#" className="btn btn-lg btn-dark ml-0 mb-2 mb-md-0">View Sale</a>
                        </div>
                        <div className="col-auto coupon-sale-text mx-auto mx-md-0">
                            <h4 className="m-b-2 font1 d-block text-white bg-dark">Exclusive COUPON</h4>
                            <h5 className="mb-0 font1 d-inline-block bg-secondary"><i className="text-dark ls-0">UP
                                TO</i><b className="text-white">$100</b><sub className="text-dark">OFF</sub></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
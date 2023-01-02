import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner-container bg-gray ${adClass}` }>
            <div className="category-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-right">
                            <h2 className="font4 font-weight-normal ls-n-25 line-height-1 text-uppercase mb-0">
                                Discounts</h2>
                            <h3 className="ls-n-25 line-height-1 text-uppercase mb-0 ml-0">Up to 70%</h3>
                        </div>

                        <div className="col-md-4 text-center">
                            <figure className="mb-0">
                                <LazyLoadImage
                                    alt="Banner"
                                    src="images/home/banners/category-banner.png"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="auto"
                                    height={ 241 }
                                />
                            </figure>
                        </div>

                        <div className="col-md-4 text-center text-md-left">
                            <ALink href="/shop" className="btn btn-link ml-0 p-0"><i>View our Deals</i><i
                                className="icon-right-open-big"></i></ALink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
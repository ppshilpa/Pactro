import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner-container bg-gray` }>
            <div className={ `category-banner ${adClass}` }>
                <div className="row no-gutters m-0 align-items-center">
                    <div className="col-md-4 col-xl-5 bg-image" style={ { backgroundImage: 'url(images/home/banners/shop-banner.jpg)' } }>
                    </div>
                    <div className="col-md-8 col-xl-7 px-4 px-md-0 overflow-hidden">
                        <div className="row align-items-center">
                            <div className="col-md-3-5 mb-2 mb-md-0">
                                <h2 className="ls-0 mb-0">Meet Porto</h2>
                                <p className="mb-0">The easier way to build your
                                                portfolio & showcase your work.</p>
                            </div>
                            <div className="col-md-2-5">
                                <ALink href="/shop" className="btn btn-dark btn-round ml-0">Get Started <i
                                    className="fas fa-chevron-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass = "mt-2" } ) {
    return (
        <section>
            <div className={ `category-banner pt-0 pb-0 home-banner2 mb-0 d-flex flex-md-row ${adClass}` }>
                <div className="col-lg-3 col-xl-4 banner-background" style={ { backgroundImage: 'url(images/home/banners/home_banner5.jpg)' } }>
                </div>
                <div className="content-center">
                    <h3 className="mb-md-0 font1 ml-0">Porto Switch Lite</h3>
                    <p className="font1">Now Available For Pre-Order</p>
                </div>
                <div className="d-flex align-items-center content-right pt-0 py-lg-5">
                    <ALink href="/shop" className="btn">Pre-Order Now</ALink>
                </div>
            </div>
        </section>
    )
}

export default React.memo( ShopBanner );
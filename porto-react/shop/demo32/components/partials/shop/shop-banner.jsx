import React from 'react';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `home-slide banner-cat d-flex align-items-center ${adClass}` } style={ { backgroundImage: 'url(images/home/banners/category_banner.jpg)' } }>
            <div className="slide-content">
                <div className="content-left">
                    <div className="divide-txt">
                        <span className="font2 ls-0">New Brown Collection</span>
                        <div className="divide-line"></div>
                    </div>

                    <h2>Summer Sale</h2>
                    <h3 className="ls-0">30% OFF</h3>
                </div>

                <div className="image-info-group">
                    <ALink href="/shop" className="btn mt-0">GET YOURS!</ALink>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
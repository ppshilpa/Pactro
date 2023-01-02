import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `banner caty-banner ${adClass}` } style={ { backgroundColor: '#c0bec1' } } >
            <figure>
                <LazyLoadImage
                    alt="Banner"
                    src="images/home/slider/slide-1-1.jpg"
                    threshold={ 500 }
                    effect="black and white"
                    width="auto"
                    height={ 260 }
                />
            </figure>

            <div className="banner-layer">
                <h2 className="m-b-1 banner-title">New Hot Cosmetics</h2>
                <h3 className="text-uppercase rotated-upto-text mb-0 position-relative">
                    <small>Up to</small>50% Off</h3>
                <ALink href="/shop" className="btn btn-xl btn-icon-right" role="button">Shop
                    Now<i className="fas fa-long-arrow-alt-right"></i>
                </ALink>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `banner home-slide1 caty-banner ${adClass}` }>
            <figure>
                <LazyLoadImage
                    alt="banner"
                    src="images/home/banners/category-banner.jpg"
                    threshold={ 500 }
                    effect="black and white"
                    width="100%"
                    height={ 300 }
                />
            </figure>

            <div className="banner-layer banner-layer-middle">
                <h2 className="ls-n-20">Spring / Summer Season</h2>
                <h3><em className="text-center ls-0">up<br />to</em>50% OFF</h3>
                <h4 className="text-uppercase d-lg-inline-block mb-0 align-top pt-2">Starting at<span className="text-primary">$<em className="ml-0">19</em>99</span></h4>
                <ALink href="/shop" className="btn btn-dark btn-outline btn-xl mt-1">Shop Now</ALink>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
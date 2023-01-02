import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <section className={ adClass }>
            <div className="row">
                <div className="col-6 col-lg-3">
                    <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner1.jpg)' } } >
                        <div className="banner-content">
                            <h3>GIFTS $10</h3>
                            <span>& under</span>
                            <ALink href="/shop">SHOP NOW</ALink>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner2.jpg)' } } >
                        <div className="banner-content">
                            <h3>GIFTS $20</h3>
                            <span>& under</span>
                            <ALink href="/shop">SHOP NOW</ALink>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner3.jpg)' } } >
                        <div className="banner-content">
                            <h3>GIFTS $50</h3>
                            <span>& under</span>
                            <ALink href="/shop">SHOP NOW</ALink>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner4.jpg)' } } >
                        <div className="banner-content">
                            <h3>GIFTS $99</h3>
                            <span>& under</span>
                            <ALink href="/shop">SHOP NOW</ALink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( ShopBanner );
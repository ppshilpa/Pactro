import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <section className={ `${adClass}` }>
            <div className="row category-banner-container grid pt-0 pb-0">
                <div className="grid-item col-lg-6 height-x1 mb-2 mb-lg-0">
                    <div className="home-banner pb-0 mb-2 mb-lg-0">
                        <figure style={ { background: '#f0f5f9' } }>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/home-banner1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <div className="banner-content content-right">
                            <h3 className="ls-10"><strong>black<br /></strong>Armchairs</h3>
                            <p className="font2">starting from $399</p>
                            <ALink href="/shop" className="btn">shop now <i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-6 height-x1">
                    <div className="row">
                        <div className="col-6 col-lg-5">
                            <div className="home-banner pb-0 mb-2 mb-lg-0">
                                <figure style={ { background: '#222529' } }>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/home-banner3.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-content content-top">
                                    <span className="font2">check new arrivals</span>
                                    <h4><strong>cool lamps</strong></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-lg-7">
                            <div className="home-banner pb-0 mb-2 mb-lg-0">
                                <figure style={ { background: '#606da6' } }>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/home-banner4.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="banner-content content-bottom">
                                    <span className="font2">exclusive new collection</span>
                                    <h4><strong>luxurious jacuzzi</strong></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( ShopBanner );
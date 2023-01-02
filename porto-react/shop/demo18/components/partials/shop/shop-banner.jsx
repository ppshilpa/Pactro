import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner-container ${adClass}` }>
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner mb-2 mb-lg-0" style={ { backgroundColor: '#fff' } } >
                        <figure>
                            <LazyLoadImage
                                alt="Banner"
                                src="images/home/banners/banner1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="auto"
                                height={ 151 }
                            />
                        </figure>
                        <div
                            className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                            <div className="content-left">
                                <h4 className="mb-0">Summer Sale</h4>
                                <h5 className="text-uppercase mb-0">20% off</h5>
                            </div>
                            <ALink href="/shop" className="btn btn-dark">Shop now</ALink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner" style={ { backgroundColor: '#111' } } >
                        <figure>
                            <LazyLoadImage
                                alt="Banner"
                                src="images/home/banners/banner2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="auto"
                                height={ 151 }
                            />
                        </figure>
                        <div
                            className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                            <div className="content-left">
                                <h4 className="text-white mb-0">Flash Sale</h4>
                                <h5 className="text-uppercase text-white mb-0">30% off</h5>
                            </div>
                            <ALink href="/shop" className="btn btn-light">Shop now</ALink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );
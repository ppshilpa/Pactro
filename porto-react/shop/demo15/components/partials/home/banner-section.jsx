import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';

export default function BannerSection() {
    return (
        <section className="banner-container">
            <div className="row">
                <div className="col-md-4">
                    <div className="banner">
                        <figure>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/banner-1.jpg"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                            <h3 className="m-b-1 font3 text-right text-primary">Orange</h3>
                            <h5 className="ls-n-20 d-inline-block m-r-2 text-left">FROM</h5>
                            <h4 className="ls-n-20 text-price float-right text-left">$ <b>19</b>99</h4>
                            <div className="mb-0 clearfix text-right">
                                <ALink href="/shop" className="btn btn-modern btn-sm btn-dark">Shop Now!</ALink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="banner">
                        <figure>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/banner-2.jpg"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                            <h3 className="m-b-1 font3 text-right text-primary">White</h3>
                            <h5 className="ls-n-20 d-inline-block m-r-2 text-left">FROM</h5>
                            <h4 className="ls-n-20 text-price float-right text-left">$ <b>29</b>99</h4>
                            <div className="mb-0 clearfix text-right">
                                <ALink href="/shop" className="btn btn-modern btn-sm btn-dark">Shop Now!</ALink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="banner">
                        <figure>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/banner-3.jpg"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                            <h3 className="m-b-1 font3 text-right text-primary">Black</h3>
                            <h5 className="ls-n-20 d-inline-block m-r-2 text-left">FROM</h5>
                            <h4 className="ls-n-20 text-price float-right text-left">$ <b>39</b>99</h4>
                            <div className="mb-0 clearfix text-right">
                                <ALink href="/shop" className="btn btn-modern btn-sm btn-dark">Shop Now!</ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
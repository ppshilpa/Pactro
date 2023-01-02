import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider text-uppercase nav-big bg-gray" options={{
            nav: true,
            loop: false,
            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']
        }}>
            <div className="home-slide home-slide1 banner">
                <figure className="w-100">
                    <LazyLoadImage
                        className="slide-bg"
                        alt="banner"
                        src="images/home/slider/slide-1.jpg"
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                </figure>
                <div className="container">
                    <div className="banner-layer banner-layer-middle banner-layer-right">
                        <h4 className="text-capitalize m-b-3">Totally Wireless High-Performance</h4>
                        <h2 className="m-b-2">Select headphones</h2>
                        <h3 className="m-b-2">30% Off</h3>
                        <h5 className="d-inline-block pt-2 mb-1 pb-1 ls-n-20 align-middle">Starting AT
								<b className="coupon-sale-text bg-secondary text-white d-inline-block align-sub">$
									<em className="align-middle">199</em>99</b>
                        </h5>
                        <ALink href="/shop" className="btn btn-dark">Shop Now!</ALink>
                    </div>
                </div>
            </div>
            <div className="home-slide home-slide2 banner">
                <figure>
                    <LazyLoadImage
                        className="slide-bg"
                        alt="banner"
                        src="images/home/slider/slide-2.jpg"
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                </figure>
                <div className="container">
                    <div className="banner-layer banner-layer-middle banner-layer-left">
                        <h4 className="mb-0">Extra</h4>
                        <h3 className="m-b-2">20% off</h3>
                        <h3 className="m-b-3 heading-border">Accessories</h3>
                        <h2 className="m-b-4">Drones on sale</h2>
                        <ALink href="/shop" className="btn btn-block btn-dark">Shop All Sale</ALink>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo(IntroSection);
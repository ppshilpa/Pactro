import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

export default function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider outer-container w-auto owl-theme show-nav-hover nav-large nav-outer mb-2" options={{
            nav: true,
            dots: false,
            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
            loop: false
        }}>
            <div className="home-slide home-slide1 banner banner-md-vw bg-white">
                <LazyLoadImage
                    className="slide-bg"
                    alt="slider image"
                    src="images/home/slider/slide-1.jpg"
                    width={1180}
                    height={500}
                />
                <div className="banner-layer banner-layer-middle">
                    <h4 className="m-b-3">Find the Boundaries. Push Through!</h4>
                    <h2 className="font-script mb-0">Jeans Sale</h2>
                    <h3 className="upto-text"><em>up<br />to</em>80% OFF</h3>
                    <h5 className="d-inline-block mb-0 text-uppercase ls-n-20">
                        Starting At
                                <b className="coupon-sale-text text-white bg-secondary">$<em>199</em>99</b>
                    </h5>
                    <ALink href="/shop" className="btn btn-dark btn-lg ls-10">Shop Now!</ALink>
                </div>
            </div>
            <div className="home-slide home-slide2 banner banner-md-vw">
                <LazyLoadImage
                    className="slide-bg"
                    alt="slider image"
                    src="images/home/slider/slide-2.jpg"
                    threshold={500}
                    width={1180}
                    height={500}
                />
                <div className="banner-layer banner-layer-middle">
                    <h2 className="ls-n-25 mb-0">Women's Business Fashion</h2>
                    <h3 className="upto-text"><em>up<br />to</em>60% OFF</h3>
                    <h5 className="text-uppercase d-inline-block mb-0 align-top ls-n-20">Starting at
                                <span className="text-secondary cupon-text pr-sm-5">$<em className="ls-n-20">29</em>99</span>
                    </h5>
                    <ALink href="/shop" className="btn btn-dark btn-outline ls-10 btn-xl mt-0">Shop Now!</ALink>
                </div>

            </div>
        </OwlCarousel >
    )
}
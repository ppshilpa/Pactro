import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider owl-theme mb-2" options={{
            nav: false,
            dots: true,
            loop: false
        }}>
            <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <LazyLoadImage
                    alt="slider image"
                    src="images/home/slider/slide-1.jpg"
                    width={835}
                    height={415}
                />
                <div className="banner-layer">
                    <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000}>
                        <h4 className="text-white">Find the Boundaries. Push Through!</h4>
                        <h2 className="text-white mb-0">Summer Sale</h2>
                        <h3 className="text-white text-uppercase">30% Off</h3>
                        <div className="price-range">
                            <h5 className="text-white text-uppercase d-inline-flex ls-n-20 mb-0">Starting At <b className="coupon-sale-text text-secondary bg-white">$<em
                                className="align-text-top">199</em>99</b></h5>
                            <ALink href="/" className="btn btn-dark mleft-4">Get Yours!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <LazyLoadImage
                    alt="slider image"
                    src="images/home/slider/slide-2.jpg"
                    width={835}
                    height={415}
                />
                <div className="banner-layer text-uppercase">
                    <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1000}>
                        <h4>Over 200 products with discounts</h4>
                        <h2>Great Deals</h2>
                        <div className="d-flex">
                            <h5 className="d-inline-block mb-0 align-top pright-14">Starting At <b>$<em>299</em>99</b></h5>
                            <ALink href="/" className="btn btn-dark ls-10">Get Yours!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className=" home-slide home-slide3 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <LazyLoadImage
                    alt="slider image"
                    src="images/home/slider/slide-3.jpg"
                    width={835}
                    height={415}
                />
                <div className="banner-layer text-uppercase">
                    <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000}>
                        <h4>Up to 70% off</h4>
                        <h2>New Arrivals</h2>
                        <div className="d-flex">
                            <h5 className="d-inline-block mb-0 align-top pright-14">Starting At <b>$<em>299</em>99</b></h5>
                            <ALink href="/" className="btn btn-dark last-btn">Get Yours!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    )
}



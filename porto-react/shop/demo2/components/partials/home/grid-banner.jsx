import Reveal from 'react-awesome-reveal';
// import { img } from 'react-lazy-load-image-component';

import { fadeInUpShorter } from '../../../utils/data/keyframes'
import ALink from '../../common/ALink';

export default function GridBanner() {
    return (
        <div className="banners-grid text-uppercase grid">
            <div className="banner banner1 grid-item banner-md-vw text-transform-none">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-1.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>

                        <div className="banner-layer banner-layer-middle text-right">
                            <h4 className="banner-layer-circle-item ml-auto mb-2 ls-0">40<sup>%<small
                                className="ls-0">OFF</small></sup></h4>
                            <h5 className="m-b-3 ls-0"><del className="d-block m-b-2">$450</del>$270</h5>
                            <h4 className="m-b-1 ls-n-0">Watches</h4>
                            <h3 className="mb-0 ls-0">Mega Sale</h3>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner7 grid-item banner-md-vw order-lg-0">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-7.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>

                        <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                            <h3 className="m-b-3 text-white text-right ls-0">Electronic<br />Deals</h3>

                            <div className="coupon-sale-content">
                                <h4 className="mb-1 coupon-sale-text bg-white d-block ls-n-10 text-transform-none">
                                    Exclusive
                            COUPON</h4>
                                <h5 className="coupon-sale-text text-white ls-n-10 p-0"><i className="ls-0">UP TO</i><b
                                    className="text-dark">$100</b> OFF</h5>
                                <ALink href="/shop" className="btn btn-block btn-dark btn-black">Get Yours!</ALink>
                            </div>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner4 grid-item banner-md-vw">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-4.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-middle text-right">
                            <h2 className="m-b-2 text-secondary ls-n-20">Flash Sale</h2>
                            <h3 className="m-b-1 ls-n-20">Top Brands<br />Summer Sunglasses</h3>
                            <h4 className="text-white ls-n-20">Starting<br />AT <sup>$</sup>199<sup>99</sup></h4>
                            <ALink href="/shop" className="btn btn-light ls-10">View Sale</ALink>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner5 grid-item banner-md-vw text-center">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-5.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-top">
                            <h4 className="heading-border">Amazing</h4>
                            <h3 className="ls-0 mb-1">Collection</h3>
                            <hr className="mb-1 mt-1" />
                            <h5 className="pt-1">Check our discounts</h5>
                        </div>
                        <div className="banner-layer banner-layer-bottom">
                            <ALink href="/shop" className="btn btn-dark">Shop Now!</ALink>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner2 grid-item banner-md-vw">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-2.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-top text-right">
                            <h3 className="ls-0">Trending</h3>
                            <h2 className="m-b-3 ls-10 text-transform-none">Hot Sales</h2>
                            <h4 className="m-b-3 text-secondary ls-0">Starting at $99</h4>
                            <ALink href="/shop" className="btn btn-dark ls-10">Buy Now!</ALink>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner8 grid-item banner-md-vw">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={600} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-8.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-middle">
                            <h3 className="m-b-2 text-transform-none">Exclusive Shoes</h3>
                            <h4 className="m-b-3">50% Off</h4>
                            <ALink href="/shop" className="btn btn-dark ls-10">Get Yours!</ALink>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner9 grid-item banner-md-vw text-center">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={700} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-9.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-middle banner-layer-left">
                            <h4 className="m-b-3 text-body">Check our discounts</h4>
                            <h3 className="text-nowrap">More than<span className="d-block mt-1 m-b-3">20 brands</span></h3>
                            <hr className="mt-0 mb-2" />
                            <h5 className="coupon-sale-text ls-n-10 p-0 mb-0"><i className="ls-0">UP TO</i><b
                                className="ls-n-0">$100</b> OFF
                    </h5>
                        </div>
                        <div className="banner-layer banner-layer-middle banner-layer-right text-center">
                            <ALink href="/shop" className="btn btn-dark">Check this sale!</ALink>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner3 grid-item banner-md-vw">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={800} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-3.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-top text-center">
                            <h2 className="m-b-1">Top Brands</h2>
                            <h3 className="mb-1 pb-1">Smartphones</h3>
                            <h4 className="text-body">* limited time only</h4>
                        </div>
                        <div className="banner-layer banner-layer-bottom text-center">
                            <ALink href="/shop" className="btn btn-secondary">Buy Now!</ALink>
                        </div>
                    </>
                </Reveal>
            </div>

            <div className="banner banner6 grid-item banner-md-vw">
                <Reveal className="h-100" keyframes={fadeInUpShorter} delay={900} duration={1000} triggerOnce>
                    <>
                        <figure>
                            <img
                                alt="banner"
                                src="images/home/banners/banner-6.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                                threshold={500}
                            />
                        </figure>
                        <div className="banner-layer banner-layer-middle text-center">
                            <h3 className="m-b-1 ls-0">Deal Promos</h3>
                            <h4 className="m-b-3 ls-0 text-body">Starting at $99</h4>
                            <ALink href="/shop" className="btn btn-dark ls-10">Buy Now!</ALink>
                        </div>
                    </>
                </Reveal>
            </div>
        </div>
    )
}
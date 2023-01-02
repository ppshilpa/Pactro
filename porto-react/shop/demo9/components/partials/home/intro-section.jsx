import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { fadeInUpShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function IntroSection () {
    return (
        <div className="row m-b-3">
            <div className="home-slider-container col-lg-9 offset-lg-3">
                <OwlCarousel adClass="home-slider" options={ {
                    nav: false
                } }>
                    <div className="home-slide banner banner-1">
                        <figure>
                            <img
                                className="slide-bg"
                                alt="slider image"
                                src="images/home/slider/slide-1.jpg"
                            />
                        </figure>
                        <div className="banner-layer slide-1 text-xl-right banner-layer-middle">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                <h4 className="text-xl-right slide-title">Find the Boundaries. Push Through!</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                <h2 className="text-xl-right text-uppercase sub-title">Shoes Sale</h2>
                            </Reveal>
                            <div className="row">
                                <div className="col-auto col-md-6">
                                    <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1000 }>
                                        <h3 className="sale-label line-height-1 mb-0 d-inline-block text-center">
                                            40<small><sup>%</sup><sub>OFF</sub></small></h3>
                                    </Reveal>
                                </div>
                                <div className="col-auto col-md-6 content-right">
                                    <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1000 }>
                                        <>
                                            <h4 className="d-inline-block text-left text-uppercase line-height-1 d-inline-block">
                                                Starting At</h4>
                                            <h5 className="text-left coupon-sale-text">$<b>119</b>99</h5>
                                            <div className="mb-0">
                                                <ALink href="/shop" className="btn btn-modern btn-md btn-dark">SHOP NOW!</ALink>
                                            </div>
                                        </>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide banner banner-2">
                        <figure>
                            <img
                                className="slide-bg"
                                alt="slider image"
                                src="images/home/slider/slide-2.jpg"
                            />
                        </figure>
                        <div className="banner-layer slide-2 text-right banner-layer-middle">
                            <div>
                                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                    <h2 className="text-right text-uppercase text-primary ls-n-20 m-b-2">FLASH SALE</h2>
                                </Reveal>
                                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 }>
                                    <h4 className="text-right m-b-2">TOP BRANDS<br />SUMMER SUNGLASSES</h4>
                                </Reveal>
                                <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                    <h3 className="text-right text-uppercase text-light ls-n-20 m-b-4">
                                        STARTING<br />AT<sup className="pl-2 ml-1">$</sup>199<sup>99</sup></h3>
                                </Reveal>
                                <div className="pt-1">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                        <ALink href="/shop" className="btn btn-modern btn-lg btn-light">View Sale</ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div >
    )
}
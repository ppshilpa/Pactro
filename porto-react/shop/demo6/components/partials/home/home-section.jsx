import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter, fadeIn, blurIn } from '../../../utils/data/keyframes'

function HomeSection() {
    useEffect(() => {
        document.querySelector('video').play();
    }, [])

    return (
        <OwlCarousel adClass="home-slider owl-theme dot-inside slide-animate" options={HomeSlider}>
            <div className="home-slide home-slide-1 banner banner-h-100 banner-md-vw-small">
                <figure>
                    <LazyLoadImage
                        alt="slider image"
                        src="images/home/slider/slide-1.jpg"
                        width="100%"
                        height={'100vh'}
                    />
                </figure>
                <div className="banner-layer banner-layer-middle text-center">
                    <Reveal keyframes={fadeIn} delay={800} duration={1200}>
                        <h2 className="text-center font3 font-weight-normal m-b-4 text-primary">Summer Fashion Trends</h2>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={800} duration={1200}>
                        <h3 className="text-center m-b-1 text-uppercase">big sale up to</h3>
                    </Reveal>
                    <Reveal keyframes={fadeIn} delay={800} duration={1600}>
                        <h3 className="text-center m-b-4 text-sale">80%<small>OFF</small></h3>
                    </Reveal>
                    <Reveal keyframes={fadeIn} delay={2200} duration={1200}>
                        <div>
                            <h5 className="d-inline-block m-r-3 text-left text-uppercase">Starting At</h5>
                            <h5 className="coupon-sale-text text-left text-light">$<b>199</b>99</h5>
                        </div>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={2500} duration={1200}>
                        <div className="mb-0 p-t-2">
                            <ALink href="/shop" className="btn btn-borders btn-xl btn-outline-dark ls-10">
                                SHOP NOW
                                </ALink>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="home-slide home-slide-2 banner banner-h-100 loaded banner-lg-vw">
                <video autolay="true" loop muted>
                    <source src="images/home/slider/slide-2.mp4" type="video/mp4" />
                    <source src="images/home/slider/slide-2.webm" type="video/webm" />
                    <source src="images/home/slider/slide-2.ogv" type="video/ogg" />
                            Your browser does not support HTML5 video.
                        </video>
                <div className="banner-layer banner-layer-middle banner-layer-left">
                    <Reveal keyframes={fadeIn} delay={200} duration={1200}>
                        <h2 className="font3 font-weight-normal p-l-1 mb-0 ml-0">Summer Trends</h2>
                        <h3 className="mb-0 text-left text-uppercase">sale</h3>
                    </Reveal>
                </div>
                <div className="banner-layer banner-layer-middle banner-layer-right">
                    <Reveal keyframes={fadeIn} delay={200} duration={1200}>
                        <h4 className="pl-2 font-weight-light mb-0 text-left text-uppercase">prices up to</h4>
                        <h3 className="mb-0 text-sale m-l-n-xs text-left text-uppercase">80%<small>OFF</small></h3>
                        <div className="mb-0 pl-2">
                            <ALink href="/shop" className="btn btn-modern btn-xl btn-primary">SHOP NOW </ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo(HomeSection);
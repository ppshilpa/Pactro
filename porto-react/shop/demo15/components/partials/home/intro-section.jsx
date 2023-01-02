import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { blurIn, fadeInUp, fadeInUpShorter, fadeIn } from '../../../utils/data/keyframes'

const SplitRight = function ({ text = "", keyframes = fadeIn, delay = 90 }) {
    return (
        <>
            {
                text.split('').map((char, index) => (
                    <Reveal className="d-inline-block" keyframes={fadeIn} delay={index * delay} key={`char-${index}`}>
                        <span>{char}</span>
                    </Reveal>
                ))
            }
        </>
    )
}

function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider nav-pos-outside show-nav-hover" options={{
            nav: true,
            loop: false,
            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']
        }}>
            <div className="home-slide banner banner-md-vw-small" style={{ backgroundColor: '#f4f4f4' }}>
                <figure className="w-100">
                    <img
                        className="slide-bg"
                        alt="banner"
                        src="images/home/slider/slide-1.jpg"
                        width="100%"
                        height="auto"
                    />
                </figure>
                <div className="banner-layer slide-1 banner-layer-left banner-layer-middle text-right">
                    <Reveal keyframes={blurIn} delay={100} duration={700}>
                        <h4 className="m-b-3 text-right ws-pre"><SplitRight text="Luxury With Brands We Love" /></h4>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={100} duration={1200}>
                        <h3 className="m-b-2 font3 text-right text-primary">Women's Lingerie</h3>
                    </Reveal>
                    <Reveal keyframes={fadeInUp} delay={1900} duration={1200}>
                        <>
                            <h5 className="d-inline-block ls-n-20 m-r-3 p-t-3 text-left">STARTING AT</h5>
                            <h4 className="text-price ls-n-20 m-b-4 text-left float-right">$ <b>199</b>99</h4>
                        </>
                    </Reveal>
                    <div className="clearfix"></div>
                    <Reveal keyframes={fadeInUpShorter} delay={2400} duration={1200}>
                        <div className="mb-0">
                            <ALink href="/shop" className="btn btn-modern btn-lg btn-dark">Shop Now!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="home-slide banner banner-md-vw-small" style={{ backgroundColor: '#f4f4f4' }}>
                <figure className="w-100">
                    <img
                        className="slide-bg"
                        alt="banner"
                        src="images/home/slider/slide-2.jpg"
                        width="100%"
                        height="auto"
                    />
                </figure>
                <div className="banner-layer slide-2 banner-layer-right banner-layer-middle">
                    <Reveal keyframes={blurIn} delay={100} duration={700}>
                        <h4 className="m-b-3 ws-pre"><SplitRight text="Trending Items We Love" /></h4>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={100} duration={1200}>
                        <h3 className="m-b-2 font3 text-primary">Women's Hats</h3>
                    </Reveal>
                    <Reveal keyframes={fadeInUp} delay={1900} duration={1200}>
                        <>
                            <h5 className="ls-n-20 float-left m-r-3 p-t-3">STARTING AT</h5>
                            <h4 className="ls-n-20 text-price m-b-4">$ <b>19</b>99</h4>
                        </>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={2400} duration={1200}>
                        <div className="mb-0">
                            <ALink href="/shop" className="btn btn-modern btn-lg btn-dark">Shop Now!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo(IntroSection);
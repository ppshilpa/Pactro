import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="intro-section">
            <OwlCarousel adClass="home-slider show-nav-hover m-b-5" options={ HomeSlider }>
                <div className="home-slide home-slide-1 banner" style={ { backgroundImage: 'url(images/home/slider/slide-1.jpg)' } }>
                    <div className="banner-layer banner-layer-middle">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1000 }>
                            <>
                                <h4 className="m-b-2">New Amazing Collection</h4>
                                <h2 className="font3 font-italic m-b-4">Summer Beauty Sale</h2>
                                <p className="font2 ls-n-15 m-b-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper quam lacus, et suscipit lectus porta efficitur.</p>
                                <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">Starting at
                                    <em>$<strong>39</strong>99</em></h5>
                                <ALink href="/shop" className="btn btn-light btn-lg mb-2">Shop Now</ALink>
                            </>
                        </Reveal>
                    </div>

                    <div className="banner-layer banner-layer-bottom banner-text">
                        <img src="images/home/slider/slide-1-text.png" alt="bg-text" width="1281"
                            height="275" />
                    </div>

                    <div className="banner-layer dot-image">
                        <img src="images/home/dots.png" alt="dots" width="123" height="126" />
                    </div>
                </div>

                <div className="home-slide home-slide-2 banner" style={ { backgroundImage: 'url(images/home/slider/slide-2.jpg)' } }>
                    <div className="banner-layer banner-layer-middle text-right">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1000 }>
                            <>
                                <h4 className="m-b-2">Back In Stock</h4>
                                <h2 className="font3 font-italic m-b-4">Ultimate SkinCare</h2>
                                <p className="font2 ls-n-15 m-b-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent lori ullamcorper quam lacus, et suscipit lectus porta efficitur.</p>
                                <ALink href="/shop" className="btn btn-light btn-lg mb-2 float-right">Shop Now</ALink>
                                <h5 className="coupon-sale-text float-right ls-n-20 text-uppercase">Starting at
                                    <em>$<strong>39</strong>99</em></h5>
                            </>
                        </Reveal>
                    </div>

                    <div className="banner-layer banner-layer-bottom banner-text">
                        <img src="images/home/slider/slide-2-text.png" alt="bg-text" width="1281"
                            height="275" />
                    </div>

                    <div className="banner-layer dot-image">
                        <img src="images/home/dots.png" alt="dots" width="123" height="126" />
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );
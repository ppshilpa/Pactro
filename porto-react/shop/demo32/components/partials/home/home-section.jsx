import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <OwlCarousel adClass="top-slider show-nav-hover" options={ HomeSlider }>
            <div className="home-slide home-slide1" style={ { backgroundImage: 'url(images/home/slider/home_slider1.jpg)', backgroundPosition: '60%' } }>
                <div className="slide-content content-left">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                        <div className="divide-txt mb-0">
                            <span className="font2">New Brown Collection</span>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 }>
                        <h2>Summer Sale</h2>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                        <h3>30% OFF</h3>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 700 } duration={ 1000 }>
                        <div className="image-info-group">
                            <h5>STARTING AT <span><sup>$</sup>39<sup>99</sup></span></h5>
                            <ALink href="/shop" className="btn">GET YOURS!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="home-slide home-slide1" style={ { backgroundImage: 'url(images/home/slider/home_slider2.jpg)' } }>
                <div className="slide-content content-right">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                        <div className="divide-txt no-txt">
                            <div className="divide-line"></div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 }>
                        <h2>Must Have</h2>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                        <h3>SANDALS</h3>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 700 } duration={ 1000 }>
                        <div className="image-info-group">
                            <h5>STARTING AT <span><sup>$</sup>19<sup>99</sup></span></h5>
                            <ALink href="/shop" className="btn">GET YOURS!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default React.memo( HomeSection );
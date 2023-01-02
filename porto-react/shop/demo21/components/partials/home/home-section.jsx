import React, { useState } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    const [ mediaRef, setMediaRef ] = useState( null );

    const events = {
        onTranslate: function ( e ) {
            document.querySelector( `.home-slider-sidebar li.active` ) && document.querySelector( `.home-slider-sidebar li.active` ).classList.remove( 'active' );
            let thumbs = document.querySelectorAll( `.home-slider-sidebar li` );
            thumbs[ e.item.index ].classList.add( 'active' );
        }
    };

    function changeMediaIndex ( e, index ) {
        if ( !e.currentTarget.classList.contains( 'active' ) ) {
            let thumbs = e.currentTarget.closest( '.home-slider-sidebar' );
            thumbs.querySelector( 'li' ) && thumbs.querySelector( 'li.active' ).classList.remove( 'active' );
            e.currentTarget.classList.add( 'active' );
        }

        mediaRef.current.goTo( index );
    }

    return (
        <div className="intro-section">
            <OwlCarousel adClass="home-slider slide-animate owl-carousel owl-theme owl-carousel-lazy dot-inside" events={ events } onChangeRef={ setMediaRef } options={ HomeSlider }>
                <div className="home-slide banner" style={ { backgroundImage: `url(images/home/slider/slide1.jpg)` } }>
                    <div className="banner-layer banner-layer-middle">
                        <div className="container banner-content">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                                <h2 className="font1 font-weight-normal text-uppercase mb-0">start the revolution</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                <h1 className="font1 font-weight-bold text-uppercase">drone pro 4</h1>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 }>
                                <h2 className="font1 font-weight-normal text-uppercase mb-3">from <strong>$499</strong></h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 1100 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-dark btn-buy">BUY NOW</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="home-slide banner" style={ { backgroundImage: `url(images/home/slider/slide2.jpg)` } }>
                    <div className="banner-layer banner-layer-middle">
                        <div className="container banner-content">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                                <h2 className="font1 font-weight-normal text-uppercase mb-0">amazing deals</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                <h1 className="font1 font-weight-bold text-uppercase">smartphone</h1>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 }>
                                <h2 className="font1 font-weight-normal text-uppercase mb-3">from <strong>$199</strong></h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 1100 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-dark btn-buy">BUY NOW</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="home-slide banner" style={ { backgroundImage: `url(images/home/slider/slide3.jpg)` } }>
                    <div className="banner-layer banner-layer-middle">
                        <div className="container banner-content">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                                <h2 className="font1 font-weight-normal text-uppercase mb-0">best price of the year</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                <h1 className="font1 font-weight-bold text-uppercase">top accessories</h1>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 }>
                                <h2 className="font1 font-weight-normal text-uppercase mb-3">from <strong>$19</strong></h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 1100 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-dark btn-buy">BUY NOW</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

            <div className="home-slider-sidebar d-none d-sm-block">
                <div className="container">
                    <ul>
                        <li className="active" onClick={ e => { changeMediaIndex( e, 0 ); } }>Drones</li>
                        <li onClick={ e => { changeMediaIndex( e, 1 ); } }>Phones</li>
                        <li onClick={ e => { changeMediaIndex( e, 2 ); } }>Accessories</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default React.memo( HomeSection );
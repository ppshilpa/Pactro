import React, { useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { Range } from 'react-range';

// Import Keyframes
import { fadeIn } from '../../../utils/data/keyframes';


function RotatingSection ( props ) {
    const [ priceRange, setRange ] = useState( [ 15 ] );

    function onChangePriceRange ( value ) {
        setRange( value );
        document.querySelector( '.product-sprite' ).style.transform = 'translateX(' + -1 * value[ 0 ] * 6.25 + '%)';
    }

    return (
        <section className="rotating-section" id="tour">
            <div className="heading-wrapper text-center">
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 }>
                    <h2 className="product-title">TOUR</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 }>
                    <h4 className="section-subtitle line-height-1">
                        <i className="left-angle"></i>360º VIRTUAL TOUR<i className="right-angle"></i>
                    </h4>
                </Reveal>
            </div>

            <svg className="position-absolute w-100 h-100 z-index-2 p-events-none" viewBox="0 0 120 120" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="120" r="100" stroke="#edeeee" strokeWidth="0.3" fill="transparent"
                    data-animation-name="customSVGLineAnimTwo" data-animation-delay="200">
                </circle>
            </svg>

            <div className="cd-product-viewer-wrapper loaded" data-frame="16" data-friction="0.33">
                <div onChange={ onChangePriceRange }>
                    <figure className="product-viewer">
                        <img src="images/home/rotate.jpg" width="1133" height="560"
                            alt="rotating-image" />
                        <div className="product-sprite" style={ { backgroundImage: 'url(images/home/product-360-sprite.jpg)' } }></div>
                    </figure>
                    <div className="cd-product-viewer-handle">
                        <div className="price-slider-wrapper">
                            <Range
                                step={ 1 }
                                min={ 0 }
                                max={ 15 }
                                values={ priceRange }
                                onChange={ onChangePriceRange }
                                renderTrack={ ( { props, children } ) => (
                                    <span
                                        { ...props }
                                        className="fill"
                                        style={ {
                                            ...props.style
                                        } }
                                    >
                                        { children }
                                        <span className="product-viewer-overlay"></span>
                                    </span>
                                ) }
                                renderThumb={ ( { props } ) =>
                                    (
                                        <div { ...props }>
                                            <span className="handle" style={ { ...props.style } }>

                                                <span className="bars"></span>
                                            </span>
                                        </div>
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RotatingSection;
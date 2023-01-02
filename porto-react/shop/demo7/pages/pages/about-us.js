import React, { useState } from 'react';
import LightBox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";
import { brandSlider2 } from '../../utils/data/slider';

export default function AboutUs () {
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const images = [ 'images/home/about/team1.jpg', 'images/home/about/team2.jpg', 'images/home/about/team3.jpg', 'images/home/about/team6.jpg' ];

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % images.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + images.length - 1 ) % images.length );
    }

    function openLightBox ( e, index ) {
        setOpenLB( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setOpenLB( false );
    }

    return (
        <main className="main about">
            <div className="page-header page-header-bg"
                style={ { background: "url(images/home/banners/banner-top.jpg)" } }>
                <div className="container text-left">
                    <h1 className="font4 text-white"><span className="text-white">SUCCESS WAY OF</span>OUR HISTORY</h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="about-section">
                <div className="container">
                    <h2 className="title">ABOUT US</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing.</p>
                </div>
            </div>
            <div className="brands-container brands-container-alt">
                <div className="container">
                    <OwlCarousel adClass="brands-slider owl-theme  nav-outer" options={ brandSlider2 }>
                        <img src="images/home/logoes/logo-1.png" width="245" height="45" alt="logo" />
                        <img src="images/home/logoes/logo-2.png" width="245" height="45" alt="logo" />
                        <img src="images/home/logoes/logo-3.png" width="245" height="45" alt="logo" />
                        <img src="images/home/logoes/logo-4.png" width="245" height="45" alt="logo" />
                        <img src="images/home/logoes/logo-5.png" width="245" height="45" alt="logo" />
                        <img src="images/home/logoes/logo-6.png" width="245" height="45" alt="logo" />
                    </OwlCarousel>
                </div>
            </div>
            <div className="team-section container">
                <h4 className="title-decorate text-center text-dark d-flex align-items-center">OUR TEAM</h4>
                <div className="row justify-content-center">
                    <div className="col-6 col-lg-3 col-md-4">
                        <div className="team-info">
                            <figure className="zoom-effect">
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/about/team1.jpg"
                                        alt="Team"
                                        width={ 270 }
                                        height={ 319 } />
                                </ALink>
                                <h5 className="team-name font4 mb-0">John Doe</h5>

                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 0 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 col-md-4">
                        <div className="team-info">
                            <figure className="zoom-effect">
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/about/team2.jpg"
                                        alt="Team"
                                        width={ 270 }
                                        height={ 319 } />
                                </ALink>

                                <h5 className="team-name font4 mb-0">Jessica Doe</h5>
                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 1 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4">
                        <div className="team-info">
                            <figure className="zoom-effect">
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/about/team3.jpg"
                                        alt="Team"
                                        width={ 270 }
                                        height={ 319 } />
                                </ALink>

                                <h5 className="team-name font4 mb-0">Rick Edward Doe</h5>
                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 2 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-4">
                        <div className="team-info">
                            <figure className="zoom-effect">
                                <ALink href="#">
                                    <LazyLoadImage
                                        className="w-100"
                                        src="images/home/about/team6.jpg"
                                        alt="Team"
                                        width={ 270 }
                                        height={ 319 } />
                                </ALink>
                                <h5 className="team-name font4 mb-0">Melissa Doe</h5>
                                <span className="prod-full-screen" onClick={ e => { openLightBox( e, 3 ); } }>
                                    <i className="fas fa-search"></i>
                                </span>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {
                openLB && (
                    <LightBox
                        mainSrc={ `${ images[ photoIndex ] }` }
                        prevSrc={ `${ images[ ( photoIndex + images.length - 1 ) % images.length ] }` }
                        nextSrc={ `${ images[ ( photoIndex + 1 ) % images.length ] }` }
                        onCloseRequest={ closeLightBox }
                        onMoveNextRequest={ moveNextPhoto }
                        onMovePrevRequest={ movePrevPhoto }
                    />
                )
            }
        </main>
    )
}
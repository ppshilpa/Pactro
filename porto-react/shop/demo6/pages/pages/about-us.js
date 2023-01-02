import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LightBox from 'react-image-lightbox';

import ALink from "../../components/common/ALink";

export default function AboutUs () {
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const images = [ 'images/home/about/team1.jpg', 'images/home/about/team2.jpg',
        'images/home/about/team3.jpg', 'images/home/about/team4.jpg', 'images/home/about/team5.jpg', 'images/home/about/team6.jpg', ];

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
            <div className="page-header page-header-bg text-left"
                style={ { background: '50%/cover #D4E1EA url(images/home/page-header-bg.jpg)' } }>
                <div className="container p-0">
                    <h1 className="text-white">ABOUT US</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="history-section row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <figure>
                            <LazyLoadImage
                                src='images/home/about/about-us-history.jpg'
                                alt='history'
                                width={ 717 }
                                height={ 342 }
                            />
                        </figure>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="row">
                            <h3 className="col-12 about-title">OUR HISTORY</h3>
                            <div className="col-xl-5">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry’s standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus
                                </p>
                            </div>
                            <div className="offset-xl-1 col-xl-5 offset-xl-0">
                                <p>
                                    Been the industry’s standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived
                                    not
                                    only five centuries It was popularised in the 1960s with the release of Letraset
                                    sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software
                                    like
                                    Aldus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <div className="container-fluid">
                    <div className="heading mb-3">
                        <h2 className="about-title text-center">OUR SPECIAL FEATURES</h2>
                        <p className="text-center mb-0">Lorem ipsum is simply dummy text</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6">
                            <div className="feature-box bg-white text-center">
                                <i className="icon-support"></i>

                                <div className="feature-box-content text-left p-0">
                                    <h3>ONLINE SUPPORT</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="feature-box bg-white text-center">
                                <i className="icon-shipping"></i>

                                <div className="feature-box-content text-left p-0">
                                    <h3>FREE SHIPPING & RETURN</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="feature-box bg-white text-center">
                                <i className="icon-money"></i>

                                <div className="feature-box-content text-left p-0">
                                    <h3>MONEY BACK GUARANTEE</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="feature-box bg-white text-center">
                                <i className="icon-cat-shirt"></i>

                                <div className="feature-box-content text-left p-0">
                                    <h3>NEW STYPES EVERY DAY</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="team-section">
                    <div className="heading mb-3">
                        <h2 className="about-title text-center">OUR TEAM</h2>
                        <p className="text-center">Lorem ipsum is simply dummy text</p>
                    </div>

                    <div className="row justify-content-center  post-date-in-media media-with-zoom">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="team-info">
                                <figure className="zoom-effect">
                                    <ALink href="#">
                                        <img src="images/home/about/team1.jpg" className="w-100" width="270" height="319" alt="Team" />
                                    </ALink>
                                    <h5 className="team-name font4 mb-0">John Doe</h5>

                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 0 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="team-info">
                                <figure className="zoom-effect">
                                    <ALink href="#">
                                        <img src="images/home/about/team2.jpg" className="w-100" width="270" height="319" alt="Team" />
                                    </ALink>

                                    <h5 className="team-name font4 mb-0">Jessica Doe</h5>
                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 1 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="team-info">
                                <figure className="zoom-effect">
                                    <ALink href="#">
                                        <img src="images/home/about/team3.jpg" className="w-100" width="270" height="319" alt="Team" />
                                    </ALink>

                                    <h5 className="team-name font4 mb-0">Rick Edward Doe</h5>
                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 2 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            </div>

                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="team-info">
                                <figure className="zoom-effect">
                                    <ALink href="#">
                                        <img src="images/home/about/team4.jpg" className="w-100" width="270" height="319" alt="Team" />
                                    </ALink>

                                    <h5 className="team-name font4 mb-0">Henry Doe</h5>

                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 3 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="team-info">
                                <figure className="zoom-effect">
                                    <ALink href="#">
                                        <img src="images/home/about/team5.jpg" className="w-100" width="270" height="319" alt="Team" />
                                    </ALink>

                                    <h5 className="team-name font4 mb-0">Robert Doe</h5>

                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 4 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="team-info">
                                <figure className="zoom-effect">
                                    <ALink href="#">
                                        <img src="images/home/about/team6.jpg" className="w-100" width="270" height="319" alt="Team" />
                                    </ALink>
                                    <h5 className="team-name font4 mb-0">Melissa Doe</h5>
                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 5 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials-section">
                    <div className="heading">
                        <h2 className="about-title text-center">TESTIMONIALS</h2>
                        <p className="text-center mb-0">What our client says about us</p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 offset-xl-1 col-xl-10">
                            <div className="row">
                                <div className="col-md-6 mb-md-0 mb-7">
                                    <div className="testimonial">
                                        <blockquote className="ml-0">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem
                                            Ipsum has been the industry’s standard dummy text ever since the
                                            1500s,
                                            when an
                                                unknown printer took a galley of type and scrambled.</p>
                                        </blockquote>

                                        <div className="testimonial-owner">
                                            <figure>
                                                <LazyLoadImage
                                                    src='images/home/clients/client-1.jpg'
                                                    alt='client'
                                                    width={ 25 }
                                                    height={ 25 }
                                                />
                                            </figure>

                                            <div>
                                                <strong className="testimonial-title font4">John Smith</strong>
                                                <span>CEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="testimonial">
                                        <blockquote className="ml-0">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem
                                            Ipsum has been the industry’s standard dummy text ever since the
                                            1500s,
                                            when an
                                                unknown printer took a galley of type and scrambled.</p>
                                        </blockquote>

                                        <div className="testimonial-owner">
                                            <figure>
                                                <LazyLoadImage
                                                    src='images/home/clients/client-2.jpg'
                                                    alt='client'
                                                    width={ 25 }
                                                    height={ 25 }
                                                />
                                            </figure>

                                            <div>
                                                <strong className="testimonial-title font4">BRENDA DOE</strong>
                                                <span>FOUNDER</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
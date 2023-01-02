import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LightBox from 'react-image-lightbox';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";
import ShopSidebarThree from '../../components/partials/shop/sidebar/shop-sidebar-three';

export default function AboutUs () {
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const images = [ 'images/home/team/team2.jpg', 'images/home/team/team1.jpg', 'images/home/team/team3.jpg', 'images/home/team/team4.jpg', 'images/home/team/team1.jpg' ];

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
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-0">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="main-container mt-3">
                <div className="container-fluid">
                    <ShopSidebarThree adClass="mb-2 mb-md-0" />

                    <div class="banner">
                        <figure>
                            <LazyLoadImage
                                alt="page-header"
                                src="images/home/top-bg.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height={ 398 }
                            />
                        </figure>
                    </div>

                    <section className="about-section">
                        <h2 className="subtitle text-center text-uppercase">About Us</h2>

                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                                <p className="text-center mb-0">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages</p>
                            </div>
                        </div>
                    </section>

                    <hr />

                    <section className="team-section">
                        <h2 className="section-title text-uppercase">Our Team</h2>

                        <div className="grid row">
                            <div className="grid-item grid-col-sizer col-6 col-md-4 col-lg-3 col-5col-1 mb-2">
                                <div className="team-info media-with-lazy">
                                    <figure className="zoom-effect">
                                        <ALink href="#">
                                            <LazyLoadImage
                                                alt="Team"
                                                src="images/home/team/team2.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </ALink>

                                        <span className="prod-full-screen" onClick={ e => { openLightBox( e, 0 ); } }>
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </figure>

                                    <h5 className="team-name mb-0 text-center">John Doe</h5>
                                    <p className="text-center">Leader</p>
                                </div>
                            </div>
                            <div className="grid-item col-6 col-md-4 col-lg-3 col-5col-1 mb-2">
                                <div className="team-info media-with-lazy">
                                    <figure className="zoom-effect">
                                        <ALink href="#">
                                            <LazyLoadImage
                                                alt="Team"
                                                src="images/home/team/team1.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </ALink>

                                        <span className="prod-full-screen" onClick={ e => { openLightBox( e, 1 ); } }>
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </figure>

                                    <h5 className="team-name mb-0 text-center">Jessica Doe</h5>
                                    <p className="text-center">Marketing Manager</p>
                                </div>
                            </div>
                            <div className="grid-item col-6 col-md-4 col-lg-3 col-5col-1 mb-2">
                                <div className="team-info media-with-lazy">
                                    <figure className="zoom-effect">
                                        <ALink href="#">
                                            <LazyLoadImage
                                                alt="Team"
                                                src="images/home/team/team3.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </ALink>

                                        <span className="prod-full-screen" onClick={ e => { openLightBox( e, 2 ); } }>
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </figure>

                                    <h5 className="team-name mb-0 text-center">Rick Edward Doe</h5>
                                    <p className="text-center">Web Developer</p>
                                </div>
                            </div>
                            <div className="grid-item col-6 col-md-4 col-lg-3 col-5col-1 mb-2">
                                <div className="team-info media-with-lazy">
                                    <figure className="zoom-effect">
                                        <ALink href="#">
                                            <LazyLoadImage
                                                alt="Team"
                                                src="images/home/team/team4.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </ALink>

                                        <span className="prod-full-screen" onClick={ e => { openLightBox( e, 3 ); } }>
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </figure>

                                    <h5 className="team-name mb-0 text-center">Melinda Wolosky</h5>
                                    <p className="text-center">Web Designer</p>
                                </div>
                            </div>

                            <div className="grid-item col-6 col-md-4 col-lg-3 col-5col-1 mb-2">
                                <div className="team-info media-with-lazy">
                                    <figure className="zoom-effect">
                                        <ALink href="#">
                                            <LazyLoadImage
                                                alt="Team"
                                                src="images/home/team/team2.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </ALink>

                                        <span className="prod-full-screen" onClick={ e => { openLightBox( e, 0 ); } }>
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </figure>

                                    <h5 className="team-name mb-0 text-center">Robert Doe</h5>
                                    <p className="text-center">App Developer</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="testimonials-section">
                        <h2 className="subtitle text-center text-uppercase">HAPPY CLIENTS</h2>

                        <OwlCarousel adClass="testimonials-slider mb-2" options={ {
                            margin: 20,
                            nav: false,
                            dots: false,
                            responsive: {
                                0: {
                                    items: 1
                                },
                                992: {
                                    items: 2
                                }
                            }
                        } }>
                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-md-4 col-lg-2 text-center text-md-right">
                                        <figure>
                                            <LazyLoadImage src="images/clients/client1.png" alt="client" width="40" height="40" />
                                        </figure>
                                    </div>

                                    <div className="col-lg-10 text-center text-md-left">
                                        <blockquote>
                                            <p>Remaining essentially unchanged. It was popularised in the 1960s with the
                                            release of Letraset sheets containing Lorem Ipsum passages, and more
                                                recently with desktop publishing software.</p>

                                            <ALink href="#">
                                                <strong className="testimonial-title">John Smith Doe</strong>
                                                <span className="d-inline-block">CEO</span>
                                            </ALink>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-md-4 col-lg-2 text-center text-md-right">
                                        <figure>
                                            <LazyLoadImage src="images/clients/client2.png" alt="client" width="40" height="40" />
                                        </figure>
                                    </div>

                                    <div className="col-lg-10 text-center text-md-left">
                                        <blockquote>
                                            <p>Remaining essentially unchanged. It was popularised in the 1960s with the
                                            release of Letraset sheets containing Lorem Ipsum passages, and more
                                                recently with desktop publishing software.</p>

                                            <ALink href="#">
                                                <strong className="testimonial-title">Bob Smith Doe</strong>
                                                <span className="d-inline-block">Founder</span>
                                            </ALink>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    <section className="brands-section">
                        <h2 className="subtitle text-center text-uppercase mb-3">Our Partners</h2>

                        <div className="container">
                            <OwlCarousel adClass="brands-slider mb-2" options={ {
                                margin: 0,
                                nav: true,
                                dots: false,
                                responsive: {
                                    0: {
                                        items: 2
                                    },
                                    576: {
                                        items: 3
                                    },
                                    992: {
                                        items: 4
                                    },
                                    992: {
                                        items: 5
                                    },
                                    1200: {
                                        items: 5
                                    }
                                }
                            } }>
                                <img src="images/home/logos/logo-1.png" width="245" height="45"
                                    alt="brand" />
                                <img src="images/home/logos/logo-2.png" width="245" height="45"
                                    alt="brand" />
                                <img src="images/home/logos/logo-3.png" width="245" height="45"
                                    alt="brand" />
                                <img src="images/home/logos/logo-4.png" width="245" height="45"
                                    alt="brand" />
                                <img src="images/home/logos/logo-5.png" width="245" height="45"
                                    alt="brand" />
                                <img src="images/home/logos/logo-6.png" width="245" height="45"
                                    alt="brand" />

                            </OwlCarousel>
                        </div>
                    </section>
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
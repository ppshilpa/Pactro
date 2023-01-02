import React, { useState } from 'react';
import LightBox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";

function AboutUs () {
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const images = [ 'images/home/team/team1.jpg', 'images/home/team/team2.jpg', 'images/home/team/team3.jpg', 'images/home/team/team4.jpg' ];

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
            <div className="container">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>

            <section className="about-section">
                <div className="container">
                    <h2 className="section-title text-uppercase">Who We Are</h2>

                    <div className="row">
                        <div className="col-lg-8">
                            <p className="pr-lg-4">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. posuere cubilia Curae; In eu libero
                            ligula. Fusce eget metus lorem, ac viverra leo. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus
                            lorem, ac viverra leo. desktop publishing software like Aldus PageMaker including
                            versions. was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-boxes-container">
                                <div className="feature-box text-center mb-0">
                                    <i className="icon-shipped"></i>

                                    <div className="feature-box-content">
                                        <h3 className="text-uppercase">Free Shipping &amp; Return</h3>
                                        <p className="mb-0">Free shipping on all orders over $99.</p>
                                    </div>
                                </div>
                                <div className="feature-box text-center mb-0">
                                    <i className="icon-us-dollar"></i>

                                    <div className="feature-box-content">
                                        <h3 className="text-uppercase">Money Back Guarantee</h3>
                                        <p className="mb-0">100% money back guarantee</p>
                                    </div>
                                </div>
                                <div className="feature-box text-center mb-0">
                                    <i className="icon-online-support"></i>

                                    <div className="feature-box-content">
                                        <h3 className="text-uppercase">Online Support 24/7</h3>
                                        <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <h2 className="section-title text-uppercase">Our Team</h2>

                    <div className="grid row">
                        <div className="grid-item col-sm-6 col-md-4 col-xl-3 mb-2">
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

                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 0 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>

                                <h5 className="team-name mt-2 mb-1 text-center text-uppercase"><ALink href="#">Jane Doe</ALink></h5>
                            </div>
                        </div>
                        <div className="grid-item grid-col-sizer col-sm-6 col-md-4 col-xl-3 mb-2">
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

                                    <span className="prod-full-screen" onClick={ e => { openLightBox( e, 1 ); } }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>

                                <h5 className="team-name mt-2 mb-1 text-center text-uppercase"><ALink href="#">John Doe</ALink></h5>
                            </div>
                        </div>
                        <div className="grid-item col-sm-6 col-md-4 col-xl-3 mb-2">
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

                                <h5 className="team-name mt-2 mb-1 text-center text-uppercase"><ALink href="#">George Doe</ALink>
                                </h5>
                            </div>
                        </div>
                        <div className="grid-item col-sm-6 col-md-4 col-xl-3 mb-2">
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

                            </div>
                            <h5 className="team-name mt-2 mb-1 text-center text-uppercase"><ALink href="#">Alice Doe</ALink></h5>
                        </div>
                    </div>

                    <div className="view-more-container text-center">
                        <ALink href="#" className="btn btn-dark">View More</ALink>
                    </div>
                </div>
            </section>

            <section className="history-section mb-3">
                <div className="container">
                    <h2 className="section-title text-uppercase">Our History</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="history">
                                <div className="row no-gutters m-0">
                                    <div className="col-sm-auto">
                                        <figure>
                                            <LazyLoadImage
                                                alt="history"
                                                src="images/home/history/history-1.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 248 }
                                            />
                                            <h3 className="mb-0">2000</h3>
                                        </figure>
                                    </div>
                                    <div className="col">
                                        <div className="history-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                                since the 1500s, when an unknown printer took.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="history">
                                <div className="row no-gutters m-0">
                                    <div className="col-sm-auto">
                                        <figure>
                                            <LazyLoadImage
                                                alt="history"
                                                src="images/home/history/history-2.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 248 }
                                            />
                                            <h3 className="mb-0">2010</h3>
                                        </figure>
                                    </div>
                                    <div className="col">
                                        <div className="history-content">
                                            <p>
                                                Readable English. Many desktop publishing packages and web page editors
                                                now use Lorem Ipsum as their default model text, and a search for ‘lorem
                                                ipsum’ will uncover many web sites.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="history">
                                <div className="row no-gutters m-0">
                                    <div className="col-sm-auto">
                                        <figure>
                                            <LazyLoadImage
                                                alt="history"
                                                src="images/home/history/history-3.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 248 }
                                            />
                                            <h3 className="mb-0">2015</h3>
                                        </figure>
                                    </div>
                                    <div className="col">
                                        <div className="history-content">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don’t look even slightly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="history">
                                <div className="row no-gutters m-0">
                                    <div className="col-sm-auto">
                                        <figure>
                                            <LazyLoadImage
                                                alt="history"
                                                src="images/home/history/history-4.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 248 }
                                            />
                                            <h3>2021</h3>
                                        </figure>
                                    </div>
                                    <div className="col">
                                        <div className="history-content">
                                            <p>
                                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                                below for those interested. Sections 1.10.32 and 1.10.33 from “de
                                                Finibus Bonorum et Malorum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default React.memo( AboutUs );
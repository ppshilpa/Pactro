import AnchorLink from 'react-anchor-link-smooth-scroll';
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Settigs
import { fadeInRightShorter, fadeInUpShorter } from '../../../utils/data/keyframes'

function BannerSectionTwo () {
    return (
        <section className="section-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 img-wrapper">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <figure>
                                <LazyLoadImage
                                    alt="brand"
                                    src="images/home/banner/3.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                        </Reveal>
                    </div>

                    <div className="col-lg-6 order-lg-first">
                        <div className="section-body">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                                <h2 className="product-title mb-2">BLUETOOTH CONNECTION</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                                <p className="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 900 } duration={ 1000 } triggerOnce>
                                <div className="mb-2 scrolling-box">
                                    <AnchorLink className="btn btn-rounded with-border" href="#testimonial" offset="50">testimonials</AnchorLink>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( BannerSectionTwo );
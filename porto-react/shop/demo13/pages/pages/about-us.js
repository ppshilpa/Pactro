import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";

export default function AboutUs() {
    return (
        <main className="main">
            <div className="page-header">
                <div className="container">
                    <h1 className="heading text-white text-uppercase">About Us</h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>
            <section className="info-section">
                <h2 className="d-none">history & reviews</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 history-section">
                            <h3 className="section-heading">our history</h3>
                            <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                            dapibus a eros in venenatis. Cras mauris arcu, suscipit
                            id lacinia sed, pulvinar in urna. Donec urna nisi, efficitur fermentum ullamcorper non,
                            mattis et est. Nullam malesuada
                            leo leo, non tempus turpis accumsan a. Sed tincidunt feugiat purus, sed lobortis justo
                            consequat in. Phasellus lectus
                            magna, accumsan eget felis in, hendrerit malesuada lectus. Duis orci nunc, vulputate vel
                            sapien nec, sodales sollicitudin
                            ligula.
							</p>
                        </div>
                        <div className="col-lg-6 testimonial about-test">
                            <h3 className="section-heading">client reviews</h3>
                            <div className="testimonial-owner">
                                <figure>
                                    <LazyLoadImage
                                        alt="client"
                                        src="images/clients/client-1.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                        style={{ borderRadius: '50%' }}
                                    />
                                </figure>
                                <div>
                                    <strong className="testimonial-title">John Smith</strong>
                                    <span>SMARTWAVE CEO</span>
                                </div>
                            </div>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
                                dolor sit amet, consectetur elitad
									adipiscing cas non placerat mi.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery-section with-bg">
                <div className="container">
                    <h3 className="section-heading">photo gallery</h3>
                    <OwlCarousel adClass="owl-theme" options={{
                        nav: false,
                        dots: false,
                        margin: 30,
                        loop: false,
                        responsive: {
                            480: {
                                items: 2
                            },
                            768: {
                                items: 3
                            },
                            992: {
                                items: 4
                            }
                        }
                    }}>
                        <figure>
                            <LazyLoadImage
                                alt="blog"
                                src="images/home/about/gallery1.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="blog"
                                src="images/home/about/gallery2.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="blog"
                                src="images/home/about/gallery3.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="blog"
                                src="images/home/about/gallery4.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>
                    </OwlCarousel>
                </div>
            </section>
            <section className="detail-info-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <figure>
                                <LazyLoadImage
                                    className="lg-img"
                                    alt="blog"
                                    src="images/home/about/img-1.jpg"
                                    effect="black and white"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>
                        </div>
                        <div className="col-lg-6 info-body">
                            <div className="info-item">
                                <h4 className="section-heading">our mission</h4>
                                <p className="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled.
								</p>
                            </div>
                            <div className="info-item">
                                <h4 className="section-heading">our vision</h4>
                                <p className="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled.
								</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-section with-bg">
                <div className="container">
                    <OwlCarousel adClass="owl-theme" options={{
                        nav: false,
                        dots: false,
                        margin: 30,
                        loop: false,
                        responsive: {
                            0: {
                                items: 1
                            },
                            576: {
                                items: 2
                            },
                            992: {
                                items: 3
                            }
                        }
                    }}>
                        <div className="feature-box">
                            <i className="icon-shipped"></i>

                            <div className="feature-box-content p-0">
                                <h3>Free Shipping</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                        </div>
                        <div className="feature-box">
                            <i className="icon-us-dollar"></i>

                            <div className="feature-box-content p-0">
                                <h3>100% Money Back Guarantee</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                        </div>
                        <div className="feature-box">
                            <i className="icon-online-support"></i>

                            <div className="feature-box-content p-0">
                                <h3>Online Support 24/7</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </main>
    )
}
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";
import { countTo } from '../../utils';

export default function AboutUs () {
    useEffect( () => {
        countTo();
    }, [] )

    return (
        <main className="main about">
            <div className="page-header page-header-bg text-left" style={ { backgroundImage: 'url(images/home/page-header-bg.jpg)', backgroundColor: '#111' } } >
                <div className="container-fluid">
                    <h1 className="text-white"><span className="text-white">History</span>About Us</h1>
                </div>
            </div>

            <div className="about-section bg-gray">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <LazyLoadImage src="images/home/about.jpg" alt="About" width="100%" height={ 446 } />
                        </div>

                        <div className="col-lg-6 padding-left-lg">
                            <h2 className="subtitle">WHO WE ARE</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry’s standard dummy text ever since the 1500s, when an unknown
                            printer toofa k a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages</p>

                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Nulla id nisi a nulla rhoncus sodales et ac lectus.</li>
                                <li>In sagittis diam et lorem egestas, ac sodales dolor venenatis.</li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="subtitle mb-2">OUR MISSION</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a Finibus Bonorum et Malorum,</p>
                        </div>

                        <div className="col-md-4">
                            <h2 className="subtitle mb-2">OUR VISION</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a Finibus Bonorum et Malorum,</p>
                        </div>

                        <div className="col-md-4">
                            <h2 className="subtitle mb-2">OUR VALUE</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a Finibus Bonorum et Malorum,</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counters-section" style={ { backgroundImage: 'url(images/home/bg-counters.jpg)', backgroundColor: '#111' } }>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-4 count-container text-center">
                            <div className="count-wrapper">
                                <span className="count-to" data-from="0" data-to="32561" data-speed="2000"
                                    data-refresh-interval="50">32561</span><span>M+</span>
                            </div>
                            <h4 className="count-title">Sold Products</h4>
                        </div>

                        <div className="col-6 col-md-4 count-container text-center">
                            <div className="count-wrapper">
                                <span className="count-to" data-from="0" data-to="42561" data-speed="2000"
                                    data-refresh-interval="50">42561</span><span>M+</span>
                            </div>
                            <h4 className="count-title">Happy Buyers</h4>
                        </div>

                        <div className="col-6 col-md-4 count-container text-center">
                            <div className="count-wrapper line-height-1">
                                <span className="count-to" data-from="0" data-to="866" data-speed="2000"
                                    data-refresh-interval="50">866</span><span>M+</span>
                            </div>
                            <h4 className="count-title">Employees</h4>
                        </div>

                        <div className="col-6 col-md-4 count-container text-center">
                            <div className="count-wrapper">
                                <span className="count-to" data-from="0" data-to="58584" data-speed="2000"
                                    data-refresh-interval="50">58584</span>+
							</div>
                            <h4 className="count-title">Products</h4>
                        </div>

                        <div className="col-6 col-md-4 count-container text-center">
                            <div className="count-wrapper line-height-1">
                                <span className="count-to" data-from="0" data-to="24" data-speed="2000"
                                    data-refresh-interval="50">24</span><span>HR+</span>
                            </div>
                            <h4 className="count-title">Support Available</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-section">
                <div className="container-fluid">
                    <h2 className="subtitle text-center">BUYERS REVIEW</h2>

                    <OwlCarousel adClass="testimonials-slider" options={ { nav: true, dots: false } }>
                        <div className="testimonial">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make.</p>

                            <h4>Client Name</h4>
                        </div>

                        <div className="testimonial">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make.</p>

                            <h4>Client Name</h4>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="info-boxes-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="info-box">
                                <i className="icon-support"></i>

                                <div className="info-box-content">
                                    <h4>ONLINE SUPPORT</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="info-box">
                                <i className="icon-shipping"></i>

                                <div className="info-box-content">
                                    <h4>FREE SHIPPING & RETURN</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="info-box">
                                <i className="icon-money"></i>

                                <div className="info-box-content">
                                    <h4>MONEY BACK GUARANTEE</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="info-box">
                                <i className="icon-cat-shirt"></i>

                                <div className="info-box-content">
                                    <h4>NEW STYLES EVERY DAY</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
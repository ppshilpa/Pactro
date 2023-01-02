import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settigns
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'

function WelcomeSection ( { product } ) {
    return (
        <section className="welcome-section">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 500 } triggerOnce>
                    <h2 className="section-title text-center text-uppercase">Welcome to little Porto&rsquo;s world</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 500 } triggerOnce>
                    <p className="section-description text-center mb-3">Enjoy the exceptional quality in all our products</p>
                </Reveal>

                <div className="row mb-2">
                    <div className="col-md-8 col-lg-6">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <div className="banner banner1 mb-2">
                                <figure>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-1.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 374 }
                                    />
                                </figure>

                                <div className="banner-layer d-flex flex-column align-items-end justify-content-center">
                                    <div className="text-justify">
                                        <h3 className="font4 font-weight-bold ls-n-25 text-uppercase mb-0">Discounts</h3>
                                        <h4 className="ls-n-25 text-uppercase">Up to 70%</h4>
                                        <ALink href="/shop" className="btn btn-link">
                                            <i>View our Deals</i>
                                            <i className="icon-right-open-big"></i>
                                        </ALink>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <div className="banner banner2 mb-2">
                                <figure>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-2.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 374 }
                                    />
                                </figure>

                                <div className="banner-layer d-flex flex-column align-items-center justify-content-end">
                                    <h2 className="ls-n-25 text-uppercase">Summer classics</h2>
                                    <ALink href="/shop" className="btn btn-link">
                                        <i>View our Classics</i>
                                        <i className="icon-right-open-big"></i>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <div className="banner banner3 mb-2">
                                <figure>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-3.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 374 }
                                    />
                                </figure>

                                <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                                    <h2 className="font-weight-bold ls-n-25 text-center text-uppercase">Mother &amp;
                                        Daughter</h2>
                                    <ALink href="/shop" className="btn btn-link">
                                        <i>View our Outfits</i>
                                        <i className="icon-right-open-big"></i>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <div className="banner banner4 mb-2">
                                <figure>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-4.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 374 }
                                    />
                                </figure>

                                <div className="banner-layer d-flex flex-column align-items-center">
                                    <h2 className="ls-n-25 text-uppercase">Babies Outfits</h2>
                                    <ALink href="/shop" className="btn btn-link">
                                        <i>View our Outfits</i>
                                        <i className="icon-right-open-big"></i>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <div className="banner banner5 mb-2">
                                <figure>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-5.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 374 }
                                    />
                                </figure>

                                <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                                    <h2 className="ls-n-25 text-uppercase">Babies dresses</h2>
                                    <ALink href="/shop" className="btn btn-link">
                                        <i>View our Dresses</i>
                                        <i className="icon-right-open-big"></i>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-8 col-lg-6">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                            <div className="banner banner6 mb-2">
                                <figure>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="product"
                                        src="images/home/banners/banner-6.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height={ 374 }
                                    />
                                </figure>

                                <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                                    <h2 className="ls-n-25 text-uppercase">Shoes for Babies</h2>
                                    <ALink href="/shop" className="btn btn-link">
                                        <i>View our Deals</i>
                                        <i className="icon-right-open-big"></i>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="info-boxes-container">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 500 } triggerOnce>
                        <div className="row m-0">
                            <div className="info-box info-box-icon-left col-md-4">
                                <i className="icon-shipping"></i>

                                <div className="info-box-content">
                                    <h4 className="ls-n-25">FREE SHIPPING &amp; RETURN</h4>
                                    <p className="font2 font-weight-light">Free shipping on all orders over $99.</p>
                                </div>
                            </div>

                            <div className="info-box info-box-icon-left col-md-4">
                                <i className="icon-money"></i>

                                <div className="info-box-content">
                                    <h4 className="ls-n-25">MONEY BACK GUARANTEE</h4>
                                    <p className="font2 font-weight-light">100% money back guarantee</p>
                                </div>
                            </div>

                            <div className="info-box info-box-icon-left col-md-4">
                                <i className="icon-support"></i>

                                <div className="info-box-content">
                                    <h4 className="ls-n-25">ONLINE SUPPORT 24/7</h4>
                                    <p className="font2 font-weight-light">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 500 } triggerOnce>
                    <div className="row">
                        {
                            product ?
                                product.slice( 0, 4 ).map( ( item, index ) => (
                                    <div className="col-6 col-md-4 col-xl-3" key={ "Featured Product:" + index }>
                                        <ProductOne product={ item } adClass="inner-quickview inner-icon" />
                                    </div>
                                ) )
                                :
                                new Array( 4 ).fill( 1 ).map( ( item, index ) => (
                                    <div className="col-6 col-md-4 col-xl-3" key={ "Featured Product:" + index }>
                                        <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                    </div>
                                ) )
                        }

                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default React.memo( WelcomeSection );
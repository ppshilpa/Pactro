import React, { useState, useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Keyframes
import { fadeIn, fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    const router = useRouter();
    const [ category, setCategory ] = useState( "" );
    const [ brand, setBrand ] = useState( "" );

    function onCategory ( value ) {
        router.push( { pathname: '/shop', query: { category: value } } );
    }

    function onBrand ( value ) {
        router.push( { pathname: '/shop', query: { brands: value } } );
    }

    return (
        <section className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-2">
                        <div className="banner banner1">
                            <figure>
                                <LazyLoadImage
                                    alt="Home Banner"
                                    src="images/home/banners/banner-1.jpg"
                                    threshold={ 500 }
                                    effect="black and white"
                                    width="100%"
                                    height={ 464 }
                                />
                            </figure>

                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 }>
                                    <>
                                        <h3 className="text-body m-b-1">Save Big Sale</h3>
                                        <h4 className="d-flex align-items-center text-uppercase">50%<small className="d-inline-block">Off</small></h4>
                                        <h5>
                                            <span className="d-inline-block align-top ls-n-20 text-uppercase">Starting At</span>
                                            <b className="coupon-sale-text d-inline-block ls-n-20 text-primary mb-0"><sup>$</sup>199<sup>99</sup></b>
                                        </h5>
                                        <ALink href="/shop" className="btn btn-sm text-uppercase ls-10">Shop Now</ALink>
                                    </>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-sm-6 mb-2">
                                <div className="find-form d-flex flex-column justify-content-center h-100">
                                    <h3 className="line-height-1 ls-n-10 text-center text-uppercase text-white m-b-3">Find A
                                    Product</h3>
                                    <form className="mb-0" action="#" method="get">
                                        <div className="select-custom">
                                            <select className="form-control" onChange={ e => onCategory( e.target.value ) }>
                                                <option value="">Select a category</option>
                                                <option value="accessories-1">Accessories</option>
                                                <option value="caps">Caps</option>
                                                <option value="watches">Watches</option>
                                                <option value="beauty">Beauty</option>
                                                <option value="decor">Decor</option>
                                                <option value="fashion">Fashion</option>
                                                <option value="shoes">Shoes</option>
                                                <option value="footwear">Footwear</option>
                                                <option value="headphone">Headphone</option>
                                                <option value="toys">Toys</option>
                                            </select>
                                        </div>

                                        <div className="select-custom mb-0">
                                            <select className="form-control mb-0" onChange={ e => onBrand( e.target.value ) }>
                                                <option value="">By brand</option>
                                                <option value="adidas">Adidas</option>
                                                <option value="calvin-klein">Calvin Klein</option>
                                                <option value="diesel">Diesel</option>
                                                <option value="lacoste">Lacoste</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-6 mb-2">
                                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 }>
                                    <div className="banner banner2">
                                        <figure>
                                            <LazyLoadImage
                                                alt="Home Banner"
                                                src="images/home/banners/banner-2.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height={ 222 }
                                            />
                                        </figure>

                                        <div className="banner-layer banner-layer-middle banner-layer-right text-right">
                                            <h3 className="ls-10 text-uppercase m-b-3">Electronic<br />Deals</h3>
                                            <div className="coupon-sale-text d-inline-block text-left">
                                                <h4 className="font1 d-block text-white bg-dark ls-10">Exclusive COUPON</h4>
                                                <h5 className="mb-0 font1 d-inline-block bg-dark"><i className="text-dark ls-0">UP
                                                TO</i><b className="text-white">$100</b><sub className="text-dark">OFF</sub>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default React.memo( HomeSection );
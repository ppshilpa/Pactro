import React, { useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import ProductFour from '../../features/products/product-four';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function HomeSection ( { product } ) {
    const router = useRouter();
    const [ color, setColor ] = useState( "" );
    const [ size, setSize ] = useState( "" );
    const [ range, setRange ] = useState( "" );

    function filterHandler ( e ) {
        e.preventDefault();
        let query = {};

        if ( range !== '' ) {
            let value = range.split( ',' );
            query.min_price = value[ 0 ];
            query.max_price = value[ 1 ];
        }

        color !== '' && ( query.colors = color );
        size !== '' && ( query.sizes = size );

        router.push( { pathname: '/shop', query: query } );
    }

    return (
        <section className="mb-2">
            <div className="row">
                <div className="col-lg-6">
                    <div className="home-banner">
                        <div className="row m-0">
                            <div className="col-sm-6 p-0 pr-sm-2 d-flex align-items-center justify-content-center justify-content-lg-end text-center text-sm-right">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                                    <div className="banner-content">
                                        <span>An entire week to enjoy all offers</span>
                                        <h3 className="ls-0">The Week</h3>
                                        <h4 className="ls-0">Gift Shop</h4>
                                        <ALink href="/shop" className="btn">SHOP NOW</ALink>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="col-sm-6 p-0">
                                <OwlCarousel adClass="dots-small pb-5 pb-lg-0" options={ HomeSlider }>
                                    {
                                        product ?
                                            product.slice( 0, 3 ).map( ( item, index ) => (
                                                <ProductFour
                                                    product={ item }
                                                    key={ "product-one" + index }
                                                />
                                            ) )
                                            :
                                            <div className="skel-pro skel-pro-grid" ></div>
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="home-banner2 text-center">
                        <h3 className="mb-0">Flash Sale Running!</h3>

                        <div className="banner-content">
                            <div className="product-panel">
                                <div className="product-default media-with-lazy d-block mt-0">
                                    <figure className="mb-0">
                                        <ALink href="/product/default/teddy-bear-blue">
                                            <LazyLoadImage
                                                alt="product"
                                                src="images/home/products/400x400/product-1.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </ALink>
                                    </figure>

                                    <div className="product-details">
                                        <h2 className="product-title">
                                            <ALink href="/product/default/teddy-bear-blue">Teddy Bear Blue</ALink>
                                        </h2>

                                        <div className="price-box">
                                            <span className="old-price">$59.00</span>
                                            <span className="product-price">$49.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ALink href="/shop" className="btn">SHOP SALE NOW</ALink>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="home-banner3 text-center" style={ { backgroundImage: 'url(images/home/banners/banner3.jpg)' } }>
                        <h3 className="ls-10">Gift Finder<br /><span>Find the Perfect Gift</span></h3>
                        <div className="select-box">
                            <div className="select-custom">
                                <select className="form-control" onChange={ e => setRange( e.target.value ) }>
                                    <option value="">Price Range</option>
                                    <option value="0,100">0 - 100</option>
                                    <option value="100,200">100 - 200</option>
                                    <option value="200,500">200 - 500</option>
                                </select>
                            </div>

                            <div className="select-custom">
                                <select className="form-control" onChange={ e => setColor( e.target.value ) }>
                                    <option value="">By color</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="black">Black</option>
                                </select>
                            </div>

                            <div className="select-custom">
                                <select className="form-control" onChange={ e => setSize( e.target.value ) }>
                                    <option value="">By size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary" onClick={ filterHandler }>VIEW SUGGESTIONS</a>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 }>
                        <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner1.jpg)' } } >
                            <div className="banner-content">
                                <h3>GIFTS $10</h3>
                                <span>& under</span>
                                <ALink href="/shop">SHOP NOW</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 }>
                        <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner2.jpg)' } } >
                            <div className="banner-content">
                                <h3>GIFTS $20</h3>
                                <span>& under</span>
                                <ALink href="/shop">SHOP NOW</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 }>
                        <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner3.jpg)' } } >
                            <div className="banner-content">
                                <h3>GIFTS $50</h3>
                                <span>& under</span>
                                <ALink href="/shop">SHOP NOW</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 }>
                        <div className="home-banner4 mb-2" style={ { backgroundImage: 'url(images/home/banners/home-banner4.jpg)' } } >
                            <div className="banner-content">
                                <h3>GIFTS $99</h3>
                                <span>& under</span>
                                <ALink href="/shop">SHOP NOW</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div >
        </section >
    );
}

export default React.memo( HomeSection );
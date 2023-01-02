import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRouter } from 'next/router';

// Import Custom Component
import ShopSidebarThree from '../shop/sidebar/shop-sidebar-three';
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import ProductFour from '../../features/products/product-four';

// Import Settigns
import { productSlider } from '../../../utils/data/slider';
import { fadeInDownShorter } from '../../../utils/data/keyframes';

function CategoriesSection ( props ) {
    const { data } = props;
    const router = useRouter();

    useEffect( () => {
        document.querySelector( "body" ).addEventListener( "click", onBodyClick, { passive: true } );

        return ( () => {
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        } )
    }, [] )

    useEffect( () => {
        if ( router.pathname === '/' ) {
            window.addEventListener( 'scroll', activeHandler );

            return ( () => {
                document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
                window.removeEventListener( 'scroll', activeHandler );
            } )
        }
    }, [ router ] )

    function activeHandler () {
        let sectionOne = document.querySelector( '#cat-1' ) && document.querySelector( '#cat-1' ).getBoundingClientRect().top + window.pageYOffset,
            sectionTwo = document.querySelector( '#cat-2' ) && document.querySelector( '#cat-2' ).getBoundingClientRect().top + window.pageYOffset,
            sectionThree = document.querySelector( '#cat-3' ) && document.querySelector( '#cat-3' ).getBoundingClientRect().top + window.pageYOffset,
            sectionFour = document.querySelector( '#cat-4' ) && document.querySelector( '#cat-4' ).getBoundingClientRect().top + window.pageYOffset,
            sectionFive = document.querySelector( '#cat-5' ) && document.querySelector( '#cat-5' ).getBoundingClientRect().top + window.pageYOffset,
            sectionSix = document.querySelector( '#cat-6' ) && document.querySelector( '#cat-6' ).getBoundingClientRect().top + window.pageYOffset;

        if ( window.pageYOffset < sectionOne ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
        }

        if ( window.pageYOffset > sectionOne - 70 ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
            document.querySelector( '.category-list-nav .cat-one' ) && document.querySelector( '.category-list-nav .cat-one' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > sectionTwo - 70 ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
            document.querySelector( '.category-list-nav .cat-two' ) && document.querySelector( '.category-list-nav .cat-two' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > sectionThree - 70 ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
            document.querySelector( '.category-list-nav .cat-three' ) && document.querySelector( '.category-list-nav .cat-three' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > sectionFour - 70 ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
            document.querySelector( '.category-list-nav .cat-four' ) && document.querySelector( '.category-list-nav .cat-four' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > sectionFive - 70 ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
            document.querySelector( '.category-list-nav .cat-five' ) && document.querySelector( '.category-list-nav .cat-five' ).classList.add( 'active' );
        }

        if ( window.pageYOffset > sectionSix - 70 ) {
            document.querySelector( '.category-list-nav .active' ) && document.querySelector( '.category-list-nav .active' ).classList.remove( 'active' );
            document.querySelector( '.category-list-nav .cat-six' ) && document.querySelector( '.category-list-nav .cat-six' ).classList.add( 'active' );
        }
    }

    const onDropdownHandler = ( e ) => {
        e.stopPropagation();
        e.preventDefault();
        e.currentTarget.nextSibling.classList.toggle( 'show' );
    }

    function onBodyClick ( e ) {
        if ( !e.target.closest( '.category-section .dropdown' ) ) {
            document.querySelector( '.category-title .show' ) && document.querySelector( '.category-title .show' ).classList.remove( 'show' );
        }
    }

    return (
        <div className="main-container mt-3 mt-md-0">
            <div className="container-fluid">
                <ShopSidebarThree type="1" />

                <div className="category-details">
                    <section id="cat-1" className="category-section">
                        <div className="category-title appear-animate" data-animation-name="fadeInDownShorter" data-animation-delay="200">
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle cat-title" onClick={ onDropdownHandler }>Fashion &amp; Clothes</a>
                                <div className="dropdown-menu">
                                    <ul className="row m-0">
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }>FASHION</ALink>
                                            <ul>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'women' } } }>Women</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'men' } } }>Men</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'jewelry' } } }>Jewelry</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>Shoes</ALink></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <ALink href="#">NEW ARRIVALS</ALink>
                                            <ul>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'dresses' } } }>Dresses</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'tops' } } }>Tops</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'jackets' } } }>Jackets</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'bottoms' } } }>Bottoms</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'swim' } } }>Swim</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>Shoes</ALink></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <ALink href={ { pathname: '/shop', query: { category: 'jackets' } } }>JACKETS</ALink>
                                            <ul>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'bomber' } } }>Bomber</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'leather' } } }>Leather + Suede</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'denim' } } }>Denim</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'parkas' } } }>Parkas + Anoraks</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'blazers' } } }>Blazers</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'dusters' } } }>Dusters</ALink></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <ALink href={ { pathname: '/shop', query: { category: 'top' } } }>TOP</ALink>
                                            <ul>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'shirts' } } }>Shirts</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'bodysuits' } } }>Bodysuits</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'cropped' } } }>Cropped</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'tanks' } } }>Tanks + Tees</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'graphic' } } }>Graphic Tees</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'sweaters' } } }>Sweaters</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'cardigans' } } }>Cardigans</ALink></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <ALink href={ { pathname: '/shop', query: { category: 'dresses' } } }>DRESSES</ALink>
                                            <ul>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'casual' } } }>Casual</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'cocktail' } } }>Cocktail</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'mini' } } }>Mini</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'midi' } } }>Midi</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'maxi' } } }>Maxi</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'rompers' } } }>Rompers</ALink></li>
                                                <li><ALink href={ { pathname: '/shop', query: { category: 'plus-size' } } }>Plus Size</ALink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ALink href={ { pathname: '/shop', query: { category: 'fashion-and-clothes' } } } className="btn btn-dark">View All</ALink>
                        </div>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                                {
                                    data && data.fashionAndClothes.data ?
                                        data.fashionAndClothes.data.map( ( item, index ) => (
                                            <ProductFour
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />

                                        ) )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner banner1" style={ { backgroundColor: '#6db2d9' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-1.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                                <h5 className="m-b-2">Find the Boundaries. Push Through!</h5>
                                                <h3 className="text-white mb-0">Summer Sale</h3>
                                                <h4 className="text-uppercase text-white mb-0">30% off</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner banner2" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-2.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-center text-center">
                                                <h3 className="text-uppercase ls-10 m-b-1">Deal Promos</h3>
                                                <h5 className="text-body text-uppercase mb-0">Starting at $99</h5>
                                            </div>
                                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                                <h6 className="bg-dark text-white text-center mb-0">
                                                    50<small><sup>%</sup><sub>off</sub></small></h6>
                                            </div>
                                            <div className="banner-layer banner-layer-right banner-layer-top">
                                                <h6 className="bg-dark text-white text-center mb-0">
                                                    30<small><sup>%</sup><sub>off</sub></small></h6>
                                            </div>
                                            <div className="banner-layer banner-layer-right banner-layer-bottom">
                                                <h6 className="bg-dark text-white text-center mb-0">
                                                    70<small><sup>%</sup><sub>off</sub></small></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </section>

                    <section id="cat-2" className="category-section">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-title">
                                <h2 className="cat-title">ELECTRONICS &amp; COMPUTERS</h2>
                                <ALink href={ { pathname: '/shop', query: { category: 'electronics-and-computers' } } } className="btn btn-dark">View All</ALink>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                                {
                                    data && data.electronicAndComputer.data ?
                                        data.electronicAndComputer.data.map( ( item, index ) => (
                                            <ProductFour
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />

                                        ) )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner banner3" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-3.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div
                                                className="banner-layer banner-layer-middle row align-items-center flex-md-nowrap">
                                                <div className="col-auto offset-4">
                                                    <div className="coupon-sale-text">
                                                        <h4 className="m-b-2 font1 d-block text-white bg-dark">Exclusive
                                                            COUPON</h4>
                                                        <h5 className="mb-0 font1 d-inline-block bg-dark"><i
                                                            className="text-dark ls-0">UP TO</i><b
                                                                className="text-white">$100</b><sub
                                                                    className="text-dark">OFF</sub></h5>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 offset-md-0 offset-4">
                                                    <h3 className="font1 ls-10 text-md-center text-uppercase mb-0">Drone
                                                        &amp; Cameras</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner banner4" style={ { backgroundColor: '#242527' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-4.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-middle row align-items-center">
                                                <div className="col-md-4 col-md-4 offset-4">
                                                    <h3
                                                        className="ls-10 text-uppercase text-white text-md-center m-b-2 mb-lg-0">
                                                        Electronic Deals</h3>
                                                </div>
                                                <div className="col-auto offset-md-0 offset-4">
                                                    <div className="coupon-sale-text">
                                                        <h4 className="m-b-2 font1 d-block text-dark bg-white">Exclusive
                                                            COUPON</h4>
                                                        <h5 className="mb-0 font1 d-inline-block"><i
                                                            className="text-white ls-0">UP TO</i><b
                                                                className="text-dark">$100</b><sub
                                                                    className="text-white">OFF</sub></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </section>

                    <section id="cat-3" className="category-section">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-title">
                                <h2 className="cat-title">Toys &amp; Games</h2>
                                <ALink href={ { pathname: '/shop', query: { category: 'toys-and-games' } } } className="btn btn-dark">View All</ALink>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                                {
                                    data && data.toyAndGame.data ?
                                        data.toyAndGame.data.map( ( item, index ) => (
                                            <ProductFour
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />

                                        ) )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner banner5" style={ { backgroundColor: '#292929' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-5.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div
                                                className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                                <div className="content-left">
                                                    <h5 className="font1 text-uppercase m-b-1">Be a Kendo Warrior</h5>
                                                    <h3 className="font1 text-white text-uppercase ls-n-20 mb-0">ProWarrior
                                                    </h3>
                                                </div>
                                                <div className="content-right">
                                                    <h4 className="font1 mb-0 text-white">
                                                        <del>$59</del>
                                                        $29
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner banner6" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-6.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-middle banner-layer-left">
                                                <h3 className="m-b-1">Consoles &amp; Games</h3>
                                                <h4 className="mb-0">50% OFF</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </section>

                    <section id="cat-4" className="category-section">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-title">
                                <h2 className="cat-title">Home &amp; Garden</h2>
                                <ALink href={ { pathname: '/shop', query: { category: 'home-and-garden' } } } className="btn btn-dark">View All</ALink>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                                {
                                    data && data.homeAndGarden.data ?
                                        data.homeAndGarden.data.map( ( item, index ) => (
                                            <ProductFour
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />

                                        ) )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6 d-flex">
                                        <div className="banner banner7 m-b-4" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-7.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div
                                                className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                                <div className="content-left text-center">
                                                    <h5 className="heading-border text-dark text-uppercase m-b-1">Amazing
                                                    </h5>
                                                    <h3 className="font1 ls-n-10 text-uppercase m-b-2">Collection</h3>
                                                    <hr className="m-b-2 mt-0" />
                                                    <h5 className="text-uppercase mb-0">Check our discounts</h5>
                                                </div>
                                                <div className="content-right text-center">
                                                    <h4 className="text-uppercase ls-n-20 m-b-2">Starting AT&nbsp;
                                                        <sup>$</sup>199<sup>99</sup></h4>
                                                    <h6 className="text-body text-uppercase mb-0">* limited time only</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="banner banner8 d-flex align-items-center justify-content-center m-b-4">
                                            <div
                                                className="row no-gutters banner-layer position-static justify-content-center align-items-center m-t-3 px-3">
                                                <div
                                                    className="col-auto d-flex flex-column justify-content-center text-center">
                                                    <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden
                                                    </h4>
                                                    <h3 className="text-white m-b-3 align-left text-uppercase">Huge Sale
                                                    </h3>
                                                </div>

                                                <div className="col-auto">
                                                    <h2 className="text-white m-b-3 position-relative align-left">
                                                        50<small>%<ins>OFF</ins></small>
                                                    </h2>
                                                </div>

                                                <div className="col-auto">
                                                    <ALink href="/shop" className="btn m-b-3 ls-10">Shop Now!</ALink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </section>

                    <section id="cat-5" className="category-section">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-title">
                                <h2 className="cat-title">Sports &amp; Fitness</h2>
                                <ALink href={ { pathname: '/shop', query: { category: 'sports-and-fitness' } } } className="btn btn-dark">View All</ALink>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                                {
                                    data && data.sportsAndFitness.data ?
                                        data.sportsAndFitness.data.map( ( item, index ) => (
                                            <ProductFour
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />

                                        ) )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner banner9" style={ { backgroundColor: '#22252a' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-8.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div
                                                className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                                <div className="content-left coupon-sale-text">
                                                    <h5 className="mb-0 font1 d-inline-block ls-10 text-white"><i
                                                        className="ls-0">UP TO</i><b>50%</b><sub>OFF</sub></h5>
                                                </div>
                                                <div className="content-right">
                                                    <h4 className="font1 text-uppercase m-b-1">Flash Sales On</h4>
                                                    <h3 className="font1 text-white text-uppercase mb-0">Nice Shoes</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner banner10" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-9.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div
                                                className="banner-layer banner-layer-middle row no-gutters d-flex align-items-center justify-content-between justify-content-lg-start flex-nowrap overflow-hidden m-0">
                                                <div className="col-auto col-lg-4 text-right ml-4 ml-lg-0">
                                                    <h6 className="font1 text-uppercase text-body m-b-1">Feel like a player
                                                    </h6>
                                                    <h3 className="font1 text-uppercase ls-n-25 mb-0">Football</h3>
                                                </div>
                                                <div className="col-auto coupon-sale-text offset-lg-4 mr-4 mr-lg-0">
                                                    <h4 className="m-b-2 font1 d-block ls-10 text-white bg-dark">Exclusive
                                                        COUPON</h4>
                                                    <h5 className="mb-0 font1 d-inline-block ls-10 bg-dark"><i
                                                        className="text-dark ls-0">UP TO</i><b
                                                            className="text-white">100%</b><sub className="text-dark">OFF</sub>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </section>

                    <section id="cat-6" className="category-section">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-title">
                                <h2 className="cat-title">Gifts &amp; Gadgets</h2>
                                <ALink href={ { pathname: '/shop', query: { category: 'gifts-and-gadgets' } } } className="btn btn-dark">View All</ALink>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <OwlCarousel adClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" options={ productSlider }>
                                {
                                    data && data.giftAndGadget.data ?
                                        data.giftAndGadget.data.map( ( item, index ) => (
                                            <ProductFour
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />

                                        ) )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </Reveal>

                        <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                            <div className="category-description">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner banner11" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-10.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>
                                            <div className="banner-layer banner-layer-middle banner-layer-right">
                                                <h3 className="text-uppercase text-right ls-10 mb-0">
                                                    Top Electronic<br />For Gifts
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner banner12" style={ { backgroundColor: '#f4f4f4' } }>
                                            <figure>
                                                <LazyLoadImage
                                                    alt="Banner"
                                                    src="images/home/banners/banner-11.jpg"
                                                    threshold={ 500 }
                                                    effect="black and white"
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </figure>

                                            <div className="banner-layer banner-layer-middle">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <h2 className="line-height-1 m-b-2">Outlet Selected Items</h2>
                                                        <h4 className="text-white ls-0 mb-0"><b>BIG SALE UP TO</b></h4>
                                                    </div>

                                                    <div className="col-auto">
                                                        <h3 className="text-white mb-0">80%<small
                                                            className="d-inline-block text-center"><b>OFF</b></small>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </section>
                </div>
            </div >
        </div >
    );
}

export default React.memo( CategoriesSection );
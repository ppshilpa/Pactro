import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from 'next/router';

// Import Custom Component
import ALink from '../../../common/ALink';
import MainMenu from "../../../common/partials/main-menu";
import ProductThree from '../../../features/products/product-three';

// Import Apollo Server
import withApollo from '../../../../server/apollo';
import { GET_HOME_DATA } from '../../../../server/queries';

function ShopSidebar () {
    const router = useRouter().pathname;
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10, postsCount: 6 } } );

    const featured = data && data.specialProducts.featured;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    useEffect( () => {
        closeSidebar();
    }, [ router ] )

    function sidebarToggle ( e ) {
        let body = document.querySelector( 'body' );

        e.preventDefault();
        if ( body.classList.contains( 'sidebar-opened' ) ) {
            body.classList.remove( 'sidebar-opened' );

        } else {
            body.classList.add( 'sidebar-opened' );
        }
    }

    function closeSidebar () {
        document.querySelector( 'body' ).classList.contains( 'sidebar-opened' ) && document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={ closeSidebar }></div>
            {
                useRouter().pathname.indexOf( 'shop' ) === -1 && <div className="sidebar-toggle custom-sidebar-toggle" onClick={ e => sidebarToggle( e ) }><i className="fas fa-sliders-h"></i></div>
            }
            <aside className={ `sidebar-home col-lg-3 mobile-sidebar skeleton-body skel-shop-products ${!loading ? 'loaded' : ''}` }>
                <StickyBox className="sticky-wrapper sidebar-wrapper" offsetTop={ 10 }>
                    <div className="side-menu-wrapper text-uppercase border-0 font2">
                        <h2 className="side-menu-title ls-n-10">Specials and Offers</h2>

                        <nav className="side-nav">
                            <ul className="menu menu-vertical with-icon sf-arrows d-block no-superfish">
                                <li>
                                    <ALink href="/shop" className="p-0"><i className="icon-percent-shape"></i>Special Offers<span className="sf-with-ul menu-btn"></span></ALink>

                                    <ul>
                                        <li><ALink href="/shop">Special Offers</ALink></li>
                                    </ul>
                                </li>
                                <li>
                                    <ALink href="/shop" className="p-0"><i className="icon-business-book"></i>Our Recipes<span className="sf-with-ul menu-btn"></span></ALink>

                                    <ul>
                                        <li><ALink href="/shop">Our Recipes</ALink></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <h2 className="side-menu-title ls-n-10 pb-2">Departments</h2>

                        <nav className="side-nav">
                            <ul className="menu menu-vertical sf-arrows d-block no-superfish">
                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'fruits-and-vegetables' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'fruits-and-vegetables' } } }>Fruits & Vegetables<span className="sf-with-ul menu-btn"></span></ALink>
                                    <div className="megamenu megamenu-fixed-width megamenu-one">
                                        <div className="row bg-white">
                                            <div className="col-lg-3 mb-1 pb-2">
                                                <a href="#" className="nolink pl-0 d-lg-none d-block">VARIATION 1</a>
                                                <a href="#" className="nolink pl-0">FLESH</a>

                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'fruits' } } }>FRUITS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'apple' } } }>APPLE</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'cocoa' } } }>COCOA</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tomato' } } }>TOMATO</ALink></li>
                                                </ul>

                                                <a href="#" className="nolink pl-0">COLLECTIVE</a>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'banana' } } }>BANANA</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pear' } } }>PEAR</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'orange' } } }>ORANGE</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4">
                                                <a href="#" className="nolink pl-0 d-lg-none d-block">VARIATION 2</a>
                                                <a href="#" className="nolink pl-0">SIMPLE</a>

                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'actindia' } } }>ACTINDIA</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'lemon' } } }>LEMON</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strawberry' } } }>STRAWBERRY</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'koka' } } }>KOKA</ALink>
                                                    </li>
                                                </ul>

                                                <a href="#" className="nolink pl-0">VEGETABLES</a>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'barbecue' } } }>BARBECUE</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'onion' } } }>ONION</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'winter-sneakers' } } }>WINTER SNEAKERS</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-5 p-0 d-lg-block d-none">
                                                <div className="menu-banner menu-banner-2">
                                                    <figure>
                                                        <LazyLoadImage
                                                            alt="Menu banner"
                                                            src="images/home/menu-banner-1.jpg"
                                                            threshold={ 500 }
                                                            effect="black and white"
                                                            width="100%"
                                                            height={ 383 }
                                                            wrapperClassName="product-promo w-100"
                                                        />
                                                    </figure>
                                                    <i>OFF</i>
                                                    <div className="banner-content">
                                                        <h4>
                                                            <span className="text-dark">UP TO</span><br />
                                                            <b className="text-dark">50%</b>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 d-lg-block d-none">
                                                <div className="partners-container row">
                                                    <div className="col-xl-5col">
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand1.png"
                                                                alt="logo image" width="140" height="60" /></div>
                                                    </div>
                                                    <div className="col-xl-5col">
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand2.png"
                                                                alt="logo image" width="140" height="60" /></div>
                                                    </div>
                                                    <div className="col-xl-5col">
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand3.png"
                                                                alt="logo image" width="140" height="60" /></div>
                                                    </div>
                                                    <div className="col-xl-5col">
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand4.png"
                                                                alt="logo image" width="140" height="60" /></div>
                                                    </div>
                                                    <div className="col-xl-5col">
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand5.png"
                                                                alt="logo image" width="140" height="60" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'meat-and-seafood' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'meat-and-seafood' } } }>Meat & Seafood<span className="sf-with-ul menu-btn"></span></ALink>
                                    <div className="megamenu megamenu-fixed-width megamenu-two">
                                        <div className="row bg-white">
                                            <div className="col-lg-3">
                                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } } className="nolink pl-0">ACCESSORIES</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'seafood' } } }>SEAFOOD</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'chargers' } } }>CABLES & ADAPTERS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'electronic-and-cigarattes' } } }>ELECTRONIC CIGARETTES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'batteries' } } }>BATTERIES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'chargers' } } }>CHARGERS</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-2">
                                                <ALink href={ { pathname: '/shop', query: { category: 'audio-and-video' } } } className="nolink pl-0">AUDIO &amp; VIDEO</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'televisions' } } }>TELEVISIONS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tv-receivers' } } }>TV RECEIVERS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'projectors' } } }>PROJECTORS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'audio-amplifier' } } }>AUDIO AMPLIFIER</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tv-sticks' } } }>TV STICKS</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'cameras-and-photo' } } } className="nolink pl-0">CAMERA &amp; PHOTO</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'digital-cameras' } } }>DiGITAL CAMERAS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camcorders' } } }>CAMCORDERS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camera-drones' } } }>CAMERA DRONES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'action-cameras' } } }>ACTION CAMERAS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'photo-supplies' } } }>PHOTO SUPPLIES</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'laptops' } } } className="nolink pl-0">LAPTOPS</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gaming-laptops' } } }>GAMING LAPTOPS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'utraslim-laptops' } } }>ULTRASLIM LAPTOPS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tablets' } } }>TABLETS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'laptop-accessories' } } }>LAPTOP ACCESSORIES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tablet-accessories' } } }>TABLET ACCESSORIES</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="banner-container w-100 pl-3 pr-3 d-lg-block d-none">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="banner banner3 banner-md-vw text-transform-none">
                                                            <figure>
                                                                <LazyLoadImage
                                                                    alt="Menu banner"
                                                                    src="images/home/menu-banner-2.jpg"
                                                                    threshold={ 500 }
                                                                    effect="black and white"
                                                                    width="100%"
                                                                    height={ 157 }
                                                                    wrapperClassName="product-promo d-inline-block"
                                                                />
                                                            </figure>

                                                            <div
                                                                className="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0">
                                                                <div className="content-left">
                                                                    <h4 className="banner-layer-circle-item mb-0 ls-0">
                                                                        40<sup>%<small className="ls-0">OFF</small></sup>
                                                                    </h4>
                                                                </div>
                                                                <div className="content-right text-right">
                                                                    <h5 className=" ls-0"><del
                                                                        className="d-block m-b-2 text-secondary">$450</del>$270
                                                                </h5>
                                                                    <h4 className="m-b-1 ls-n-25">Watches</h4>
                                                                    <h3 className="mb-0">HURRY UP!</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="banner banner4 banner-md-vw">
                                                            <figure>
                                                                <LazyLoadImage
                                                                    alt="Menu banner"
                                                                    src="images/home/menu-banner-3.jpg"
                                                                    threshold={ 500 }
                                                                    effect="black and white"
                                                                    width="100%"
                                                                    height={ 157 }
                                                                    wrapperClassName="product-promo d-inline-block"
                                                                />
                                                            </figure>

                                                            <div
                                                                className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                                                <h3 className="text-dark text-right">
                                                                    Electronic<br />Deals</h3>

                                                                <div className="coupon-sale-content">
                                                                    <h4
                                                                        className="custom-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
                                                                        Exclusive COUPON</h4>
                                                                    <h5 className="custom-coupon-sale-text font1 text-dark ls-n-10 p-0">
                                                                        <b className="text-dark">$100</b> OFF
                                                                </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'eggs-and-dairy' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'eggs-and-dairy' } } }>Eggs & Dairy<span className="sf-with-ul menu-btn"></span></ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-three">
                                        <div className="row bg-white">
                                            <div className="col-lg-3">
                                                <ALink href={ { pathname: '/shop', query: { category: 'her-him' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i
                                                    className="icon-boy-broad-smile"></i>FOR HIM</ALink>

                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-untrition' } } }>HEALTH & UNTRITION</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-personal care' } } }>BEAUTY & PERSONAL CARE</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-dad' } } }>GIFTS FOR DAD</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-grandfa' } } }>GIFTS FOR GRANDFA</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-2">
                                                <ALink href={ { pathname: '/shop', query: { category: 'for-her' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i
                                                    className="icon-smiling-girl"></i>FOR HER</ALink>

                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-girlfriend' } } }>GIFTS FOR GIRLFRIEND</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pantry' } } }>PANTRY</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'party-supplies' } } }>PARTY SUPPLIES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'party-supplies-and-crafts' } } }>PARTY SUPPLIES & CRAFTS</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'for-kids' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i
                                                    className="icon-smiling-baby"></i>FOR KIDS</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bread-and-bakery' } } }>BREAD & BAKERY</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bread' } } }>BREAD</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bakery' } } }>BAKERY</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'birthday' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i className="icon-gift-2"></i>BIRTHDAY</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'deli' } } }>DELI</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'alcohol' } } }>ALCOHOL</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-mon' } } }>GIFTS FOR MON</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-grandma' } } }>GIFTS FOR GRANDMA</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'snacks-and-candy' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'snacks-and-candy' } } }>Snacks & Candy<span className="sf-with-ul menu-btn"></span></ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-four">
                                        <div className="row bg-white">
                                            <div className="col-lg-4 mb-1 pb-2">
                                                <a href="#" className="nolink pl-0 d-lg-none d-block">VARIATION 1</a>
                                                <ALink href={ { pathname: '/shop', query: { category: 'furniture' } } } className="nolink pl-0">FURNITURE</ALink>

                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'beauty-and-personal-care' } } }>BEAUTY & PERSONAL CARE</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'sofas-and-couches' } } }>SOF & COUCHES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'armchairs' } } }>ARMCHARIRS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bed-frames' } } }>BED FRAMES</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'beside-tables' } } }>BEDSIDE TABLES</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'dressing-tables' } } }>BRESSING TABLES</ALink></li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'home-accessories' } } } className="nolink pl-0">HOME ACCESSORIES</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'decorative-accessories' } } }>DECORATIVE ACCESSORIES</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'candles-and-holders' } } }>CANDLES & HOLDERS</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'home-and-fragrance' } } }>HOME FRAGRANCE</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'mirrors' } } }>MIRRORS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'clocks' } } }>CLOCKS</ALink></li>
                                                </ul>

                                            </div>

                                            <div className="col-lg-4">
                                                <a href="#" className="nolink pl-0 d-lg-none d-block">VARIATION 2</a>
                                                <ALink href={ { pathname: '/shop', query: { category: 'lighting' } } } className="nolink pl-0">LIGHTING</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'light-bulbs' } } }>LIGHT BULBS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'lamps' } } }>LAMPS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'celling-lights' } } }>CEILING LIGHTS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'wall-lights' } } }>WALL LIGHTS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bathroom-lighting' } } }>BATHROOM LIGHTING</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'outdoor-lighting' } } }>OUTDOOR LIGHTING</ALink></li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'garden-and-outdoors' } } } className="nolink pl-0">GARDEN & OUTDOORS</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'garden-and-furniture' } } }>GARDEN FURNITURE</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'lawn-mowers' } } }>LAWN MOWERS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pressure-washers' } } }>PRESSURE WASHERS</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'all-garden-tools-equipment' } } }>ALL ARDEN TOOLS &
                                                                    EQUIPMENT</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'barbecue-and-Outdoor' } } }>BARBECURE & OUTDOOR
                                                                    DINING</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 d-lg-block d-none">
                                                <div className="product-widgets-container">
                                                    {
                                                        featured ?
                                                            featured.slice( 0, 5 ).map( ( product, index ) => (
                                                                <ProductThree product={ product } key={ `ProductThree`, index } />
                                                            ) )
                                                            :
                                                            [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                                                <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'beverages' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'beverages' } } }>Beverages<span className="sf-with-ul menu-btn"></span></ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-five text-transform-none" style={ { backgroundImage: 'url(images/home/menu-banner-4.jpg)' } }>
                                        <div className="row">
                                            <div className="col-lg-4 pt-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'instruments' } } } className="nolink pl-0">INSTRUMENTS</ALink>
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'beverages' } } }>Beverages</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'guitar' } } }>Guitar</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'drums-sets' } } }>Drums Sets</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'percussions' } } }>Percussions</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pedalsand-effects' } } }>Pedals & Effects</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'sound-cards' } } }>Sound Cards</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'studio-equipments' } } }>Studio Equipments</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'piano-and-keyboards' } } }>Piano & Keyboards</ALink>
                                                    </li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'extra' } } } className="nolink pl-0">EXTRA</ALink>
                                                <ul className="submenu bg-transparent pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'alcohol' } } }>Alcohol</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>Strings</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'recorders' } } }>Recorders</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'amplifiers' } } }>Amplifiers</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-8 pt-0 d-lg-block d-none">
                                                <div className="banner banner1 mb-2 h-100 d-flex align-items-center">
                                                    <div className="banner-layer text-right pt-0">
                                                        <h6 className="text-transform-none">
                                                            CHECK NEW
                                                                ARRIVALS</h6>
                                                        <h3 className="text-white">PROFESSIONAL</h3>
                                                        <h2 className="text-transform-none text-white">
                                                            HEADPHONES</h2>
                                                        <ALink href="/shop" className="btn btn-dark">VIEW
                                                                ALL NOW</ALink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'alcohol' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'alcohol' } } }>Alcohol<span className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'alcohol' } } }>Alcohol</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'beverages' } } }>Beverages</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'frozen' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'frozen' } } }>Frozen<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'alcohol' } } }>Alcohol</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'beverages' } } }>Beverages</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'organic-shop' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'organic-shop' } } }>Organic Shop<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'organic-shop' } } }>Organic Shop</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'health-and-nutrition' } } }>Health & Nutrition</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'household-essentials' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'household-essentials' } } }>Household Essentials<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'household-essentials' } } }>Household Essentials</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'home' } } }>Home, Kitchen & Dine</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'health-and-nutrition' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'health-and-nutrition' } } }>Health & Nutrition<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'health-and-nutrition' } } }>Health & Nutrition</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'beauty-and-personal-care' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'beauty-and-personal-care' } } }>Beauty & Personal Care<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><a href={ { pathname: '/shop', query: { category: 'beauty-and-personal-care' } } }>Beauty & Personal Care</a></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'baby' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'baby' } } }>Baby<span className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'baby' } } }>Baby</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'pets' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'pets' } } }>Pets<span className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'pets' } } }>Pets</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'party-supplies-and-crafts' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'party-supplies-and-crafts' } } }>Party Supplies & Crafts<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'party-supplies-and-crafts' } } }>Party Supplies & Crafts</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'home' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'home' } } }>Home, Kitchen & Dine<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'home' } } }>Home, Kitchen & Dine</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'office-and-electronics' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'office-and-electronics' } } }>Office & Electronics<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'office-and-electronics' } } }>Office & Electronics</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'garden-and-tools' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'garden-and-tools' } } }>Garden & Tools<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'garden-and-tools' } } }>Garden & Tools</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'sports-and-outdoor' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'sports-and-outdoor' } } }>Sports & Outdoor<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'sports-and-outdoor' } } }>Sports & Outdoor</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'toys' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'toys' } } }>Toys<span className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'toys' } } }>Toys</ALink></li>
                                    </ul>
                                </li>

                                <li className={ `${useRouter().query.category && useRouter().query.category.indexOf( 'clothing' ) !== -1 ? 'active' : ''}` }>
                                    <ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>Clothing<span
                                        className="sf-with-ul menu-btn"></span></ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>Clothing</ALink></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <h2 className="side-menu-title ls-n-10">Customer Services</h2>

                        <MainMenu />
                    </div>
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ShopSidebar );
import { withRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server
import withApollo from '../../../server/apollo';
import { GET_HOME_DATA } from '../../../server/queries';

// Import Custom Component
import ALink from "../ALink";
import ProductCountdown from '../../features/product-countdown';
import OwlCarousel from '../../features/owl-carousel';
import ProductThree from '../../features/products/product-three';

// Import Utils
import { mainMenu } from "../../../utils/data/menu";

function MainMenu ( { router } ) {
    const pathname = router.pathname;
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10, postsCount: 6 } } );

    const featured = data && data.specialProducts.featured;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    function activeHandler ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-depart-active" );
        e.currentTarget.querySelector( ".menu-depart" ).classList.toggle( "opened" );
    }

    return (
        <>
            <nav className={ `main-nav w-100 skeleton-body skel-shop-products ${ !loading ? 'loaded' : '' }` }>
                <ul className="menu sf-js-enabled sf-arrows w-100">
                    <li className="menu-item" onClick={ activeHandler }>
                        <a href="#" className="d-inline-flex align-items-center sf-with-ul text-white">
                            <i className="custom-icon-toggle-menu d-inline-table"></i><span>ALL DEPARTMENTS</span>
                        </a>

                        <div className="menu-depart-overlay"></div>
                        <div className="menu-depart" onClick={ e => e.stopPropagation() }>
                            <ul className="menu menu-vertical sf-arrows d-block">
                                <li>
                                    <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } } className="sf-with-ul"><i className="icon-category-fashion"></i>Fashion</ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-one">
                                        <div className="row bg-white">
                                            <div className="col-lg-3 mb-1 pb-2">
                                                <ALink href={ { pathname: '/shop', query: { category: 'women' } } } className="nolink pl-0">Woman</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tops-and-blouses' } } }>Tops &amp; Blouses</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'dresses-and-skirts' } } }>Dresses &amp; Skirts</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'shoes-and-boots' } } }>Shoes &amp; Boots</ALink>
                                                    </li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'jewellery' } } } className="nolink pl-0">Jewellery</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'sweaters' } } }>Sweaters</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'heels-and-sandals' } } }>Heels &amp; Sandals</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'jeans-and-shorts' } } }>Jeans &amp; Shorts</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4">
                                                <ALink href={ { pathname: '/shop', query: { category: 'men' } } } className="nolink pl-0">Men</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'watch-fashion' } } }>Watch Fashion</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tees-and-knits-and-pops' } } }>Tees, Knits &amp;
                                                                        Polos</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'paints-and-denim' } } }>Paints &amp; Denim</ALink>
                                                    </li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'kids-fashion' } } } className="nolink pl-0">Kids Fashion</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'casual-shoes' } } }>Casual Shoes</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'spring-autumn' } } }>Spring &amp; Autumn</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'winter-sneakers' } } }>Winter Sneakers</ALink></li>
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
                                                <div className="partners-container">
                                                    <OwlCarousel options={ { items: 4, margin: 20, nav: false, responsive: { 1200: { items: 5 } } } }>
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand1.png"
                                                                alt="logo image" width="140" height="60" />
                                                        </div>
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand2.png"
                                                                alt="logo image" width="140" height="60" />
                                                        </div>
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand3.png"
                                                                alt="logo image" width="140" height="60" />
                                                        </div>
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand4.png"
                                                                alt="logo image" width="140" height="60" />
                                                        </div>
                                                        <div className="partner">
                                                            <img src="images/brands/small/brand5.png"
                                                                alt="logo image" width="140" height="60" />
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <ALink href={ { pathname: '/shop', query: { category: 'electronics' } } } className="sf-with-ul"><i className="icon-category-electronics"></i>Electronics</ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-two">
                                        <div className="row bg-white">
                                            <div className="col-lg-3">
                                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } } className="nolink pl-0">ACCESSORIES</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'cables-and-adapters' } } }>Cables &amp; Adapters</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'electronic-and-cigarattes' } } }>Electronic Cigarattes</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'batteries' } } }>Batteries</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'chargers' } } }>Chargers</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'home-electronic' } } }>Home Electronic</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bags-and-cases' } } }>Bags &amp; Cases</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-2">
                                                <ALink href={ { pathname: '/shop', query: { category: 'audio-and-video' } } } className="nolink pl-0">AUDIO &amp; VIDEO</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'televisions' } } }>Televisions</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tv-receivers' } } }>TV Receivers</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'projectors' } } }>Projectors</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'audio-amplifier' } } }>Audio Amplifier</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tv-sticksAmplifier' } } }>TV SticksAmplifier</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'cameras-and-photo' } } } className="nolink pl-0">CAMERA &amp; PHOTO</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'digital-cameras' } } }>Digital Cameras</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camcorders' } } }>Camcorders</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camera-drones' } } }>Camera Drones</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'action-cameras' } } }>Action Cameras</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'photo-supplies' } } }>Photo Supplies</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camera-and-photo' } } }>Camera &amp; Photo</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'laptops' } } } className="nolink pl-0">LAPTOPS</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gaming-laptops' } } }>Gaming Laptops</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'utraslim-laptops' } } }>Utraslim Laptops</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tablets' } } }>Tablets</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'laptop-accessories' } } }>Laptop Accessories</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tablet-accessories' } } }>Tablet Accessories</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-grandpa' } } }>Laptop Bag &amp; Cases</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="banner-container w-100 pl-3 pr-3 d-lg-block d-none">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="banner banner7 banner-md-vw text-transform-none">
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
                                                        <div className="banner banner8 banner-md-vw">
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

                                <li>
                                    <ALink href={ { pathname: '/shop', query: { category: 'gifts' } } } className="sf-with-ul"><i className="icon-category-gifts"></i>Gifts</ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-three">
                                        <div className="row bg-white">
                                            <div className="col-lg-3">
                                                <ALink href={ { pathname: '/shop', query: { category: 'her-him' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i
                                                    className="icon-boy-broad-smile"></i>FOR HIM</ALink>

                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-boyfriend' } } }>Gifts for Boyfriend</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-husband' } } }>Gifts for Husband</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-dad' } } }>Gifts for Dad</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-2">
                                                <ALink href={ { pathname: '/shop', query: { category: 'for-her' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i
                                                    className="icon-smiling-girl"></i>FOR HER</ALink>

                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-girlfriend' } } }>Gifts for Girlfriend</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-wife' } } }>Gifts for Wife</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-mom' } } }>Gifts for Mom</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'for-kids' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i
                                                    className="icon-smiling-baby"></i>FOR KIDS</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-boys' } } }>Gifts for Boys</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-girls' } } }>Gifts for Girls</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-twin-boys' } } }>Gifts for Twin Boys</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 pl-xl-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'birthday' } } } className="nolink pl-0 d-flex flex-column align-items-start"><i className="icon-gift-2"></i>BIRTHDAY</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'birthday-for-him' } } }>Birthday for Him</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'birthday-for-her' } } }>Birthday for Her</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'boyfriend-for-gifts' } } }>Boyfriend Gifts</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <ALink href={ { pathname: '/shop', query: { category: 'home-and-garden' } } } className="sf-with-ul"><i className="icon-category-garden"></i>Home & Garden</ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-four">
                                        <div className="row bg-white">
                                            <div className="col-lg-4 mb-1 pb-2">
                                                <a href="#" className="nolink pl-0 d-lg-none d-block">VARIATION 1</a>
                                                <ALink href={ { pathname: '/shop', query: { category: 'furniture' } } } className="nolink pl-0">FURNITURE</ALink>

                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'beauty-and-personal-care' } } }>BEAUTY & PERSONAL CARE</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'sofas-and-couches' } } }>Sofas & Couches</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'armchairs' } } }>Armchairs</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bed-frames' } } }>Bed Frames</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'beside-tables' } } }>Beside Tables</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'dressing-tables' } } }>Dressing Tables</ALink></li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'home-accessories' } } } className="nolink pl-0">HOME ACCESSORIES</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'decorative-accessories' } } }>Decorative
                                                                        Accessories</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'candles-and-holders' } } }>Candles & Holders</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'home-and-fragrance' } } }>Home Fragrance</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'mirrors' } } }>Mirrors</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'clocks' } } }>Clocks</ALink></li>
                                                </ul>

                                            </div>

                                            <div className="col-lg-4">
                                                <a href="#" className="nolink pl-0 d-lg-none d-block">VARIATION 2</a>
                                                <ALink href={ { pathname: '/shop', query: { category: 'lighting' } } } className="nolink pl-0">LIGHTING</ALink>
                                                <ul className="submenu">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'light-bulbs' } } }>Light Bulbs</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'lamps' } } }>Lamps</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'celling-lights' } } }>Celling Lights</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'wall-lights' } } }>Wall Lights</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bathroom-lighting' } } }>Bathroom Lighting</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'outdoor-lighting' } } }>Outdoor Lighting</ALink></li>
                                                </ul>

                                                <ALink href={ { pathname: '/shop', query: { category: 'garden-and-outdoors' } } } className="nolink pl-0">GARDEN & OUTDOORS</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'garden-and-furniture' } } }>Garden Furniture</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'lawn-mowers' } } }>Lawn Mowers</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'pressure-washers' } } }>Pressure Washers</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'all-garden-tools-equipment' } } }>All Garden Tools &
                                                                        Equipment</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'barbecue-and-Outdoor' } } }>Barbecue & Outdoor
                                                                        Dining</ALink>
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

                                <li>
                                    <ALink href={ { pathname: '/shop', query: { category: 'music' } } } className="sf-with-ul"><i className="icon-category-music"></i>Music</ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-five text-transform-none" style={ { backgroundImage: 'url(images/home/menu-banner-4.jpg)' } }>
                                        <div className="row">
                                            <div className="col-lg-4 pt-0">
                                                <ALink href={ { pathname: '/shop', query: { category: 'instruments' } } } className="nolink text-white pl-0">INSTRUMENTS</ALink>
                                                <ul className="submenu bg-transparent">
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

                                                <ALink href={ { pathname: '/shop', query: { category: 'extra' } } } className="nolink text-white pl-0">EXTRA</ALink>
                                                <ul className="submenu bg-transparent pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>Strings</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'recorders' } } }>Recorders</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'amplifiers' } } }>Amplifiers</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>Accessories</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-8 pt-0 d-lg-block d-none">
                                                <div className="banner banner9 mb-2 h-100 d-flex align-items-center">
                                                    <div className="banner-layer text-right pt-0">
                                                        <h6 className="text-transform-none font1 mb-1">
                                                            CHECK NEW
                                                                ARRIVALS</h6>
                                                        <h3 className="font1 text-white">PROFESSIONAL</h3>
                                                        <h2 className="font1 text-transform-none text-white">
                                                            HEADPHONES</h2>
                                                        <ALink href="/shop" className="btn btn-dark font1">VIEW
                                                                ALL NOW</ALink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <ALink href={ { pathname: '/shop', query: { category: 'sports' } } } className="sf-with-ul"><i className="icon-cat-sport"></i>Sports</ALink>

                                    <div className="megamenu megamenu-fixed-width megamenu-four megamenu-product d-block">
                                        <div className="row bg-white">
                                            <div className="col-lg-4 mb-0 pb-2">
                                                <ALink href={ { pathname: '/shop', query: { category: 'sports' } } } className="nolink pl-0">SPORTS</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'sports-and-fitness' } } }>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'boating-and-sailing' } } }>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>Clothing</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'exercise' } } }>Exercise &amp;
                                                                        Fitness</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'golf' } } }>Golf</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'hunting-and-fishing' } } }>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'leisure-sports' } } }>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'running' } } }>Running</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'swimming' } } }>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'team-sports' } } }>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tennis' } } }>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'other-sports' } } }>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3">
                                                <ALink href="#" className="nolink pl-0">SHOP BY PRICE</ALink>
                                                <ul className="submenu mb-1">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>Under $25</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>$25 to $50</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>$50 to $100</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>$100 to $200</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'strings' } } }>$200 & Above</ALink></li>
                                                </ul>

                                                <ALink href="#" className="nolink pl-0">SHOP BY BRAND</ALink>
                                                <ul className="submenu pb-0">
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'books' } } }>Books</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'adidas' } } }>Adidas</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'nike' } } }>Nike</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'asics' } } }>Asics</ALink></li>
                                                    <li><ALink href={ { pathname: '/shop', query: { category: 'puma' } } }>Puma</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-5 d-lg-block d-none menu-product">
                                                <OwlCarousel adClass="show-nav-hover nav-outer dots-small" options={ { nav: false, dots: true } }>
                                                    <div className="product-default">
                                                        <figure className="border-0">
                                                            <h5>Flash Deals</h5>
                                                            <ALink href="/product/default/drone-pro">
                                                                <LazyLoadImage
                                                                    alt="product"
                                                                    src="images/home/products/product-1.jpg"
                                                                    threshold={ 500 }
                                                                    effect="black and white"
                                                                    width="100%"
                                                                    height="auto"
                                                                />
                                                            </ALink>
                                                        </figure>

                                                        <div className="product-details">
                                                            <h3 className="product-title">
                                                                <ALink href="/product/default/drone-pro">Drone Pro</ALink>
                                                            </h3>
                                                            <div className="ratings-container">
                                                                <div className="product-ratings">
                                                                    <span className="ratings" style={ { width: '80%' } }></span>

                                                                    <span className="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>
                                                            <div className="price-box">
                                                                <del className="old-price">$59.00</del>
                                                                <span className="product-price">$49.00</span>
                                                            </div>

                                                            <ProductCountdown />
                                                        </div>
                                                    </div>

                                                    <div className="product-default">
                                                        <figure className="border-0">
                                                            <ALink href="/product/default/drone-pro">
                                                                <LazyLoadImage
                                                                    alt="product"
                                                                    src="images/home/products/product-2.jpg"
                                                                    threshold={ 500 }
                                                                    effect="black and white"
                                                                    width="100%"
                                                                    height="auto"
                                                                />
                                                            </ALink>
                                                        </figure>

                                                        <div className="product-details">
                                                            <h3 className="product-title">
                                                                <ALink href="/product/default/drone-pro">Drone Pro</ALink>
                                                            </h3>
                                                            <div className="ratings-container">
                                                                <div className="product-ratings">
                                                                    <span className="ratings" style={ { width: '80%' } }></span>

                                                                    <span className="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div>

                                                            <div className="price-box">
                                                                <del className="old-price">$59.00</del>
                                                                <span className="product-price">$49.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className={ pathname === '/' ? 'active' : '' }>
                        <ALink href="/">Home</ALink>
                    </li>

                    <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                        <ALink href="/shop" className="sf-with-ul">Shop</ALink>
                        <div className="megamenu megamenu-fixed-width megamenu-3cols">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">VARIATION 1</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.variation1.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">VARIATION 2</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.variation2.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>

                                <div className="col-lg-4 p-0">
                                    <div className="menu-banner">
                                        <figure>
                                            <img src="images/menu-banner.jpg" alt="Menu banner" width="300" height="300" />
                                        </figure>
                                        <div className="banner-content">
                                            <h4>
                                                <span className="">UP TO</span><br />
                                                <b className="">50%</b>
                                                <i>OFF</i>
                                            </h4>
                                            <ALink href="/shop" className="btn btn-sm btn-dark text-white">SHOP NOW</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={ pathname.startsWith( '/product' ) ? 'active' : '' }>
                        <ALink href="/product/default/beats-solo-hd-drenched-one" className="sf-with-ul">Products</ALink>
                        <div className="megamenu megamenu-fixed-width">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">PRODUCT PAGES</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.product.pages.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">PRODUCT LAYOUTS</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.product.layout.map( ( variations, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                        <li >
                                            <ALink href="#">BUILD YOUR OWN</ALink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 p-0">
                                    <div className="menu-banner menu-banner-2">
                                        <figure>
                                            <img src="images/menu-banner-1.jpg" alt="Menu banner" width="380" height="790"
                                                className="product-promo" />
                                        </figure>
                                        <i>OFF</i>
                                        <div className="banner-content">
                                            <h4>
                                                <span className="">UP TO</span><br />
                                                <b className="">50%</b>
                                            </h4>
                                        </div>

                                        <ALink href="/shop" className="btn btn-sm btn-dark text-white">SHOP NOW</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={ isOtherPage() ? 'active' : '' }>
                        <ALink href="#" className="sf-with-ul">Pages</ALink>
                        <ul>
                            {
                                mainMenu.other.map( ( variations, index ) => (
                                    <li key={ "menu-item" + index }>
                                        <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                    </li>
                                ) )
                            }
                        </ul>
                    </li>

                    <li>
                        <a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto</a>
                    </li>

                    <li className="float-right phone">
                        <a href="tel:#" className="d-flex align-items-center">
                            <i className="icon-phone-1"></i>1-800-234-5678</a>
                    </li>
                    <li className="float-right">
                        <ALink href="#">NEW ARRIVALS</ALink>
                    </li>
                    <li className="float-right"><ALink href="#">FLASH DEALS</ALink></li>
                </ul>
            </nav>
        </>
    );
}

export default withApollo( { ssr: typeof window === 'undefined' } )( withRouter( MainMenu ) );
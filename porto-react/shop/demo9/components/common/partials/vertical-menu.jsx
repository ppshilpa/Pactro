import { useRouter } from "next/router";
import SlideToggle from 'react-slide-toggle';

// Import Custom Component
import ALink from "../ALink";

// Import Utils
import { mainMenu } from "../../../utils/data/menu";

export default function VerticalMenu () {
    const router = useRouter();
    const pathname = router.pathname;

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    return (
        <>
            <aside className="sidebar-home col-lg-3 mobile-sidebar toggle-menu-wrap">
                <div className="side-menu-wrapper text-uppercase d-none d-lg-block">
                    <SlideToggle collapsed={ pathname !== '/' } key={ pathname }>
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <>
                                <h2 className={ `side-menu-title ${ pathname === '/' ? '' : 'cursor-pointer' }` }>
                                    {
                                        pathname === '/' ?
                                            <ALink className="d-block btn-dark" href="#">
                                                <i className="fas fa-bars"></i>Shop By Category
                                        </ALink>
                                            :
                                            <a href="#" onClick={ ( e ) => { e.preventDefault(), onToggle(); } }
                                                className={ `d-block btn-dark ${ toggleState === 'COLLAPSED' ? 'collapsed' : 'expanded' }` }>
                                                <i className="fas fa-bars"></i>Shop By Category</a>
                                    }
                                </h2>
                                <nav className={ `side-nav bg-white ${ toggleState === 'EXPANDED' ? '' : 'hide' } ${ pathname === '/' ? 'd-block' : '' }` } ref={ setCollapsibleElement }>
                                    <ul className="menu menu-vertical sf-arrows">
                                        <li className={ pathname === '/' ? 'active' : '' }>
                                            <ALink href="/"><i className="sicon-home"></i>Home</ALink>
                                        </li>
                                        <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                                            <ALink href="/shop" className="sf-with-ul"><i className="sicon-briefcase"></i>Categories</ALink>
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
                                                                <ALink href="/shop" className="btn btn-sm btn-dark">SHOP NOW</ALink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={ pathname.startsWith( '/product' ) ? 'active' : '' }>
                                            <ALink href="/product/default/porto-brown-bag" className="sf-with-ul"><i className="sicon-present"></i>Products</ALink>
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

                                                            <ALink href="/shop" className="btn btn-sm btn-dark">SHOP NOW</ALink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={ isOtherPage() ? 'active' : '' }>
                                            <ALink href="#" className="sf-with-ul"><i className="sicon-docs"></i>Pages</ALink>
                                            <ul className="megamenu w-auto">
                                                {
                                                    mainMenu.other.map( ( variations, index ) => (
                                                        <li key={ "menu-item" + index }>
                                                            <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </li>
                                        <li className={ pathname === '/pages/blog' ? 'active' : '' }>
                                            <ALink href="/pages/blog"><i className="sicon-book-open"></i>Blog</ALink>
                                        </li>
                                        <li className={ pathname === '/pages/contact-us' ? 'active' : '' }>
                                            <ALink href="/pages/contact-us"><i className="sicon-phone"></i>Contact Us</ALink>
                                        </li>
                                        <li className="menu-item-sale"><a href="#" className="border-top-0">HUGE SALE – 70% OFF</a></li>
                                    </ul>
                                </nav>
                            </>
                        ) }
                    </SlideToggle>
                </div>
            </aside>
            <div className="col-lg-9">
                <div className="menu-custom-block text-right">
                    <ALink href="#">Woman Shoes</ALink>
                    <ALink href="#">50% OFF FASHION</ALink>
                    <a target="_blank" href="https://1.envato.market/rNg2d">Buy Porto!</a>
                </div>
            </div>
        </>
    );
}
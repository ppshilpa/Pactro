import { withRouter } from 'next/router';

// Import Custom Component
import ALink from "../ALink";

// Import Utils
import { mainMenu } from "../../../utils/data/menu";

function MainMenu ( { router } ) {
    const pathname = router.pathname;

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    return (
        <>
            <nav className="main-nav d-none d-lg-flex flex-wrap">
                <div className={ `menu-depart ${ pathname !== '/' ? '' : 'show-always' }` }>
                    <ALink href="/shop" className="toggle"><i className="fas fa-bars"></i>Shop by Category</ALink>

                    <div className="submenu">
                        <ALink href={ { pathname: "/shop", query: { category: "home" } } } className={ `${ router.query.category && router.query.category.indexOf( 'home' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-home"></i>Home</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "fashion" } } } className={ `${ router.query.category && router.query.category.indexOf( 'fashion' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-fashion"></i>Fashion</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "electronics" } } } className={ `${ router.query.category && router.query.category.indexOf( 'electronics' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-electronics"></i>Electronics</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "gifts" } } } className={ `${ router.query.category && router.query.category.indexOf( 'gifts' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-gifts"></i>Gifts</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "garden" } } } className={ `${ router.query.category && router.query.category.indexOf( 'garden' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-garden"></i>Garden</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "music" } } } className={ `${ router.query.category && router.query.category.indexOf( 'music' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-music"></i>Music</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "motors" } } } className={ `${ router.query.category && router.query.category.indexOf( 'motors' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-motors"></i>Motors</ALink>
                        <ALink href={ { pathname: "/shop", query: { category: "furniture" } } } className={ `${ router.query.category && router.query.category.indexOf( 'furniture' ) !== -1 ? 'active' : '' }` } scroll={ false }><i className="icon-category-furniture"></i>Furniture</ALink>
                        <ALink href="/shop" scroll={ false }>VIEW ALL <i className="icon-angle-right"></i></ALink>
                    </div>
                </div>

                <ul className="menu sf-js-enabled sf-arrows">
                    <li className={ pathname === '/' ? 'active' : '' }>
                        <ALink href="/">Home</ALink>
                    </li>

                    <li className={ pathname.startsWith( '/vendor' ) ? 'active' : '' }>
                        <ALink href="/vendor/vendors" className="sf-with-ul">Vendor</ALink>

                        <ul>
                            <li><ALink href="/vendor/vendors">Store List</ALink></li>
                            <li><ALink href="/vendor/vendor-store">Vendor Store</ALink></li>
                        </ul>
                    </li>

                    <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                        <ALink href="/shop" className="sf-with-ul">Categories</ALink>
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
                        <ALink href="/product/default/3-d-printer" className="sf-with-ul">Products</ALink>
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

                    <li className={ `d-none d-xl-block ${ pathname === '/pages/blog' ? 'active' : '' }` }>
                        <ALink href="/pages/blog">Blog</ALink>
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
                </ul>
            </nav>
        </>
    );
}

export default withRouter( MainMenu );
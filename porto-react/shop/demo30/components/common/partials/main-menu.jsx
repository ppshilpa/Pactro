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

    function activeHandler ( e ) {
        document.querySelector( "body" ).classList.toggle( "mmenu-depart-active" );
        e.currentTarget.querySelector( ".menu-depart" ).classList.toggle( "opened" );
    }

    return (
        <>
            <nav className="main-nav w-100 mr-5 pr-5">
                <ul className="menu sf-js-enabled sf-arrows">
                    <li className="menu-item" onClick={ activeHandler }>
                        <a className="d-inline-flex align-items-center sf-with-ul">
                            <i className="custom-icon-toggle-menu d-inline-table"></i><span>Departments</span></a>
                        <div className="menu-depart-overlay"></div>
                        <div className="menu-depart">
                            <ALink href={ { pathname: '/shop', query: { category: 'for-her-1' } } }><i className="icon-smiling-girl"></i>For Her</ALink>
                            <ALink href={ { pathname: '/shop', query: { category: 'for-him-1' } } }><i className="icon-boy-broad-smile"></i>For Him</ALink>
                            <ALink href={ { pathname: '/shop', query: { category: 'for-kids-1' } } }><i className="icon-smiling-baby"></i>For Kids</ALink>
                            <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }><i className="icon-tshirt"></i>Fashion</ALink>
                            <ALink href={ { pathname: '/shop', query: { category: 'kitchen' } } }><i className="icon-chef"></i>Kitchen</ALink>
                            <ALink href={ { pathname: '/shop', query: { category: 'stationary' } } }><i className="icon-edit"></i>Stationary</ALink>
                            <ALink href={ { pathname: '/shop', query: { category: 'personalized' } } }><i className="icon-gift-2"></i>Personalized</ALink>
                        </div>
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
                        <ALink href="/product/default/porto-dotted-cup" className="sf-with-ul">Products</ALink>
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
                        <ALink href="#">New Arrivals</ALink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default withRouter( MainMenu );
import { useQuery } from "@apollo/react-hooks";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Apollo Server and Query
import withApollo from '../../server/apollo';
import { GET_HOME_DATA } from '../../server/queries';

// Import Custom Component
import ALink from "../../components/common/ALink";
import ProductOne from '../../components/features/products/product-one';

function VendorStore () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item"><ALink href="/store">Store</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">alexp</li>
                    </ol>
                </div>
            </nav>

            <div className="store-single-container container d-md-flex">
                <aside className="sidebar-store mb-3">
                    <div className="widget widget-products-categories mb-3">
                        <h3 className="widget-title">Store Product Category</h3>

                        <div className="widget-body">
                            <ul className="cat-list">
                                <li><ALink href={ { pathname: '/shop', query: { category: 'gifts' } } }>Gifts</ALink></li>
                                <li><ALink href={ { pathname: '/shop', query: { category: 'toys' } } }>Toys</ALink></li>
                                <li><ALink href={ { pathname: '/shop', query: { category: 'digital-microscope' } } }>Digital Microscope</ALink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget widget-contact">
                        <h3 className="widget-title">Contact Vendor</h3>
                        <div className="widget-body">
                            <form className="mb-0" action="#" method="get">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="you@example.com" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="6"
                                        placeholder="Type your message..."></textarea>
                                </div>
                                <div className="form-footer my-0">
                                    <div className="form-footer-right">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>

                <div className="store-single mb-3">
                    <div className="store-header-info">
                        <div className="store-details">
                            <div className="seller-avatar">
                                <img src="images/home/vendors/avatar-1.jpg" alt="avatar" width="100"
                                    height="100" />
                            </div>

                            <div className="store-data">
                                <h1 className="store-title">Porto Vendor</h1>
                                <ul className="store-info-list">
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <p className="store-address">California, United States (US)</p>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                        4.00 rating from 1 review
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Tabs className="store-single-tabs mb-2" selectedTabClassName="active" selectedTabPanelClassName="show">
                        <TabList className="nav nav-tabs">
                            <Tab className="nav-item">
                                <ALink href="#" className="nav-link">Products</ALink>
                            </Tab>
                        </TabList>

                        <div className="store-tab-content tab-content mt-2">
                            <TabPanel className="tab-pane fade">
                                <div className="row">
                                    {
                                        featured ?
                                            featured.slice( 0, 4 ).map( ( item, index ) => (
                                                <div className="col-6 col-sm-4 col-xl-3" key={ "product-one" + index }>
                                                    <ProductOne
                                                        product={ item }
                                                        adClass="inner-quickview inner-icon"
                                                    />
                                                </div>
                                            ) )
                                            :
                                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid col-6 col-sm-4 col-xl-3 pr-3 pl-3" key={ "product-one" + index }></div>
                                            )
                                    }
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>

            <div className="mb-3"></div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( VendorStore );
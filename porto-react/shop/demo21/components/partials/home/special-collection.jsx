import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductFour from '../../features/products/product-four';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function SpecialCollection ( props ) {
    const { products, loading } = props;
    const electronics = categoryFilter( products, "electronics" );
    const headphone = categoryFilter( products, "headphone-3" );
    const gifts = categoryFilter( products, "gifts" );
    const trousers = categoryFilter( products, "trousers-1" );
    const garden = categoryFilter( products, "garden-1" );

    function categoryFilter ( products, category ) {
        return products && products.filter( product => (
            product.categories.find( item => item.slug == category )
        ) )
    }

    return (
        <section className="special-offer-section bg-gray">
            <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <h3 className="subtitle font1 ls-n-10 mb-3">Special Offer</h3>

                            <div className="banner banner3 mb-xl-0 mb-3" style={ { backgroundColor: '#f4f4f4' } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-3.jpg"
                                        width="100%"
                                        height={ 257 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-left">
                                    <h3 className="font1 ls-0 m-b-2">Elec Deals</h3>
                                    <h4 className="font1 ls-n-10 m-b-3"><del>$59.00</del>$49.00</h4>
                                    <ALink href="/shop" className="btn btn-primary">Shop Now</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <Tabs selectedTabClassName="active" selectedTabPanelClassName="show">
                                <TabList className="nav nav-tabs mb-3">
                                    <Tab className="nav-item">
                                        <ALink href="#" className="nav-link">Best Sellers</ALink>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <ALink href="#" className="nav-link">Audio Speakers</ALink>
                                    </Tab>


                                    <Tab className="nav-item">
                                        <ALink href="#" className="nav-link">Cameras</ALink>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <ALink href="#" className="nav-link">Lamps</ALink>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <ALink href="#" className="nav-link">Computer</ALink>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <ALink href="#" className="nav-link">Mobile Phones</ALink>
                                    </Tab>
                                </TabList>

                                <div className="tab-content">
                                    <TabPanel className="tab-pane fade active">
                                        <div className="row no-gutters">
                                            {
                                                loading ?
                                                    [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                        <div className="skel-pro skel-pro-grid col-6 col-sm-4 col-lg-3 pr-3 pl-3" key={ "product-one" + index }></div>
                                                    )
                                                    :
                                                    products && products.slice( 0, 4 ).map( ( item, index ) => (
                                                        <div className="col-6 col-sm-4 col-lg-3" key={ "product-one" + index }>
                                                            <ProductFour
                                                                product={ item }
                                                                adClass="inner-quickview inner-icon"
                                                            />
                                                        </div>
                                                    ) )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <div className="row no-gutters">
                                            {
                                                electronics && electronics.slice( 0, 4 ).map( ( item, index ) => (
                                                    <div className="col-6 col-sm-4 col-lg-3" key={ "product-one" + index }>
                                                        <ProductFour
                                                            product={ item }
                                                            adClass="inner-quickview inner-icon"
                                                        />
                                                    </div>
                                                ) )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <div className="row no-gutters">
                                            {
                                                headphone && headphone.slice( 0, 4 ).map( ( item, index ) => (
                                                    <div className="col-6 col-sm-4 col-lg-3" key={ "product-one" + index }>
                                                        <ProductFour
                                                            product={ item }
                                                            adClass="inner-quickview inner-icon"
                                                        />
                                                    </div>
                                                ) )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <div className="row no-gutters">
                                            {

                                                gifts && gifts.slice( 0, 4 ).map( ( item, index ) => (
                                                    <div className="col-6 col-sm-4 col-lg-3" key={ "product-one" + index }>
                                                        <ProductFour
                                                            product={ item }
                                                            adClass="inner-quickview inner-icon"
                                                        />
                                                    </div>
                                                ) )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <div className="row no-gutters">
                                            {
                                                trousers && trousers.slice( 0, 4 ).map( ( item, index ) => (
                                                    <div className="col-6 col-sm-4 col-lg-3" key={ "product-one" + index }>
                                                        <ProductFour
                                                            product={ item }
                                                            adClass="inner-quickview inner-icon"
                                                        />
                                                    </div>
                                                ) )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <div className="row no-gutters">
                                            {
                                                garden && garden.slice( 0, 4 ).map( ( item, index ) => (
                                                    <div className="col-6 col-sm-4 col-lg-3" key={ "product-one" + index }>
                                                        <ProductFour
                                                            product={ item }
                                                            adClass="inner-quickview inner-icon"
                                                        />
                                                    </div>
                                                ) )
                                            }
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section >
    );
}
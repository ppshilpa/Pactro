import Reveal from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function FeaturedCollection ( props ) {
    const { featured, latest, bestSelling, onSale } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <section className="featured-section">
                <Tabs selectedTabClassName="active" selectedTabPanelClassName="show active">
                    <div className="heading d-flex align-items-center">
                        <h2 className="text-transform-none mb-0">Featured Items</h2>

                        <TabList className="nav justify-content-center">
                            <Tab className="nav-item m-0">
                                <ALink href="#" className="nav-link m-0 p-0"></ALink>
                            </Tab>

                            <Tab className="nav-item">
                                <ALink href="#" className="nav-link">Best Sellers</ALink>
                            </Tab>

                            <Tab className="nav-item">
                                <ALink href="#" className="nav-link">New</ALink>
                            </Tab>


                            <Tab className="nav-item">
                                <ALink href="#" className="nav-link">On Sale</ALink>
                            </Tab>
                        </TabList>
                    </div>

                    <div className="tab-content">
                        <TabPanel className="tab-pane fade active">
                            <OwlCarousel adClass="products-slider owl-nav-top" options={ productSlider }>
                                {
                                    featured ?
                                        featured.map( ( item, index ) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "featured:" + index }
                                            />
                                        ) )

                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="products-slider owl-nav-top" options={ productSlider }>
                                {
                                    bestSelling ?
                                        bestSelling.map( ( item, index ) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="products-slider owl-nav-top" options={ productSlider }>
                                {
                                    latest ?
                                        latest.map( ( item, index ) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="products-slider owl-nav-top" options={ productSlider }>
                                {
                                    onSale ?
                                        onSale.map( ( item, index ) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </Reveal>
    );
}
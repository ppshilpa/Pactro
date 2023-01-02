import Reveal from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ProductFour from '../../features/products/product-four';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import ALink from '../../common/ALink';
import { productSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

export default function FeaturedCollection ( props ) {
    const { product } = props;

    const kitchen = categoryFilter( product, "kitchen" );
    const dining = categoryFilter( product, "dining" );
    const bedroom = categoryFilter( product, "bedroom" );
    const living = categoryFilter( product, "living" );
    const office = categoryFilter( product, "office" );
    const outdoor = categoryFilter( product, "outdoor" );

    function categoryFilter ( product, category ) {
        return product && product.filter( product => (
            product.categories.find( item => item.slug == category )
        ) )
    }

    return (
        <section className="featured-section product-slider-tab">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active">
                    <div className="heading d-flex align-items-center flex-column flex-lg-row">
                        <div className="section-title">
                            <h2 className="mt-1 mb-1">FEATURED PRODUCTS</h2>
                        </div>

                        <TabList className="nav product-filter-items ml-lg-auto justify-content-center mb-0">
                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">All</ALink>
                            </Tab>

                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">kitchen</ALink>
                            </Tab>

                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">dining</ALink>
                            </Tab>


                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">bedroom</ALink>
                            </Tab>

                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">living</ALink>
                            </Tab>

                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">office</ALink>
                            </Tab>

                            <Tab className="nav-item product-filter-item">
                                <ALink href="#" className="nav-link">outdoor</ALink>
                            </Tab>
                        </TabList>
                    </div>

                    <div className="tab-content">
                        <TabPanel className="tab-pane fade active">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    product ?
                                        product.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    kitchen ?
                                        kitchen.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    dining ?
                                        dining.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    bedroom ?
                                        bedroom.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    living ?
                                        living.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    office ?
                                        office.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <OwlCarousel adClass="partners-carousel text-center" options={ productSlider }>
                                {
                                    outdoor ?
                                        outdoor.map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "Kitchen:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </TabPanel>
                    </div>
                </Tabs>
            </Reveal>
        </section>
    );
}
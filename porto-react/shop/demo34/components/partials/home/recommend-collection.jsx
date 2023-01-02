import Reveal from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

// Import Apollo Server
import { GET_HOME_DATA } from '../../../server/queries';
import withApollo from '../../../server/apollo';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

function RecommendCollection () {
    const router = useRouter();
    const [ category, setCategory ] = useState( "electronics" );
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_HOME_DATA );
    const products = data && data.products.data;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;

    useEffect( () => {
        getProducts( {
            variables: {
                category: category,
                from: 0,
                to: 6
            }
        } );
    }, [ category ] )

    function getProduct ( e, item ) {
        e.preventDefault();
        setCategory( item );
    }

    if ( error ) {
        return router.push( '/pages/404' );
    }

    return (
        <section className={ `recommended-section skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
            <div className="container">
                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                        <h2 className="section-title m-b-2">Recommended Products</h2>
                    </Reveal>

                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                        <h5 className="section-info p-b-4 mb-2">Only the best seller products added recently in our catalog</h5>
                    </Reveal>

                    <TabList className="nav nav-tabs justify-content-center pt-4 m-b-3">
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Best Seller</ALink>
                        </Tab>

                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">What's new</ALink>
                        </Tab>


                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Best Rating</ALink>
                        </Tab>

                        <Tab className="nav-item">
                            <a href="#" onClick={ e => { getProduct( e, "body" ); } } className="nav-link">Body</a>
                        </Tab>

                        <Tab className="nav-item">
                            <a href="#" onClick={ e => { getProduct( e, "fragrance-2" ); } } className="nav-link">Fragrance</a>
                        </Tab>

                        <Tab className="nav-item">
                            <a href="#" onClick={ e => { getProduct( e, "hair" ); } } className="nav-link">Hair</a>
                        </Tab>

                        <Tab className="nav-item">
                            <a href="#" onClick={ e => { getProduct( e, "makeup" ); } } className="nav-link">Makeup</a>
                        </Tab>

                        <Tab className="nav-item">
                            <a href="#" onClick={ e => { getProduct( e, "skincare" ); } } className="nav-link">Skincare</a>
                        </Tab>
                    </TabList>

                    <div className="product-slider-tab">
                        <div className="tab-content">
                            <TabPanel className="tab-pane fade">
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
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
                                            [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                            )
                                    }
                                </OwlCarousel>
                            </TabPanel>

                            <TabPanel className="tab-pane fade">
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
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
                                            [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                            )
                                    }
                                </OwlCarousel>
                            </TabPanel>

                            <TabPanel className="tab-pane fade">
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
                                    {
                                        topRated ?
                                            topRated.map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
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
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
                                    {
                                        products ?
                                            products.map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
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
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
                                    {
                                        products ?
                                            products.map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
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
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
                                    {
                                        products ?
                                            products.map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
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
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
                                    {
                                        products ?
                                            products.map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
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
                                <OwlCarousel adClass="products-slider show-nav-hover nav-outer nav-image-center" options={ productSlider }>
                                    {
                                        products ?
                                            products.map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
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
                    </div>
                </Tabs>
            </div>
        </section>
    );
}

export default withApollo( { ssr: typeof window === 'undefined' } )( RecommendCollection );
import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'
import { productSlider } from '../../../utils/data/slider';

function RecentCollection ( props ) {
    const { bestSelling } = props;

    return (
        <section className="recent-products-section">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="heading shop-list d-flex align-items-center flex-wrap bg-gray mb-0 pl-0 pr-0">
                    <h4 className="section-title text-transform-none mb-0 mr-0">Recently Viewed Products</h4>
                    <ALink className="view-all ml-auto" href="/shop">View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                </div>

                <OwlCarousel adClass="products-slider carousel-with-bg nav-circle pb-0" options={ productSlider }>
                    {
                        bestSelling ?
                            bestSelling.slice( 0, 7 ).map( ( item, index ) => (
                                <ProductOne
                                    adClass="inner-quickview inner-icon"
                                    product={ item }
                                    key={ "product-one" + index }
                                />
                            ) )
                            :
                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                            )
                    }
                </OwlCarousel>
            </Reveal >
        </section >

    );
}

export default React.memo( RecentCollection );
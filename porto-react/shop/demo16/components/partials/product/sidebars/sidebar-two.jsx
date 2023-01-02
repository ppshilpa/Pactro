import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Aollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ProductThree from '../../../features/products/product-three';
import OwlCarousel from '../../../features/owl-carousel';

// Import Settings
import { widgetFeaturedProductSlider } from '../../../../utils/data/slider';
import ALink from '../../../common/ALink';

function ProductSidebarTwo(props) {
    const { adClass = "" } = props;
    const { data, loading, error } = useQuery(GET_SHOP_SIDEBAR_DATA, { variables: { demo: 4, featured: true } });

    useEffect(() => {
        return () => {
            closeSidebar();
        }
    }, [])

    function sidebarToggle(e) {
        let body = document.querySelector('body');

        e.preventDefault();
        if (body.classList.contains('sidebar-opened')) {
            body.classList.remove('sidebar-opened');
        } else {
            body.classList.add('sidebar-opened');
        }
    }

    function closeSidebar() {
        document.querySelector('body').classList.contains('sidebar-opened') && document.querySelector('body').classList.remove('sidebar-opened');
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={e => sidebarToggle(e)}><i className="fas fa-sliders-h"></i></div>
            <aside className={`sidebar-product col-lg-3 mobile-sidebar left-sidebar ${adClass}`}>
                <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={70}>
                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget category-banner pt-0 pb-2 mt-0">
                                <figure>
                                    <LazyLoadImage
                                        className="slide-bg"
                                        alt="banner"
                                        src="images/home/banners/banner-sidebar.jpg"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>

                                <div className="category-slide-content">
                                    <h2 className="m-b-3">Winter Fashion Trends</h2>
                                    <h3 className="text-uppercase ml-0">Up to 30%</h3>
                                    <h4 className="text-uppercase ml-0 mb-1">Off on Jackets</h4>
                                    <h5 className="text-uppercase d-block">Starting at</h5>
                                    <h3 className="coupon-sale-text font2 ml-0 mt-0"><sup>$</sup>199<sup>99</sup></h3>
                                    <ALink href="/shop" className="btn btn-dark btn-xl ml-0" role="button">Shop
                                        Now</ALink>
                                </div>
                            </div>
                    }

                    <div className="widget widget-featured">
                        <h3 className="widget-title">Featured</h3>

                        <div className="widget-body pt-0">
                            <OwlCarousel adClass="widget-featured-products" isTheme={false} options={widgetFeaturedProductSlider}>
                                <div className="featured-col">
                                    {
                                        loading ?
                                            [0, 1, 2].map((item, index) =>
                                                <div className="skel-product-col skel-pro mb-2" key={"product-one" + index}></div>
                                            )
                                            :
                                            data.shopSidebarData.featured.map((item, index) => (
                                                <ProductThree
                                                    product={item}
                                                    key={"product-three" + index}
                                                />
                                            ))
                                    }
                                </div>

                                <div className="featured-col">
                                    {data && data.shopSidebarData.featured.map((item, index) => (
                                        <ProductThree product={item} key={`featured-${index}`} />
                                    ))}
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(ProductSidebarTwo);
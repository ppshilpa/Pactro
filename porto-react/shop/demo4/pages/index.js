import React from 'react';
import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeSection from "../components/partials/home/home-section";
import InfoSection from "../components/partials/home/info-section";
import BannerSection from "../components/partials/home/banner-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import NewCollection from "../components/partials/home/new-collection";
import SaleBanner from "../components/partials/home/sale-banner";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import CategorySection from "../components/partials/home/category-section";
import FeatureBoxSection from "../components/partials/home/feature-box-section";
import PromoSection from "../components/partials/home/promo-section";
import BrandSection from "../components/partials/home/brand-section";
import BlogSection from '../components/partials/home/blog-section';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7, postsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection />

                <div className="container">
                    <InfoSection />

                    <BannerSection />
                </div>

                <FeaturedCollection product={ featured } loading={ loading } />

                <NewCollection product={ latest } loading={ loading } />

                <div className="container">
                    <SaleBanner />

                    <CategorySection />
                </div>

                <FeatureBoxSection />

                <PromoSection />

                <BlogSection blog={ blog } loading={ loading } />

                <div className="container">
                    <hr className="mt-0 mb-0" />

                    <BrandSection />

                    <hr className="mt-0 mb-0" />
                </div>

                <ProductWidgetContainer featured={ featured } latest={ latest } bestSelling={ bestSelling } topRated={ topRated } loading={ loading } />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
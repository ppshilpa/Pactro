import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import ExploreSection from "../components/partials/home/explore-section";
import BannerSection from "../components/partials/home/banner-section";
import FeatureBoxSection from "../components/partials/home/feature-box-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import ProductFilterSection from "../components/partials/home/product-filter-section";
import FeaturedCollection from "../components/partials/home/featured-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10, postsCount: 6 } } );
    const featured = data && data.specialProducts.featured;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className="home">
                <HomeSection />

                <ProductFilterSection />

                <BannerSection />

                <div className={ `skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
                    <FeaturedCollection product={ featured } />
                </div>

                <ExploreSection />
                <FeatureBoxSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
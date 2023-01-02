import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BestCollection from "../components/partials/home/best-collection";
import FeaturedCollection from "../components/partials/home/featured-collection";
import HomeSection from "../components/partials/home/home-section";
import RecentCollection from "../components/partials/home/recent-collection";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import NewsletterSection from "../components/partials/home/newsletter-section";
import PromoSection from "../components/partials/home/promo-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const products = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection />

                <BestCollection product={ bestSelling } />

                <FeaturedCollection product={ featured } />

                <PromoSection />

                <RecentCollection product={ products } />

                <NewsletterSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
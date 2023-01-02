import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import CategorySection from "../components/partials/home/category-section";
import InfoSection from "../components/partials/home/info-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import BestCollection from "../components/partials/home/best-collection";
import FeaturedCollection from "../components/partials/home/featured-collection";
import BrandSection from "../components/partials/home/brand-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection />

                <InfoSection />

                <div className="container">
                    <FeaturedCollection product={ featured } />

                    <CategorySection />

                    <BestCollection product={ bestSelling } />

                    <BrandSection />
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewCollection from "../components/partials/home/new-collection";
import BannersSection from "../components/partials/home/banners-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import InfoSection from "../components/partials/home/info-section";
import BestCollection from "../components/partials/home/best-collsection";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home main skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <div className="container">
                    <HomeSection product={ featured } />

                    <BestCollection product={ bestSelling } />
                </div>

                <BannersSection />

                <div className="container">
                    <InfoSection />

                    <NewCollection product={ latest } />
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
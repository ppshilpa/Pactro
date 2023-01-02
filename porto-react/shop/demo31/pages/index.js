import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewCollection from "../components/partials/home/new-collection";
import BannerSection from "../components/partials/home/banner-section";
import BannersSection from "../components/partials/home/banners-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import InfoSection from "../components/partials/home/info-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import PopularCollection from "../components/partials/home/popular-collection";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 15 } } );
    const featured = data && data.specialProducts.featured;
    const latest = data && data.newProducts.data;
    const popular = data && data.popularProducts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home main skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <div className="container">
                    <HomeSection />

                    <InfoSection />
                </div>

                <FeaturedCollection product={ featured } />

                <div className="container">
                    <BannerSection />

                    <NewCollection product={ latest } loading={ loading } />

                    <PopularCollection product={ popular } />

                    <BannersSection />
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
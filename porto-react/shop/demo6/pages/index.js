import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeSection from "../components/partials/home/home-section";
import BannerSection from "../components/partials/home/banner-section";
import HalfSection from "../components/partials/home/half-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import FeatureBoxSection from "../components/partials/home/feature-box-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const latest = data && data.specialProducts.latest;
    const bestselling = data && data.specialProducts.bestSelling;
    let leftbanner = "leftbanner", rightbanner = "rightbanner";

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products overflow-hidden ${ loading ? '' : 'loaded' }` }>

                <HomeSection />

                <BannerSection />

                <HalfSection arrange={ leftbanner } product={ latest } loading={ loading } />

                <HalfSection arrange={ rightbanner } product={ bestselling } loading={ loading } />

                <div className="container-fluid m-b-5 p-b-3">

                    <FeatureBoxSection />

                    <FeaturedCollection product={ featured } loading={ loading } />

                </div>

            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
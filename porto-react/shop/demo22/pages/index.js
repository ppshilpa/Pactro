import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeSection from "../components/partials/home/home-section";
import InfoSection from '../components/partials/home/info-section';
import FeaturedCollection from "../components/partials/home/featured-collection";
import NewCollection from "../components/partials/home/new-collection";
import CategorySection from "../components/partials/home/category-section";
import BrandSection from "../components/partials/home/brand-section";
import SpecialCollectionOne from "../components/partials/home/special-collection-one";
import SpecialCollectionTwo from "../components/partials/home/special-collsection-two";
import BestCollection from "../components/partials/home/best-collection";
import TopCollection from "../components/partials/home/top-collection";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const dealProduct = data && data.dealProducts;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection dealProduct={ dealProduct } />

                <InfoSection />

                <FeaturedCollection product={ featured } loading={ loading } />

                <CategorySection />

                <BestCollection product={ bestSelling } />

                <NewCollection product={ latest } />

                <SpecialCollectionOne />

                <SpecialCollectionTwo />

                <TopCollection product={ topRated } />

                <BrandSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
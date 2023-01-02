import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import BannerOne from "../components/partials/home/banner-one";
import BannerTwo from "../components/partials/home/banner-two";
import BannerThree from "../components/partials/home/banner-three";
import CategorySection from "../components/partials/home/caty-section";
import NewsletterSection from "../components/partials/home/newsletter-section";
import HalfSection from "../components/partials/home/half-section";
import FeaturedCollection from "../components/partials/home/featured-collection";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const latest = data && data.specialProducts.latest;
    let leftbanner = "leftbanner", rightbanner = "rightbanner";

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products main homepage ${ loading ? '' : 'loaded' }` }>

                <BannerOne />

                <BannerTwo />

                <CategorySection />

                <FeaturedCollection product={ featured } loading={ loading } />

                <HalfSection arrange={ leftbanner } product={ latest } loading={ loading } />

                <HalfSection arrange={ rightbanner } product={ latest } loading={ loading } />

                <NewsletterSection />

                <BannerThree />

                <FeaturedCollection product={ latest } glasses={ true } loading={ loading } />

            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeSection from "../components/partials/home/home-section";
import BannerSection from "../components/partials/home/banner-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import SaleBanner from "../components/partials/home/sale-banner";
import ProductWidgets from "../components/partials/home/product-widget-container";
import BrandSection from "../components/partials/home/brand-section";
import Instagram from '../components/partials/home/instagram';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8 } } );
    const featured = data && data.products.data;
    const topRated = data && data.specialProducts.topRated;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >

                <HomeSection />

                <BannerSection />

                <FeaturedCollection product={ featured } loading={ loading } />

                <SaleBanner />

                <div className="container">

                    <ProductWidgets topRated={ topRated } bestselling={ bestSelling } latest={ latest } loading={ loading } />

                    <BrandSection />

                </div>

                <Instagram />

            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
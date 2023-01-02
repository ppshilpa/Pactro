import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeSection from "../components/partials/home/home-section";
import BannerSection from "../components/partials/home/banner-section";
import BrandSection from "../components/partials/home/brand-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 5 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const onSale = data && data.specialProducts.onSale;
    const product = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection />

                <BannerSection />

                <BrandSection />

                <FeaturedCollection product={ product } loading={ loading } />

                <FeaturedCollection product={ onSale } loading={ loading } sale={ true } />

                <ProductWidgetContainer featured={ featured } latest={ latest } bestSelling={ bestSelling } topRated={ topRated } loading={ loading } />

            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
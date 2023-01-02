import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeSection from "../components/partials/home/home-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import NewCollection from "../components/partials/home/new-collection";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import CategorySection from "../components/partials/home/category-section";
import CategoryBannerSection from "../components/partials/home/category-banner-section";
import BrandSection from "../components/partials/home/brand-section";
import SpecialCollection from "../components/partials/home/special-collection";
import FeatureBoxSection from "../components/partials/home/feature-box-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const onSale = data && data.specialProducts.onSale;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection />

                <FeaturedCollection product={ featured } loading={ loading } />

                <CategorySection />

                <NewCollection product={ latest } loading={ loading } />

                <SpecialCollection products={ bestSelling } loading={ loading } />

                <CategoryBannerSection />

                <FeatureBoxSection />

                <ProductWidgetContainer
                    featured={ featured }
                    onSale={ onSale }
                    bestSelling={ bestSelling }
                    topRated={ topRated }
                />

                <BrandSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
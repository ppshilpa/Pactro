import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterSection from "../components/partials/home/newsletter-section";
import ProductInfoSection from "../components/partials/home/product-info-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import TopCollection from "../components/partials/home/top-collection";
import InfoSection from "../components/partials/home/info-section";
import SaleCollection from "../components/partials/home/sale-collection";
import NewCollection from "../components/partials/home/new-collection";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const bestSelling = data && data.specialProducts.bestSelling;
    const topRated = data && data.specialProducts.topRated;
    const onSale = data && data.specialProducts.onSale;
    const latest = data && data.specialProducts.latest;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body border-top-0 skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection />

                <InfoSection />

                <TopCollection products={ topRated } />

                <ProductInfoSection products={ bestSelling } />

                <SaleCollection products={ onSale } />

                <NewCollection products={ latest } />

                <NewsletterSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
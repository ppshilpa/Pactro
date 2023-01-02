import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import IntroSection from "../components/partials/home/intro-section";
import ProductCollection from "../components/partials/home/product-collection";
import FeaturedCollection from "../components/partials/home/featured-collection";
import NewsletterBox from "../components/partials/home/newsletter-box";
import BrandSection from "../components/partials/home/brand-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7, postsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <div className="container">
                    <IntroSection />

                    <FeaturedCollection product={ featured } loading={ loading } />

                    <ProductCollection productbestSelling={ bestSelling } productlatest={ featured } loading={ loading } homepage={ true } />

                    <div className="mb-3"></div>

                    <FeaturedCollection product={ featured } loading={ loading } fashion={ true } />

                    <div className="m-b-1"></div>

                    <NewsletterBox />

                    <BrandSection />

                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
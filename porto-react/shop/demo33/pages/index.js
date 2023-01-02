import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BannersSection from "../components/partials/home/banners-section";
import BrandSection from "../components/partials/home/brand-section";
import HomeSection from "../components/partials/home/home-section";
import InstagramSection from "../components/partials/home/instagram-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import NewsletterSection from "../components/partials/home/newsletter-section";
import ProductWidgetsSection from "../components/partials/home/product-widgets-section";
import ShopSection from "../components/partials/home/shop-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <div className="container">
                    <HomeSection />

                    <BrandSection />
                </div>

                <BannersSection />

                <ShopSection product={ featured } />

                <ProductWidgetsSection latest={ latest } bestSelling={ bestSelling } topRated={ topRated } />

                <div className="container">
                    <InstagramSection />

                    <NewsletterSection />
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
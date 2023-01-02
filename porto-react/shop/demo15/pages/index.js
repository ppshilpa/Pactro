import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import IntroSection from "../components/partials/home/intro-section";
import ServiceBox from "../components/partials/home/service-box";
import SidebarHome from "../components/partials/home/sidebar-home";
import ProductSection from "../components/partials/home/product-section";
import BannerSection from "../components/partials/home/banner-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import SaleBanner from "../components/partials/home/sale-banner";
import NewsletterBanner from "../components/partials/home/newsletter-banner";
import BrandSection from "../components/partials/home/brand-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const topRated = data && data.specialProducts.topRated;
    const latest = data && data.specialProducts.latest;
    const newarrived = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products home overflow-hidden ${ loading ? '' : 'loaded' }` }>
                <div className="container">

                    <IntroSection />

                    <ServiceBox />

                    <section className="product-section">
                        <div className="row">
                            <SidebarHome />

                            <ProductSection product={ newarrived } loading={ loading } />
                        </div>
                    </section>

                    <BannerSection />

                    <FeaturedCollection product={ newarrived } loading={ loading } saled={ true } />

                    <SaleBanner />

                    <FeaturedCollection product={ newarrived } loading={ loading } />

                    <div className="m-b-1"></div>

                    <NewsletterBanner />

                    <BrandSection />

                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
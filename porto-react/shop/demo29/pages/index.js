import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import ProductCollection from "../components/partials/home/product-collection";
import BannerSection from "../components/partials/home/banner-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import FeaturedCollection from "../components/partials/home/featured-collection";
import InfoSection from "../components/partials/home/info-section";
import BlogSection from "../components/partials/home/blog-Section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 12 } } );
    const featured = data && data.specialProducts.featured;
    const products = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home main skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <div className="container">
                    <HomeSection />

                    <InfoSection />

                    <hr className="mt-0" />

                    <FeaturedCollection product={ featured } />
                </div>

                <BannerSection />

                <section>
                    <div className="container">
                        <ProductCollection product={ products } />

                        <hr />

                        <BlogSection />
                    </div>
                </section>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
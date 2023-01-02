import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import TopCollection from "../components/partials/home/top-collection";
import InfoSection from "../components/partials/home/info-section";
import BrandSection from "../components/partials/home/brand-section";
import BlogSection from "../components/partials/home/blog-section";
import ProductsCollection from "../components/partials/home/products-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import PopularCollection from "../components/partials/home/popular-collection";
import NewsletterSection from "../components/partials/home/newsletter-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6, postsCount: 3 } } );
    const featured = data && data.specialProducts.featured;
    const topRated = data && data.specialProducts.topRated;
    const products = data && data.products.data;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection />

                <NewsletterSection />

                <PopularCollection product={ featured } />

                <ProductsCollection product={ products } />

                <TopCollection product={ topRated } />

                <InfoSection />

                <BrandSection />

                <BlogSection blog={ blog } />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
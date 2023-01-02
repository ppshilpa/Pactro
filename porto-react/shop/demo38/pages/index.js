import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import CategorySection from "../components/partials/home/category-section";
import BlogSection from "../components/partials/home/blog-section";
import BrandSection from "../components/partials/home/brand-section";
import NewCollection from "../components/partials/home/new-collection";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import FeatureBoxSection from "../components/partials/home/feature-box-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import ProductWidgetSection from "../components/partials/home/product-widgets-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6, postsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection />

                <FeatureBoxSection />

                <FeaturedCollection products={ featured } />

                <NewCollection products={ latest } />

                <CategorySection />

                <div className="container">
                    <ProductWidgetSection featured={ featured } latest={ latest } bestSelling={ bestSelling } topRated={ topRated } />

                    <hr className="mt-4 m-b-5" />

                    <BlogSection blog={ blog } />

                    <hr className="mt-4 mb-0" />

                    <BrandSection />
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
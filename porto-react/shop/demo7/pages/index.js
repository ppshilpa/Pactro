import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import BannerSection from "../components/partials/home/banner-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import NewCollection from "../components/partials/home/new-collection";
import ProductWidgets from "../components/partials/home/product-widgets";
import CategorySection from "../components/partials/home/category-section";
import BrandSection from "../components/partials/home/brand-section";
import BlogSection from '../components/partials/home/blog-section';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const newarrived = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products home ${ loading ? '' : 'loaded' }` } >
                <BannerSection />

                <FeaturedCollection product={ featured } loading={ loading } />

                <CategorySection />

                <NewCollection product={ newarrived } loading={ loading } />

                <div className="container">

                    <ProductWidgets featured={ featured } bestselling={ bestSelling } newarrived={ newarrived } loading={ loading } />

                    <hr className="m-0" />

                    <BrandSection />

                    <hr className="m-0" />

                    <BlogSection />

                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
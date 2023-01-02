import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BlogSection from "../components/partials/home/blog-section";
import CategorySection from "../components/partials/home/category-section";
import CategoryBannerSection from "../components/partials/home/category-banner-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import ProductCollectionOne from "../components/partials/home/product-collection-one";
import ProductCollectionTwo from "../components/partials/home/product-collection-two";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8, postsCount: 6 } } );
    const fashion = data && data.products.data;
    const bestSelling = data && data.specialProducts.bestSelling;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home main skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection />

                <ProductCollectionOne product={ bestSelling } />

                <CategoryBannerSection />

                <ProductCollectionTwo product={ fashion } />

                <CategorySection />

                <BlogSection blogs={ blog } />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
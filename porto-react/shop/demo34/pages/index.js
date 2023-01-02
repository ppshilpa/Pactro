import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BrandSection from "../components/partials/home/brand-section";
import BestCollection from "../components/partials/home/best-collection";
import BannersSection from "../components/partials/home/banners-section";
import BlogSection from "../components/partials/home/blog-section";
import CategorySection from "../components/partials/home/category-section";
import HomeSection from "../components/partials/home/home-section";
import InstagramSection from "../components/partials/home/instagram-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import RecommendCollection from "../components/partials/home/recommend-collection";
import ReviewSection from "../components/partials/home/review-section";
import EssentialSection from "../components/partials/home/essential-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 8, postsCount: 3 } } );
    const bestSelling = data && data.specialProducts.bestSelling;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className="home" >
                <HomeSection />

                <CategorySection />

                <RecommendCollection />

                <BrandSection />

                <ReviewSection />

                <BestCollection product={ bestSelling } loading={ loading } />

                <BannersSection />

                <EssentialSection product={ bestSelling } />

                <BlogSection blog={ blog } />

                <InstagramSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
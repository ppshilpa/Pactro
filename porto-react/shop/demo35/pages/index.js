import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BrandSection from "../components/partials/home/brand-section";
import BlogSection from "../components/partials/home/blog-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import PopularSection from "../components/partials/home/popular-section";
import SpecialSection from "../components/partials/home/special-section";
import NewsletterSection from "../components/partials/home/newsletter-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 15, postsCount: 6 } } );
    const bestSelling = data && data.specialProducts.bestSelling;
    const topRated = data && data.specialProducts.topRated;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home bg-gray skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <HomeSection />

                <PopularSection products={ bestSelling } />

                <SpecialSection products={ topRated } />

                <BrandSection />

                <BlogSection blog={ blog } />

                <NewsletterSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
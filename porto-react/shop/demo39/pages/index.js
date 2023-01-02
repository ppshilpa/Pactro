import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import FeaturedCollection from "../components/partials/home/featured-collection";
import BannerSection from "../components/partials/home/banner-section";
import BannersSection from "../components/partials/home/banners-section";
import BlogSection from "../components/partials/home/blog-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import PopularCollection from "../components/partials/home/popular-collection";
import CategorySection from "../components/partials/home/category-section";
import TestimonialSection from "../components/partials/home/testimonial-section";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import InfoSection from "../components/partials/home/info-section";
import InstagramSection from "../components/partials/home/instagram-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6, postsCount: 6 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection />

                <div className="container">
                    <CategorySection />
                </div>

                <PopularCollection products={ bestSelling } />

                <BannersSection />

                <FeaturedCollection products={ featured } />

                <TestimonialSection />

                <ProductWidgetContainer featured={ featured } latest={ latest } bestSelling={ bestSelling } />

                <div className="container">
                    <BannerSection />

                    <BlogSection blog={ blog } />

                    <InfoSection />

                    <InstagramSection />
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
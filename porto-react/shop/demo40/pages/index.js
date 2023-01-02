import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BannerSection from "../components/partials/home/banner-section";
import CategorySection from "../components/partials/home/category-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import HomeSection from "../components/partials/home/home-section";
import InfoSection from "../components/partials/home/info-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import ProductsSection from "../components/partials/home/products-section";
import SpecialSection from "../components/partials/home/special-collection";
import NewsletterSection from "../components/partials/home/newsletter-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const onSale = data && data.specialProducts.onSale;
    const fruits = data && data.fruits.data;
    const meatAndSeafood = data && data.meatAndSeafood.data;
    const milkAndCheese = data && data.milkAndCheese.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <div className={ `home skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection />

                <InfoSection />

                <FeaturedCollection featured={ featured } latest={ latest } bestSelling={ bestSelling } onSale={ onSale } />

                <CategorySection />

                <ProductsSection milkAndCheese={ milkAndCheese } meatAndSeafood={ meatAndSeafood } fruits={ fruits } />

                <BannerSection />

                <SpecialSection products={ topRated } />

                <NewsletterSection />
            </div>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
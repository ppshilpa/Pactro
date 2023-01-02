import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import ServiceBox from "../components/partials/home/service-box";
import IntroSection from "../components/partials/home/home-slidebanner";
import BannerSection from "../components/partials/home/banner-section";
import ProductCollection from "../components/partials/home/product-collection";
import LoadMoreProducts from "../components/partials/home/load-more-product";
import PromoSection from "../components/partials/home/promo-section";
import FeatureBoxSection from "../components/partials/home/featurebox-section";
import BrandSection from "../components/partials/home/brand-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 10 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const products = data && data.products.data;
    const total = data && data.products.total;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>
                <div className="container container-not-boxed">

                    <ServiceBox />

                    <IntroSection />

                    <ProductCollection productfeatured={ featured } productbestSelling={ bestSelling } productlatest={ latest } loading={ loading } homepage={ true } />

                    <BannerSection />

                </div>
                <div className="container">
                    <LoadMoreProducts product={ products } perPage={ 10 } total={ total } loading={ loading } />
                </div>

                <div className="container container-not-boxed mt-2">

                    <PromoSection />

                    <div className="container">
                        <FeatureBoxSection />

                        <hr className="mt-0 m-b-5" />

                        <BrandSection />
                    </div>

                    <hr className="mt-4 mb-0" />

                </div>
            </main>

            <NewsletterModal />

        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
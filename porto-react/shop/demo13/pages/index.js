import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import HomeBannerSection from "../components/partials/home/home-banner-section";
import ServiceBox from "../components/partials/home/service-box";
import TabBox from "../components/partials/home/tab-box";
import BannerGroup from "../components/partials/home/banner-group";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import HomeSidebar from "../components/partials/home/home-sidebar";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 9, postsCount: 3 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const topRated = data && data.specialProducts.topRated;
    const latest = data && data.specialProducts.latest;
    const newarrived = data && data.products.data;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body overflow-hidden skel-shop-products ${ loading ? '' : 'loaded' }` }>

                <HomeBannerSection />

                <ServiceBox />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">

                            <TabBox featured={ featured } newarrived={ newarrived } loading={ loading } />

                            <BannerGroup />

                            <ProductWidgetContainer featured={ featured } latest={ latest } bestSelling={ bestSelling } topRated={ topRated } loading={ loading } />

                        </div>

                        <HomeSidebar blog={ blog } loading={ loading } data={ data } />

                    </div>
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
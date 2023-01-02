import { useQuery } from "@apollo/react-hooks";
import Reveal from 'react-awesome-reveal';

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import IntroSection from "../components/partials/home/home-slider";
import ServiceBox from "../components/partials/home/service-box";
import GridBanner from "../components/partials/home/grid-banner";
import FeaturedCollection from "../components/partials/home/featured-collection";
import BrandSection from "../components/partials/home/brand-section";

import ALink from "../components/common/ALink";
import { fadeInLeftShorter } from '../utils/data/keyframes'

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 5 } } );
    const featured = data && data.specialProducts.featured;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` } >
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-3 mb-2">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                                <div className="side-menu-wrapper">
                                    <h2 className="side-menu-title ls-10">Top Categories</h2>

                                    <div className="side-menu-body mb-2 px-3 mx-3">
                                        <ul className="side-menu pb-1">
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }><i className="icon-category-fashion"></i>Fashion</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'electronics' } } }><i className="icon-category-electronics"></i>Electronics</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'gifts' } } }><i className="icon-category-gifts"></i>Gifts</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'home' } } }><i className="icon-category-garden"></i>Home &amp; Garden</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'music' } } }><i className="icon-category-music"></i>Music</ALink></li>
                                            <li><ALink href={ { pathname: '/shop', query: { category: 'sports' } } }><i className="icon-cat-sport"></i>Sports</ALink></li>
                                        </ul>

                                        <ALink href="#" className="btn btn-block btn-dark btn-lg px-0 ls-10">Huge Sale - <strong>70%</strong> Off</ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-9">
                            <IntroSection />
                        </div>
                    </div>

                    <ServiceBox />

                    <GridBanner />

                    <div className="mb-1"></div>

                </div>

                <FeaturedCollection product={ featured } loading={ loading } homepage={ true } />

                <BrandSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );
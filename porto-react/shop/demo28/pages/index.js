import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import BannerSectionOne from "../components/partials/home/banner-section-one";
import BannerSectionTwo from "../components/partials/home/banner-section-two";
import BannerSectionThree from "../components/partials/home/banner-section-three";
import ProductSection from "../components/partials/home/product-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import SpecificationSection from "../components/partials/home/specification-section";
import TestimonialSection from "../components/partials/home/testimonial-section";
import VideoSection from "../components/partials/home/video-section";
import RotatingSection from "../components/partials/home/rotating-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 6 } } );
    const products = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` } >
                <HomeSection product={ products ? products[ 0 ] : null } />

                <BannerSectionOne />

                <BannerSectionTwo />

                <BannerSectionThree product={ products ? products[ 4 ] : null } />

                <RotatingSection />

                <SpecificationSection product={ products ? products[ 1 ] : null } />

                <TestimonialSection />

                <ProductSection product={ products ? products[ 5 ] : null } />

                <VideoSection />
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( React.memo( Home ) );
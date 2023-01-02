import React from 'react';
import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaFive from '../../../components/partials/product/media/product-media-five';
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
import SingleTabOne from '../../../components/partials/product/tabs/single-tab-one';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import ShopSidebarOne from '../../../components/partials/shop/sidebar/shop-sidebar-one';
import ProductSidebarThree from '../../../components/partials/product/sidebars/sidebar-three';

// import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCT } from '../../../server/queries';

function ProductStickyInfo () {
    if ( !useRouter().query.slug ) return (
        <div className="loading-overlay">
            <div className="bounce-loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );

    const slug = useRouter().query.slug;
    const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    const product = data && data.product.data;
    const related = data && data.product.related;

    if ( error ) {
        return useRouter().push( '/pages/404' );
    }

    return (
        <main className="main pb-5">
            <div className={ `container-fluid skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>
                <div className="row">
                    <div className="col-xl-2cols col-lg-3 position-relative">
                        <ShopSidebarOne adClass="h-100" />
                    </div>

                    <div className="col-xl-8cols col-lg-6 col-md-8">
                        <div className="container p-0">
                            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                                <div className="container">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                        <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                                        <li className="breadcrumb-item">
                                            {
                                                product && product.categories.map( ( item, index ) => (
                                                    <React.Fragment key={ `category-${ index }` }>
                                                        <ALink href={ { pathname: "/shop", query: { category: item.slug } } }>{ item.name }</ALink>
                                                        { index < product.categories.length - 1 ? ',' : '' }
                                                    </React.Fragment>
                                                ) )
                                            }
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">{ product && product.name }</li>
                                    </ol>
                                </div>
                            </nav>

                            <div className={ `product-single-container product-single-default product-single-info` }>
                                <div className="row">
                                    <ProductMediaFive
                                        adClass="col-lg-5 col-md-6"
                                        subClass="col-md-12"
                                        product={ product }
                                    />

                                    <div className="col-lg-7 col-md-6">
                                        <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={ 70 }>
                                            <ProductDetailOne
                                                adClass=""
                                                product={ product }
                                                prev={ product && data.product.prev }
                                                next={ product && data.product.next }
                                            />
                                        </StickyBox>
                                    </div>
                                </div>

                                <div className="row align-items-start">
                                    <div className="widget widget-info col-md-9 col-xl-6 pb-4 pb-md-0">
                                        <ul className="promote">
                                            <li>
                                                <i className="icon-shipping"></i>
                                                <h4>FREE<br />SHIPPING</h4>
                                            </li>
                                            <li>
                                                <i className="icon-us-dollar"></i>
                                                <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                            </li>
                                            <li>
                                                <i className="icon-online-support"></i>
                                                <h4>ONLINE<br />SUPPORT 24/7</h4>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="product-single-share col-md-3 col-xl-6 align-items-start justify-content-md-end mt-0">
                                        <label className="sr-only">Share:</label>

                                        <div className="social-icons mt-0 pb-5 pb-md-0">
                                            <a href="#" className="social-icon social-facebook icon-facebook"
                                                title="Facebook"></a>
                                            <a href="#" className="social-icon social-twitter icon-twitter"
                                                title="Twitter"></a>
                                            <a href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                                title="Linkedin"></a>
                                            <a href="#" className="social-icon social-mail icon-mail-alt"
                                                title="Mail"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SingleTabOne product={ product } />
                        </div>
                    </div>

                    <div className="col-xl-2cols col-lg-3 col-md-4">
                        <ProductSidebarThree />
                    </div>
                </div>

                <RelatedProducts products={ related } loading={ loading } />
            </div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductStickyInfo );
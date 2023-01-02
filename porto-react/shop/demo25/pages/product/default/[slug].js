import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCT } from '../../../server/queries';

// Import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaOne from '../../../components/partials/product/media/product-media-one';
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
import ProductWidgetContainer from '../../../components/partials/product/widgets/product-widget-container';
import ProductSidebarThree from '../../../components/partials/product/sidebars/sidebar-three';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import SingleTabOne from '../../../components/partials/product/tabs/single-tab-one';

function ProductDefault () {
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
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                        <li className="breadcrumb-item">
                            {
                                product && product.categories.map( ( item, index ) => (
                                    <React.Fragment key={ `category-${index}` }>
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

            <div className="bg-white">
                <div className={ `container skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
                    <div className="row main-content">
                        <div className="col-lg-9 product-sidebar-right pb-3">
                            <div className="product-single-container product-single-default">
                                <div className="row">
                                    <ProductMediaOne product={ product } />

                                    <ProductDetailOne
                                        product={ product }
                                        prev={ product && data.product.prev }
                                        next={ product && data.product.next }
                                    />
                                </div>
                            </div>

                            <SingleTabOne product={ product } />
                        </div>

                        <ProductSidebarThree />
                    </div>

                    <RelatedProducts products={ related } loading={ loading } />
                </div>
            </div>
        </main >
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductDefault );
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
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import SingleTabOne from '../../../components/partials/product/tabs/single-tab-one';

function ProductDefault () {
    const router = useRouter();
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
                        <li className="breadcrumb-item active" aria-current="page">{ product && product.name }</li>
                    </ol>
                </div>
            </nav>

            <div className={ `container skeleton-body skel-shop-products pt-5 ${loading ? '' : 'loaded'}` }>
                <div className="product-single-container product-single-default pt-2">
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
        </main >
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductDefault );
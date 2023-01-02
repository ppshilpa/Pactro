import React from 'react';
import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaFive from '../../../components/partials/product/media/product-media-five';
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
import SingleTabFive from '../../../components/partials/product/tabs/single-tab-five';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import ProductWidgetContainer from '../../../components/partials/product/widgets/product-widget-container';

// import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCT } from '../../../server/queries';

function ProductDefault() {
    if (!useRouter().query.slug) return (
        <div className="loading-overlay">
            <div className="bounce-loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
    const slug = useRouter().query.slug;
    const { data, loading, error } = useQuery(GET_PRODUCT, { variables: { slug } });
    const product = data && data.product.data;
    const related = data && data.product.related;

    if (error) {
        return useRouter().push('/pages/404');
    }

    return (
        <main className="main">
            <div className={`container-fluid skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}>
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">home</ALink></li>
                        <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                        <li className="breadcrumb-item">
                            {
                                product && product.categories.map((item, index) => (
                                    <React.Fragment key={`category-${index}`}>
                                        <ALink href={{ pathname: "/shop", query: { category: item.slug } }}>{item.name}</ALink>
                                        {index < product.categories.length - 1 ? ',' : ''}
                                    </React.Fragment>
                                ))
                            }
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{product && product.name}</li>
                    </ol>
                </nav>

                <div className={`product-single-container product-single-default product-single-info`}>
                    <div className="row">
                        <ProductMediaFive
                            adClass="col-lg-5 col-md-6"
                            subClass="col-md-12"
                            product={product}
                        />

                        <div className="col-lg-7 col-md-6">
                            <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={70}>
                                <ProductDetailOne
                                    adClass=""
                                    product={product}
                                    prev={product && data.product.prev}
                                    next={product && data.product.next}
                                />
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>

            <SingleTabFive
                adClass={`custom-product-single-tabs bg-gray mb-4 skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}
                product={product}
            />

            <RelatedProducts
                adClass={`skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}
                isContainer={true}
                loading={loading}
                products={related}
            />

            <div className="container-fluid">
                <hr className="mt-0 m-b-5" />

                <ProductWidgetContainer />
            </div>
        </main >
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(ProductDefault);
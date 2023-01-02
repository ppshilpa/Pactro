import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_POSTS } from "../../../server/queries";

// Import Custom Component
import ShopSidebarOne from '../../../components/partials/shop/sidebar/shop-sidebar-one';
import ProductSidebarThree from '../../../components/partials/product/sidebars/sidebar-three';
import BlogTypeOne from '../../../components/features/blogs/blog-type-one';
import BlogSidebar from '../../../components/partials/blog/blog-sidebar';
import Pagination from '../../../components/features/pagination';

function Blog () {
    const router = useRouter();
    const query = router.query;
    const [ getBlogs, { data, loading, error } ] = useLazyQuery( GET_POSTS );
    const [ perPage, setPerPage ] = useState( 6 );
    const blogs = data && data.posts.data;
    const totalPage = data ? parseInt( data.posts.total / perPage ) + ( data.posts.total % perPage ? 1 : 0 ) : 1;
    let page = query.page ? query.page : 1;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    useEffect( () => {
        let offset = document.querySelector( '.main' ).getBoundingClientRect().top + window.pageYOffset - 68;
        setTimeout( () => {
            window.scrollTo( { top: offset, behavior: 'smooth' } );
        }, 200 );

        getBlogs( {
            variables: {
                category: query.category,
                from: perPage * ( page - 1 ),
                to: perPage * page
            }
        } );
    }, [ query ] )

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Blog Page </title>
            </Helmet>

            <main className="main pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2cols col-lg-3 position-relative">
                            <ShopSidebarOne adClass="h-100" />
                        </div>

                        <div className="col-xl-8cols col-lg-6 col-md-8">
                            <div className="container p-0">
                                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                </nav>

                                <div className="row blog-group">
                                    <div className="col-xl-9">
                                        <div className={ `blog-section row pt-0 pb-3 skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
                                            {
                                                loading ?
                                                    new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) => (
                                                        <div className="col-sm-6 col-xl-4" key={ "Skeleton:" + index }>
                                                            <div className="skel-pro skel-pro-grid"></div>
                                                        </div>
                                                    ) )
                                                    :
                                                    blogs ?
                                                        blogs.length ?
                                                            blogs.slice( 0, 6 ).map( ( blog, index ) => (
                                                                <div className="col-sm-6 col-xl-4" key={ "BlogTypeOne" + index }>
                                                                    <BlogTypeOne blog={ blog } />
                                                                </div>
                                                            ) )
                                                            :
                                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                                        : ''
                                            }
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <Pagination totalPage={ totalPage } />
                                        </div>
                                    </div>

                                    <BlogSidebar />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2cols col-lg-3 col-md-4">
                            <ProductSidebarThree />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default withApollo( { ssr: typeof window === "undefined" } )( Blog );
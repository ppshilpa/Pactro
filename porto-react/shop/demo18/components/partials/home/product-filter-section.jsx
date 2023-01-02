import Reveal from 'react-awesome-reveal';
import StickyBox from 'react-sticky-box';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useLazyQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCTS } from '../../../server/queries';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

function ProductFilterSection () {
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const [ loadMoreProducts, { data: newData } ] = useLazyQuery( GET_PRODUCTS, { fetchPolicy: 'no-cache' } );
    const [ products, setProducts ] = useState( [] );
    const [ category, setCategory ] = useState( '' );
    const total = data && data.products.total;
    const product = data && data.products.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    useEffect( () => {
        let newProducts = newData ? newData.products.data : [];
        setProducts( [ ...products, ...newProducts ] );
    }, [ newData ] )

    useEffect( () => {
        setProducts( [] );

        getProducts( {
            variables: {
                category: category,
                from: 0,
                to: 10
            }
        } );
    }, [ category ] )

    useLayoutEffect( () => {
        if ( data ) {
            setProducts( [ ...products, ...data.products.data ] );
        }
    }, [ data ] )

    function onLoadMoreProducts () {
        loadMoreProducts( {
            variables: {
                from: products.length,
                to: products.length + 5
            }
        } )
    }

    function getProduct ( e, item ) {
        e.preventDefault();
        e.currentTarget.closest( '.check-filter-list' ).querySelector( '.active' ) && e.currentTarget.closest( '.check-filter-list' ).querySelector( '.active' ).classList.remove( 'active' );
        e.currentTarget.classList.add( 'active' );
        setCategory( item );
    }

    return (
        <section className={ `products-filter-container bg-gray skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container-fluid">
                    <div className="row align-items-lg-stretch">
                        <aside className="filter-sidebar col-lg-2 pb-5">
                            <StickyBox className="sidebar-wrapper" offsetTop={ 90 }>
                                <h3 className="ls-n-10 text-uppercase text-primary">Sort By</h3>

                                <ul className="check-filter-list">
                                    <li><a href="#" onClick={ e => { getProduct( e, '' ); } } className="active">All</a></li>
                                    <li><a href="#" onClick={ e => { getProduct( e, 'accessories-1' ); } }>Accessories</a></li>
                                    <li><a href="#" onClick={ e => { getProduct( e, 'electronics' ); } }>Electronics</a></li>
                                    <li><a href="#" onClick={ e => { getProduct( e, 'men' ); } }>Men</a></li>
                                    <li><a href="#" onClick={ e => { getProduct( e, 'shoes-1' ); } }>Shoes</a></li>
                                    <li><a href="#" onClick={ e => { getProduct( e, 'women' ); } }>Women</a></li>
                                </ul>
                            </StickyBox>
                        </aside>

                        <div className="col-lg-10">
                            <div className="row product-ajax-grid mb-2">
                                {
                                    product ?
                                        products.map( ( item, index ) => (
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ "product-one" + index }>
                                                <ProductOne
                                                    product={ item }
                                                    adClass="inner-quickview inner-icon"
                                                />
                                            </div>
                                        ) )
                                        :
                                        new Array( 10 ).fill( 1 ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ "Featured Product:" + index }>
                                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                            </div>
                                        )
                                }
                            </div>
                            {
                                total && products.length < total ?
                                    <div className="product-more-container d-flex justify-content-center">
                                        <button className="btn btn-outline-dark loadmore" onClick={ onLoadMoreProducts }>Load more...</button>
                                    </div>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductFilterSection );
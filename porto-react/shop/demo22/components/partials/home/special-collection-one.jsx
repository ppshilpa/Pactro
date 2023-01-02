import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';

// Import Apollo and Query
import { GET_PRODUCTS } from '../../../server/queries';
import withApollo from '../../../server/apollo';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductFour from '../../features/products/product-four';

// Import Settings
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function SpecialCollectionOne () {
    const [ category, setCategory ] = useState( "electronics" );
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const products = data && data.products.data;

    useEffect( () => {
        getProducts( {
            variables: {
                category: category,
                from: 0,
                to: 4
            }
        } );
    }, [ category ] )

    function getProduct ( e, item ) {
        e.preventDefault();
        e.currentTarget.closest( '.category-lists' ).querySelector( '.active' ) && e.currentTarget.closest( '.category-lists' ).querySelector( '.active' ).classList.remove( 'active' );
        e.currentTarget.classList.add( 'active' );
        setCategory( item );
    }

    return (
        <section className="electronics-container">
            <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <h2 className="section-title border-0 line-height-1 ls-n-10 m-b-4">Electronics</h2>

                    <div className="row no-gutters m-0 bg-gray">
                        <div className="col-md-5 col-lg-2">
                            <div className="category-lists d-flex flex-md-column flex-wrap">
                                <a href="#" onClick={ e => { getProduct( e, "3-d-printer-kit" ); } }>3D Printer Kit</a>
                                <a href="#" onClick={ e => { getProduct( e, "arduino-compatible-boards" ); } }>Arduino Compatible Boards</a>
                                <a href="#" onClick={ e => { getProduct( e, "digital-microscope" ); } }>Digital Microscope</a>
                                <a href="#" onClick={ e => { getProduct( e, "furniture-1" ); } }>Furniture</a>
                                <a href="#" onClick={ e => { getProduct( e, "ip-camera" ); } }>IP Camera</a>
                                <a href="#" onClick={ e => { getProduct( e, "toys-1" ); } }>Toys</a>
                                <a href="#" onClick={ e => { getProduct( e, "tv-box" ); } }>TV Box</a>
                            </div>
                        </div>

                        <div className="col-md-7 col-lg-3 order-first order-md-0">
                            <div className="banner banner4 h-100 media-with-lazy" style={ { backgroundColor: '#f4f4f4' } }>
                                <figure className="h-100">
                                    <LazyLoadImage
                                        alt="Banner"
                                        src="images/home/banners/banner-4.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                        className="h-100"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-top">
                                    <h3 className="font1 text-center text-uppercase">
                                        Electronic<br />deals
                                    </h3>
                                    <div className="coupon-sale-text d-flex flex-column align-items-start">
                                        <h4 className="m-b-2 font1 d-block text-white bg-dark skew-box">Exclusive
                                            COUPON</h4>
                                        <h5 className="mb-0 font1 d-inline-block bg-dark skew-box"><i
                                            className="text-dark ls-0">UP
                                                TO</i><b className="text-white">$100</b><sub className="text-dark">OFF</sub>
                                        </h5>
                                    </div>
                                </div>

                                <div className="banner-layer banner-layer-bottom">
                                    <ALink href="/shop" className="btn btn-light font2">View All Now</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="grid grid2 h-100">
                                {
                                    products ?
                                        products.map( ( item, index ) => (
                                            <div className={ `${ index === 1 ? "grid-item height-x2" : "grid-item height-x1" } ${ index === 0 ? ' width-x2' : '' }` } key={ "Grid" + index }>
                                                <ProductFour product={ item } />
                                            </div>
                                        ) )
                                        :
                                        new Array( 4 ).fill( 1 ).map( ( item, index ) =>
                                            <div className={ `${ index === 1 ? "grid-item height-x2" : "grid-item height-x1" }${ index === 0 ? ' width-x2' : '' }` } key={ index }></div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default withApollo( { ssr: typeof window === 'undefined' } )( SpecialCollectionOne );
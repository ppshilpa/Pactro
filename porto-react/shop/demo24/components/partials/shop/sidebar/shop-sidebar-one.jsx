import SlideToggle from 'react-slide-toggle';
import InputRange from 'react-input-range';
import StickyBox from 'react-sticky-box';
import Tree from 'rc-tree';
import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
// Import Apollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ALink from '../../../common/ALink';
import ProductThree from '../../../features/products/product-three';

// Import Utils
import { shopRatings } from '../../../../utils/data/shop';

const TreeNode = ( props ) => {
    return (
        <>
            { props.name }
            <span className="products-count">({ props.count })</span>
        </>
    )
}

function ShopSidebarOne ( props ) {
    const router = useRouter();
    const { adClass = "" } = props;
    const query = router.query;
    const { data, loading, error } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { featured: true } } );
    const [ priceRange, setRange ] = useState( { min: 0, max: 1000 } );
    const categories = useMemo( () => {
        let cats = data ? data.shopSidebarData.categories : [];
        let stack = [],
            result = [];
        result = cats.reduce( ( acc, cur ) => {
            if ( !cur.parent ) {
                let newNode = {
                    key: cur.slug,
                    title: <TreeNode name={ cur.name } count={ cur.count } />,
                    children: []
                };
                acc.push( newNode );
                stack.push( {
                    name: cur.name,
                    children: newNode.children
                } );
            }
            return acc;
        }, [] );

        let temp, children, childNode;

        while ( stack.length ) {
            temp = stack[ stack.length - 1 ];
            stack.pop();
            children = cats.filter( item => item.parent === temp.name );
            children.forEach( child => {
                childNode = {
                    key: child.slug,
                    title: <TreeNode name={ child.name } count={ child.count } />,
                    children: []
                };
                temp.children.push( childNode );
                stack.push( {
                    name: child.name,
                    children: childNode.children
                } );
            } );
        }

        return result;
    }, [ data ] );

    useEffect( () => {
        return () => {
            closeSidebar();
        }
    }, [] )

    useEffect( () => {
        if ( query.min_price && query.max_price ) {
            setRange( { min: parseInt( query.min_price ), max: parseInt( query.max_price ) } );
        } else {
            setRange( { min: 0, max: 1000 } );
        }
    }, [ query ] )

    function filterByCategory ( selected ) {
        router.push( router.pathname.replace( '[grid]', query.grid ) + '?category=' + ( selected.length ? selected[ 0 ] : '' ) );
    }

    function onChangePriceRange ( value ) {
        setRange( value );
    }

    function containsAttrInUrl ( type, value ) {
        const currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        return currentQueries && currentQueries.includes( value.toString() );
    }

    function getUrlForAttrs ( type, value ) {
        let currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => parseInt( item ) !== value ) : [ ...currentQueries, value ];
        return currentQueries.join( ',' );
    }

    function filterByPrice ( e ) {
        e.preventDefault();
        let url = router.pathname.replace( '[grid]', query.grid );
        let arr = [ `min_price=${ priceRange.min }`, `max_price=${ priceRange.max }`, 'page=1' ];
        for ( let key in query ) {
            if ( key !== 'min_price' && key !== 'max_price' && key !== 'page' && key !== 'grid' ) arr.push( key + '=' + query[ key ] );
        }
        url = url + '?' + arr.join( '&' );
        router.push( url );
    }

    function closeSidebar () {
        document.querySelector( 'body' ).classList.contains( 'sidebar-opened' ) && document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
    }

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={ closeSidebar }></div>
            <aside className={ `sidebar-shop col-lg-3  mobile-sidebar skeleton-body skel-shop-products ${ adClass } ${ !loading ? 'loaded' : '' } ${ props.display === 'none' ? 'd-lg-none' : '' } ${ props.right ? '' : 'order-lg-first' }` }>
                <StickyBox className="sidebar-wrapper" offsetTop={ 70 }>
                    <div className="widget">
                        {
                            loading ?
                                <div className="skel-widget"></div>
                                :
                                <SlideToggle>
                                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a href="#" onClick={ ( e ) => { e.preventDefault(), onToggle() } } className={ toggleState === 'COLLAPSED' ? 'collapsed' : '' }>Categories<span className="toggle"></span></a>
                                            </h3>
                                            <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                <div className="widget-body">
                                                    <Tree
                                                        className="no-icon cat-list border-0"
                                                        selectable={ true }
                                                        showIcon={ false }
                                                        defaultExpandedKeys={ query.category ? [ query.category ] : [] }
                                                        switcherIcon={ ( props ) => {
                                                            return ( !props.isLeaf ?
                                                                <span className="toggle"></span>
                                                                : ''
                                                            )
                                                        } }
                                                        selectedKeys={ query.category ? [ query.category ] : [] }
                                                        treeData={ categories }
                                                        onSelect={ filterByCategory }
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) }
                                </SlideToggle>
                        }
                    </div>

                    {
                        ( query.category || query.sizes || query.colors || query.min_price || query.max_price || query.ratings ) && <div className="widget pb-5">
                            <ALink href={ { query: { grid: query.grid } } } scroll={ false } className="btn btn-primary reset-filter">Reset All Filters</ALink>
                        </div>
                    }

                    <div className="widget overflow-hidden">
                        {
                            loading ?
                                <div className="skel-widget"></div>
                                :

                                <SlideToggle>
                                    { ( { onToggle, setCollapsibleElement, toggleState } ) =>
                                        (
                                            <>
                                                <h3 className="widget-title">
                                                    <a className={ toggleState === 'COLLAPSED' ? 'collapsed' : '' } href="#" role="button" onClick={ ( e ) => { e.preventDefault(), onToggle() } }>Price<span className="toggle"></span></a>
                                                </h3>

                                                <div ref={ setCollapsibleElement }>
                                                    <div className="widget-body pb-0">
                                                        <form action="#">
                                                            <div className="price-slider-wrapper">
                                                                <InputRange
                                                                    maxValue={ 1000 }
                                                                    minValue={ 0 }
                                                                    step={ 50 }
                                                                    value={ priceRange }
                                                                    onChange={ onChangePriceRange } />
                                                            </div>

                                                            <div
                                                                className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                                <div className="filter-price-text">
                                                                    Price: <span id="filter-price-range">${ priceRange.min } &mdash; ${ priceRange.max }</span>
                                                                </div>

                                                                <button type="submit" className="btn btn-primary" onClick={ ( e ) => filterByPrice( e ) }>Filter</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </>
                                        ) }
                                </SlideToggle>
                        }
                    </div>

                    <div className="widget widget-ratings">
                        {
                            loading ?
                                <div className="skel-widget"></div>
                                :
                                <SlideToggle>
                                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a className={ toggleState === 'COLLAPSED' ? 'collapsed' : '' } href="#" onClick={ ( e ) => { e.preventDefault(), onToggle() } }>Rating<span className="toggle"></span></a>
                                            </h3>
                                            <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                <div className="widget-body pb-0">
                                                    <ul className="mb-0">
                                                        {
                                                            shopRatings.map( ( item, index ) => (
                                                                <li key={ `rating-${ index }` } className={ `${ query.ratings && query.ratings.indexOf( item.rating ) !== -1 ? 'active' : '' }` }>
                                                                    <ALink href={ { query: { ...query, page: 1, ratings: getUrlForAttrs( 'ratings', item.rating ) } } } scroll={ false } >
                                                                        <div className="ratings-container">
                                                                            <div className="product-ratings">
                                                                                <span className="ratings" style={ { width: 20 * item.rating + '%' } }></span>
                                                                            </div>
                                                                        </div>
                                                                        <span className="products-count">(1)</span>
                                                                    </ALink>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) }
                                </SlideToggle>
                        }
                    </div>

                    <div className="widget widget-featured">
                        <h3 className="widget-title">Featured Products</h3>

                        <div className="widget-body">
                            <div className="featured-col">
                                {
                                    loading ?
                                        [ 0, 1, 2 ].map( ( item, index ) =>
                                            <div className="skel-product-col skel-pro mb-2" key={ "product-one" + index }></div>
                                        )
                                        :
                                        data.shopSidebarData.featured.slice( 0, 2 ).map( ( item, index ) => (
                                            <ProductThree
                                                product={ item }
                                                key={ "product-three" + index }
                                            />
                                        ) )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="widget widget-block">
                        <h3 className="widget-title font1 pb-0">Custom HTML Block</h3>
                        <h5 className="text-body mb-2">This is a custom sub-title.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                    </div>
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ShopSidebarOne );
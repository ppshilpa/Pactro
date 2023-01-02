// Import Custom Component
import ProductOne from '../../features/products/product-one';

export default function ProductsGrid ( props ) {
    const { products = [], gridClass = "col-md-4 col-6", loading, perPage, addClass = '' } = props;

    return (
        <>
            <div className={ `row products-group products-caty skeleton-body skel-shop-products ${addClass} ${!loading ? 'loaded' : ''}` }>
                {
                    loading ?
                        new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) =>
                            <div className={ `skel-pro skel-pro-grid pr-3 pl-3 ${gridClass}` } key={ "ProductGrid:" + index }></div>
                        )
                        :
                        products.map( ( item, index ) => (
                            <div className={ gridClass } key={ `product-${index}` }>
                                <ProductOne adClass="inner-quickview inner-icon" product={ item } />
                            </div>
                        ) )
                }
            </div>
            {
                !loading && products.length === 0 ?
                    <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                    : ''
            }
        </>
    )
}
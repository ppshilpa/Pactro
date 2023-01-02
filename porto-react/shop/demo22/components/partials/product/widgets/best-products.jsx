import { useQuery } from '@apollo/react-hooks';

//Import Custom Component
import OwlCarousel from '../../../features/owl-carousel';
import ProductOne from '../../../features/products/product-one';

// Import Apollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SPECIAL_PRODUCTS } from '../../../../server/queries';

//Import Settings
import { productSlider } from '../../../../utils/data/slider';

function BestProducts ( props ) {
    const { adClass = "", isContainer = true } = props;
    const { data, loading, error } = useQuery( GET_SPECIAL_PRODUCTS, { variables: { bestSelling: true, count: 7 } } );
    const bestSelling = data && data.specialProducts.bestSelling;
    const sliderOption = { ...productSlider, dots: true, nav: false };

    return (
        <section className={ `products-section pt-0 skeleton-body skel-shop-products ${loading ? '' : 'loaded'} ${adClass}` }>
            <div className={ isContainer ? 'container' : '' }>
                <h2 className="section-title font1 m-b-4">Best Selling Products</h2>

                <div className="row">
                    <OwlCarousel adClass="products-slider dots-top dots-small" options={ sliderOption }>
                        {
                            bestSelling ?
                                bestSelling.slice( 0, 6 ).map( ( item, index ) => (
                                    <ProductOne
                                        product={ item }
                                        adClass="inner-quickview inner-icon"
                                        key={ "product-one" + index }
                                    />
                                ) )
                                :
                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid pr-3 pl-3" key={ "product-one" + index }></div>
                                )
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( BestProducts );
//Import Custom Component
import OwlCarousel from '../../../features/owl-carousel';
import ProductOne from '../../../features/products/product-one';

//Import Settings
import { productSlider } from '../../../../utils/data/slider';

function RelatedProducts ( props ) {
    const { adClass = "", products = [], loading, isContainer = false, cols = "4" } = props;
    const sliderOption = { ...productSlider, responsive: { ...productSlider, 992: { items: cols } } };

    return (
        !loading && !products.length ?
            ''
            :
            <section className={ `products-section pt-0 ${adClass}` }>
                <div className={ isContainer ? 'container' : '' }>
                    <h2 className="section-title ls-0">Related Products</h2>
                    {
                        !loading && !products.length ?
                            <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                            :
                            <OwlCarousel adClass="products-slider dots-top dots-small" options={ sliderOption }>
                                {
                                    loading ?
                                        [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-skel" + index }></div>
                                        )
                                        :
                                        products.map( ( item, index ) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "product-one" + index }
                                            />
                                        ) )
                                }
                            </OwlCarousel>
                    }
                </div>
            </section>
    )
}

export default RelatedProducts;
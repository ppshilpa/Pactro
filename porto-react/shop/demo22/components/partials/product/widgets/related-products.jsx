//Import Custom Component
import OwlCarousel from '../../../features/owl-carousel';
import ProductOne from '../../../features/products/product-one';

//Import Settings
import { productSlider } from '../../../../utils/data/slider';

function RelatedProducts ( props ) {
    const { adClass = "", products = [], loading, isContainer = false } = props;
    const sliderOption = { ...productSlider, dots: true, nav: false };

    return (
        !loading && !products.length ?
            ''
            :
            <section className={ `products-section  pt-0 pb-5 ${adClass}` }>
                <div className={ isContainer ? 'container' : '' }>
                    <h2 className="section-title font1 m-b-4">Related products</h2>

                    <div className="row">
                        {
                            !loading && !products.length ?
                                <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                                :
                                <OwlCarousel adClass="products-slider dots-top dots-small" options={ sliderOption }>
                                    {
                                        loading ?
                                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid pr-3 pl-3" key={ "product-one" + index }></div>
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
                </div>
            </section>
    )
}

export default RelatedProducts;
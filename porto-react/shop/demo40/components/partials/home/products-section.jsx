import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function ProductsSection ( props ) {
    const { milkAndCheese, meatAndSeafood, fruits } = props;

    return (

        new Array( 3 ).fill( 1 ).map( ( item, index ) => (
            <section className={ `products-container ${index !== 0 ? "pt-0" : ""}` } key={ "Product One:" + index }>
                <Reveal keyframes={ fadeInUpShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                    <div className="heading d-flex align-items-center">
                        <h2 className="text-transform-none mb-0">{ index === 0 ? "Milk & Cheese" : index === 1 ? "Fresh Fruit" : index === 2 ? "Meat & Seafood" : '' }</h2>
                        <ALink className="d-block view-all ml-auto" href={ `/shop ${index === 0 ? "bread-and-bakery" : index === 1 ? "fruits-2" : index === 2 ? "meat-and-seafood" : ''}` }>View All<i className="fas fa-chevron-right"></i></ALink>
                    </div>
                </Reveal>

                {
                    index === 0 ?
                        <OwlCarousel adClass="products-slider" options={ { ...productSlider, nav: false } }>
                            {
                                milkAndCheese ?
                                    milkAndCheese.map( ( item, index ) => (
                                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } key={ "product-one" + index } triggerOnce>
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }

                                            />
                                        </Reveal>
                                    ) )
                                    :
                                    new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid" key={ "product-skel" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                        :
                        ''
                }

                {
                    index === 1 ?
                        <OwlCarousel adClass="products-slider" options={ { ...productSlider, nav: false } }>
                            {
                                fruits ?
                                    fruits.map( ( item, index ) => (
                                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } key={ "product-one" + index } triggerOnce>
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                            />
                                        </Reveal>
                                    ) )

                                    :
                                    new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid" key={ "product-skel" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                        :
                        ''
                }

                {
                    index === 2 ?
                        <OwlCarousel adClass="products-slider" options={ { ...productSlider, nav: false } }>
                            {
                                meatAndSeafood ?
                                    meatAndSeafood.map( ( item, index ) => (
                                        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } key={ "product-one" + index } triggerOnce>
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                            />
                                        </Reveal>
                                    ) )
                                    :
                                    new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid" key={ "product-skel" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                        :
                        ''
                }
            </section>
        ) )
    );
}
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';
import ALink from '../../common/ALink';

// Import Settings
import { simpleproductSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function HalfSection ( props ) {
    const { product, loading, arrange } = props;

    return (
        arrange === 'leftbanner'
            ?
            <section className="section-5 d-block d-md-flex">
                <div className="col-md-6 col-12 banner d-flex align-items-center order-last bg-img bg-fixed bg-right"
                    style={ { backgroundImage: 'url(images/home/bg-4.jpg)' } }>
                    <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                        <div className="banner-content">
                            <h3 className="title">WOMEN'S<br />CASUAL STYLE</h3>
                            <p className="subtitle">Check out this week's hottest styles.</p>
                            <div className="mb-0">
                                <ALink href="/shop" className="btn btn-borders btn-lg btn-outline-dark btn-dark">SHOP NOW</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-md-6 col-12 bg-secondary product-part pb-4">
                    <OwlCarousel adClass="products-slider owl-theme" options={ simpleproductSlider }>
                        {
                            loading ?
                                [ 0, 1 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )
                                :
                                product.map( ( item, index ) => (
                                    <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce
                                        key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                        />
                                    </Reveal>
                                ) )

                        }
                    </OwlCarousel>
                </div>
            </section >
            :
            < section className="section-6 d-block d-md-flex" >
                < div className="col-md-6 col-12 banner d-flex align-items-center bg-img bg-fixed bg-left"
                    style={ { backgroundImage: 'url(images/home/bg-5.jpg)' } }>
                    <div className="banner-content ml-auto text-right">
                        <h3 className="title">MEN'S<br />COLLECTION</h3>
                        <p className="subtitle">Check out this week's hottest styles.</p>
                        <div className="mb-0">
                            <ALink href="/shop" className="btn btn-borders btn-lg btn-outline-dark btn-dark">SHOP NOW</ALink>
                        </div>
                    </div>
                </div >
                <div className="col-md-6 col-12 bg-secondary product-part pb-3">
                    <OwlCarousel adClass="products-slider owl-theme" options={ simpleproductSlider }>
                        {
                            loading ?
                                [ 0, 1 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )
                                :
                                product.slice( 2, 4 ).map( ( item, index ) => (
                                    <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce
                                        key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                        />
                                    </Reveal>
                                ) )
                        }
                    </OwlCarousel>
                </div>
            </section >
    )
}
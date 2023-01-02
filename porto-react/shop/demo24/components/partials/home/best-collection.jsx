import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

export default function BestCollection ( props ) {
    const { product } = props;

    return (
        <section className="best-sellers">
            <div className="container">
                <h2 className="section-title mb-2">Best Selling Items</h2>

                <div className="row">
                    {
                        product ?
                            product.slice( 0, 6 ).map( ( item, index ) => (
                                <div className="col-sm-6 col-md-4 three-col" key={ "product-one" + index }>
                                    <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                                        <ProductOne
                                            adClass="inner-quickview inner-icon"
                                            product={ item }
                                        />
                                    </Reveal>
                                </div>
                            ) )

                            :
                            [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                <div className="col-sm-6 col-md-4" key={ "product-one" + index }>
                                    <div className="skel-pro skel-pro-grid"></div>
                                </div>
                            )
                    }
                </div>

                <div className="view-more-container text-center">
                    <ALink href="/shop" className="btn btn-round btn-view-more">View more</ALink>
                </div>

                <h3 className="section-sub-title heading-border ls-0 text-center text-uppercase">As featured at</h3>

                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                    <OwlCarousel adClass="brands-slider owl-theme images-center" options={ brandSlider }>
                        <ALink href="#"><img src="images/home/brands/brand-1.png" alt="brand" width="390"
                            height="73" /></ALink>
                        <ALink href="#"><img src="images/home/brands/brand-2.png" alt="brand" width="390"
                            height="73" /></ALink>
                        <ALink href="#"><img src="images/home/brands/brand-3.png" alt="brand" width="390"
                            height="73" /></ALink>
                        <ALink href="#"><img src="images/home/brands/brand-4.png" alt="brand" width="390"
                            height="73" /></ALink>
                        <ALink href="#"><img src="images/home/brands/brand-5.png" alt="brand" width="390"
                            height="73" /></ALink>
                        <ALink href="#"><img src="images/home/brands/brand-6.png" alt="brand" width="390"
                            height="73" /></ALink>
                        <ALink href="#"><img src="images/home/brands/brand-7.png" alt="brand" width="390"
                            height="73" /></ALink>
                    </OwlCarousel >
                </Reveal>
            </div >
        </section >
    );
}
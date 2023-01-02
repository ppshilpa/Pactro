import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function NewCollection ( props ) {
    const { product, loading } = props;

    return (
        <section className="new-products-section">
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1000 } triggerOnce>
                    <div className="row m-b-3">
                        <div className="col-md-6">
                            <div className="banner banner1" style={ { backgroundColor: '#f4f4f4' } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        width="100%"
                                        height={ 224 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div
                                    className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                                    <div className="col-6 col-lg-4">
                                        <h3 className="font1 text-uppercase ls-0 mb-0">Action<br />Cameras</h3>
                                    </div>
                                    <div className="col-6 col-lg-4 text-right text-lg-left">
                                        <h4 className="font1 ls-n-10">Starting From<b>$399</b></h4>
                                        <ALink href="/shop" className="btn btn-primary ls-n-25">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="banner banner2" style={ { backgroundColor: '#f4f4f4' } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-2.jpg"
                                        width="100%"
                                        height={ 224 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div
                                    className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                                    <div className="col-6 col-lg-4 text-left text-lg-right">
                                        <h4 className="font1 ls-n-10">Starting From<b>$199</b></h4>
                                        <ALink href="/shop" className="btn btn-primary ls-n-25">Shop Now</ALink>
                                    </div>
                                    <div className="col-6 col-lg-4 text-right text-lg-left">
                                        <h3 className="font1 text-uppercase ls-0 mb-0">For All<br />Styles</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">New Arrivals</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1000 } triggerOnce>
                    <div className="row no-gutters">
                        {
                            loading ?
                                [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid col-6 col-sm-4 col-md-3 col-xl-2 pr-3 pl-3" key={ "product-one" + index }></div>
                                )
                                :
                                product && product.slice( 0, 6 ).map( ( item, index ) => (
                                    <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                        />
                                    </div>
                                ) )

                        }
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

import { fadeInRightShorter, fadeInUpShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading, saled } = props;

    return (
        <section className={`p-t-3 ${saled ? 'product-section-2' : 'product-section-3'}`}>
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1500} triggerOnce>
                <h2 className="section-title ls-n-20 m-b-1 line-height-1 text-center">{saled ? 'Products On Sale' : 'Popular Products'}</h2>
            </Reveal>
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1500} triggerOnce>
                <h3 className="section-sub-title ls-n-20 font-weight-normal text-center">
                    {
                        saled ?
                            'All our sale products in a exclusive brand selection'
                            :
                            'All our popular products in a exclusive brand selection'
                    }
                </h3>
            </Reveal>
            {
                loading ?
                    <OwlCarousel adClass="tab-products-carousel owl-carousel owl-theme quantity-inputs show-nav-hover nav-outer nav-image-center" options={{
                        items: 2,
                        margin: 20,
                        nav: false,
                        dots: false,
                        responsive: {
                            0: {
                                items: 2
                            },
                            576: {
                                items: 3
                            },
                            768: {
                                items: 4
                            },
                            1200: {
                                items: 6,
                                nav: true
                            }
                        }
                    }}>
                        {
                            [0, 1, 2, 3, 4, 5].map((item, index) =>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            )
                        }
                    </OwlCarousel>
                    :
                    <Reveal keyframes={fadeInRightShorter} delay={100} duration={1500} triggerOnce>
                        <OwlCarousel adClass="tab-products-carousel owl-carousel owl-theme quantity-inputs show-nav-hover nav-outer nav-image-center" options={{
                            items: 2,
                            margin: 20,
                            nav: false,
                            dots: false,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                576: {
                                    items: 3
                                },
                                768: {
                                    items: 4
                                },
                                1200: {
                                    items: 6,
                                    nav: true
                                }
                            }
                        }}>
                            {
                                product.map((item, index) => (
                                    <ProductOne
                                        product={item} featured={true} key={"product-one" + index}
                                    />
                                ))
                            }
                        </OwlCarousel>
                    </Reveal>
            }
        </section>
    );
}
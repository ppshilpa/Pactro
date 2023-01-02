import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '../../features/owl-carousel';
import ALink from '../../common/ALink';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function CategorySection () {
    return (
        <section className="cat-section bg-gray">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="categories-slider" options={ categorySlider }>
                        <div className="product-category mb-2">
                            <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }>
                                <div className="category-content">
                                    <i className="icon-category-fashion"></i>
                                    <h3>Fashion</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category mb-2">
                            <ALink href={ { pathname: '/shop', query: { category: 'electronics' } } }>
                                <div className="category-content">
                                    <i className="icon-category-electronics"></i>
                                    <h3>Electronics</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category mb-2">
                            <ALink href={ { pathname: '/shop', query: { category: 'gifts' } } }>
                                <div className="category-content">
                                    <i className="icon-category-gifts"></i>
                                    <h3>Gifts</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category mb-2">
                            <ALink href={ { pathname: '/shop', query: { category: 'garden' } } }>
                                <div className="category-content">
                                    <i className="icon-category-garden"></i>
                                    <h3>Garden</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category mb-2">
                            <ALink href={ { pathname: '/shop', query: { category: 'music' } } }>
                                <div className="category-content">
                                    <i className="icon-category-music"></i>
                                    <h3>Music</h3>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category mb-2">
                            <ALink href={ { pathname: '/shop', query: { category: 'motors' } } }>
                                <div className="category-content">
                                    <i className="icon-category-motors"></i>
                                    <h3>Motors</h3>
                                </div>
                            </ALink>
                        </div>
                    </OwlCarousel>
                </Reveal>
            </div>
        </section>
    );
} 
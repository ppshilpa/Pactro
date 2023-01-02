import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '../../features/owl-carousel';
import ALink from '../../common/ALink';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeInLeftShorter, fadeInRightShorter, fadeIn } from '../../../utils/data/keyframes'

export default function CategorySection () {
    return (
        <section className="top-categories">
            <div className="container">
                <div className="row m-b-3">
                    <div className="col-md-6">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner1 mb-2" style={ { backgroundColor: '#f4f4f4' } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        width="100%"
                                        height={ 236 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-left">
                                    <h3 className="font1 ls-10 text-uppercase mb-0">Action<br />Cameras</h3>
                                </div>

                                <div className="banner-layer banner-layer-middle banner-layer-right">
                                    <div className="coupon-sale-text">
                                        <h4 className="font1 line-height-1 ls-10 text-white bg-primary skew-box m-b-2">
                                            Starting from</h4>
                                        <h5 className="d-inline-block font1 text-white bg-primary skew-box mb-0">$399<sub
                                            className="text-dark">$499</sub>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner2 mb-2" style={ { backgroundColor: '#f4f4f4' } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-2.jpg"
                                        width="100%"
                                        height={ 236 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-left">
                                    <h3 className="font1 text-uppercase ls-10 mb-0">For all<br />styles</h3>
                                </div>

                                <div className="banner-layer banner-layer-middle banner-layer-right">
                                    <div className="coupon-sale-text">
                                        <h4 className="font1 line-height-1 ls-10 text-white bg-secondary skew-box m-b-2">
                                            Starting from</h4>
                                        <h5 className="d-inline-block font1 text-white bg-secondary skew-box mb-0">$199<sub
                                            className="text-dark">$299</sub>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <h2 className="section-title line-height-1 ls-10 pb-4 mb-4">Top Categories</h2>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="row mb-2">
                        <OwlCarousel adclass="categories-slider" options={ categorySlider }>
                            <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }>
                                <i className="icon-category-fashion"></i>
                                <span>Fashion</span>
                            </ALink>

                            <ALink href={ { pathname: '/shop', query: { category: 'electronics' } } }>
                                <i className="icon-category-electronics"></i>
                                <span>Electronics</span>
                            </ALink>

                            <ALink href={ { pathname: '/shop', query: { category: 'gifts' } } }>
                                <i className="icon-category-gifts"></i>
                                <span>Gifts</span>
                            </ALink>

                            <ALink href={ { pathname: '/shop', query: { category: 'garden' } } }>
                                <i className="icon-category-garden"></i>
                                <span>Garden</span>
                            </ALink>

                            <ALink href={ { pathname: '/shop', query: { category: 'music' } } }>
                                <i className="icon-category-music"></i>
                                <span>Music</span>
                            </ALink>

                            <ALink href={ { pathname: '/shop', query: { category: 'motors' } } }>
                                <i className="icon-category-motors"></i>
                                <span>Motors</span>
                            </ALink>

                            <ALink href={ { pathname: '/shop', query: { category: 'furniture' } } }>
                                <i className="icon-category-furniture"></i>
                                <span>Furniture</span>
                            </ALink>
                        </OwlCarousel>
                    </div>
                </Reveal>
            </div>
        </section>
    );
} 
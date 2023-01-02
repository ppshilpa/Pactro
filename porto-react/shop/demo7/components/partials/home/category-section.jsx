import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function CategorySection () {
    return (
        <div className="categories-section bg-primary">
            <div className="container">
                <h2 className="section-title border-0 title-decorate text-center text-white d-flex align-items-center">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                        <span>Browse Our Categories</span>
                    </Reveal>
                </h2>

                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="owl-theme show-nav-hover media-with-lazy" options={ categorySlider }>
                        <div className="banner banner-image">
                            <ALink href={ { pathname: '/shop', query: { category: 'dress' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/cats/banner-1.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>DRESS</h3>
                                    <span>2 PRODUCTS</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="banner banner-image">
                            <ALink href={ { pathname: '/shop', query: { category: 'toys-1' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/cats/banner-2.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>TOYS</h3>
                                    <span>2 PRODUCTS</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="banner banner-image">
                            <ALink href={ { pathname: '/shop', query: { category: 'shoes-3' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/cats/banner-3.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>SHOES</h3>
                                    <span>2 PRODUCTS</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="banner banner-image">
                            <ALink href={ { pathname: '/shop', query: { category: 'watches-2' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/cats/banner-4.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>WATCHES</h3>
                                    <span>2 PRODUCTS</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="banner banner-image">
                            <ALink href={ { pathname: '/shop', query: { category: 'headphone-3' } } }>
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/cats/banner-2.jpg"
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>HEADPHONE</h3>
                                    <span>2 PRODUCTS</span>
                                </div>
                            </ALink>
                        </div>
                    </OwlCarousel>
                </Reveal>
            </div>
        </div>
    );
} 
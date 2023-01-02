import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigs
import { fadeInUpShorter, fadeIn } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <section className="category-section">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title m-b-2">Shop By Category</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                    <h5 className="section-info p-b-4 mb-2">Only the best seller products added recently in our catalog</h5>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="row category-grid">
                        <div className="height-3-5">
                            <div className="product-category media-with-lazy mb-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'body' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/cats/cat-1.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <ul className="sub-categories">
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'body' } } }>Bath &amp; Shower</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'body-care' } } }>Body Care</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'body-sculpting' } } }>Body Sculpting</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'foot-care' } } }>Foot Care</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'handcare' } } }>Handcare</ALink></li>
                                    </ul>

                                    <h3><ALink href={ { pathname: '/shop', query: { category: 'body' } } }>Body</ALink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="height-5-5">
                            <div className="product-category media-with-lazy mb-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'skincare' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/cats/cat-2.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <ul className="sub-categories">
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'cleansers' } } }>Cleansers</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'exfoliators' } } }>Exfoliators</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'eye-care' } } }>Eye Care</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'face-masks' } } }>Face Masks</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'lip-care' } } }>Lip Care</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'serums' } } }>Serums</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'toners' } } }>Toners</ALink></li>
                                    </ul>

                                    <h3><ALink href={ { pathname: '/shop', query: { category: 'skincare' } } }>Skincare</ALink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="height-2-5">
                            <div className="product-category media-with-lazy mb-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'makeup' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/cats/cat-3.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <ul className="sub-categories">
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'complexion' } } }>Complexion</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'eyes' } } }>Eyes</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'lips' } } }>Lips</ALink></li>
                                    </ul>

                                    <h3><ALink href={ { pathname: '/shop', query: { category: 'makeup' } } }>Makeup</ALink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="height-3-5">
                            <div className="product-category media-with-lazy mb-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'fragrance' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/cats/cat-5.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <ul className="sub-categories">
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'hair-mist' } } }>Body &amp; Hair Mist</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'fragrance' } } }>Fragrance</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'perfume' } } }>Perfume</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'soap' } } }>Soap</ALink></li>
                                    </ul>

                                    <h3> <ALink href={ { pathname: '/shop', query: { category: 'fragrance' } } }>Fragrance</ALink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="height-2-5">
                            <div className="product-category media-with-lazy mb-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'hair' } } }>
                                    <figure>
                                        <LazyLoadImage
                                            alt="category"
                                            src="images/home/products/cats/cat-4.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height="auto"
                                        />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <ul className="sub-categories">
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'conditioner' } } }>Conditioner</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'shampoo' } } }>Shampoo</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'styling' } } }>Styling</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'treatments' } } }>Treatments</ALink></li>
                                    </ul>

                                    <h3><ALink href={ { pathname: '/shop', query: { category: 'hair' } } }>Hair</ALink></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section >
    );
}

export default React.memo( CategorySection );
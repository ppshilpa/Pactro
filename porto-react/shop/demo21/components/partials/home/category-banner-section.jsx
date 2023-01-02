import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

function CategoryBannerSection () {
    return (
        <section className="cat-banners-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xl-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                            <div className="cat-banner">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/products/categories/cat-1.jpg"
                                        width="100%"
                                        height={ 107 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="cat-content">
                                    <h3 className="mb-1 ls-n-10">Top Sharp<br />Knives</h3>
                                    <ALink href="/shop" className="btn btn-dark">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-xl-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                            <div className="cat-banner">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/products/categories/cat-2.jpg"
                                        width="100%"
                                        height={ 107 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="cat-content">
                                    <h3 className="mb-1 ls-n-10">HD Vision<br />Web Cameras</h3>
                                    <ALink href="/shop" className="btn btn-dark">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-xl-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                            <div className="cat-banner">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/products/categories/cat-3.jpg"
                                        width="100%"
                                        height={ 107 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="cat-content">
                                    <h3 className="mb-1 ls-n-10">Mobiles And<br />Tablets</h3>
                                    <ALink href="/shop" className="btn btn-dark">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-xl-3">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="cat-banner">
                                <figure>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/products/categories/cat-4.jpg"
                                        width="100%"
                                        height={ 107 }
                                        threshold={ 500 }
                                        effect="black and white"
                                    />
                                </figure>

                                <div className="cat-content">
                                    <h3 className="mb-1 ls-n-10">Smart<br />Watches</h3>
                                    <ALink href="/shop" className="btn btn-dark">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( CategoryBannerSection );
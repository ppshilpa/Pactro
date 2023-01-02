import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';


// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'

export default function NewsletterSection() {

    return (
        <section className="newsletter-section">
            <div className="container">
                <h2 className="section-title ls-n-10 text-center text-uppercase m-b-4">Offers and Deals</h2>

                <div className="row">
                    <div className="col-md-6 mb-2">
                        <Reveal className="h-100" keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
                            <div className="banner banner3 h-100">
                                <figure className="h-100">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="Banner"
                                        src="images/home/banners/banner-3.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height={300}
                                        className="h-100"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-left">
                                    <h3 className="m-b-1">Exclusive Shoes</h3>
                                    <h4 className="text-uppercase mb-4">50% Off</h4>
                                    <ALink href="/shop" className="btn">Shop Now</ALink>
                                </div>

                                <div className="banner-layer banner-layer-right">
                                    <img src="images/home/banners/brand1.png" alt="brand" width="105"
                                        height="45" />
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6 mb-2">
                        <Reveal className="h-100" keyframes={fadeIn} delay={600} duration={1000} triggerOnce>
                            <div className="banner banner4 h-100">
                                <figure className="h-100">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="Banner"
                                        src="images/home/banners/banner-4.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height={300}
                                        className="h-100"
                                    />
                                </figure>

                                <div className="banner-layer banner-layer-middle banner-layer-right text-center">
                                    <h6 className="heading-border text-dark text-uppercase m-b-2">Amazing</h6>
                                    <h3 className="ls-n-10 text-uppercase m-b-3">Collection</h3>
                                    <h5 className="text-uppercase">Check our discounts</h5>
                                    <ALink href="/shop" className="btn">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-12">
                        <div className="banner banner5" >
                            <figure>
                                <div className="lazy-overlay"></div>
                                <LazyLoadImage
                                    alt="Banner"
                                    src="images/home/banners/banner-5.png"
                                    threshold={500}
                                    effect="black and white"
                                    width="100%"
                                    height={300}
                                />
                            </figure>

                            <div className="banner-layer banner-layer-middle text-center">
                                <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                                    <div className="widget-newsletter">
                                        <h4 className="mt-0 m-b-1">Subscribe To Our Newsletter</h4>
                                        <p className="font2 text-body m-b-4">Get all the latest information on events, sales and offers.</p>

                                        <form action="#" className="d-flex mb-0 mx-auto">
                                            <input type="email" className="form-control mb-0" placeholder="Email address" required />

                                            <input type="submit" className="btn btn-dark" value="Subscribe" />
                                        </form>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
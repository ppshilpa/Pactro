import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import BlogTypeOne from '../../features/blogs/blog-type-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Utils
import { fadeIn } from '../../../utils/data/keyframes'
import { blogSlider } from '../../../utils/data/slider';

export default function BlogSection ( props ) {
    const { loading, blog } = props;
    const sliderOptions = { ...blogSlider, responsive: { ...blogSlider.responsive, 1200: { items: 4 } } }

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
            <section className="blog-section mb-4">
                <div className="row">
                    <div className="col-xl-6 mb-3 mb-xl-0">
                        <div className="section-title d-flex align-items-center mt-1 mb-1">
                            <h2 className="mb-0">RECENT ARTICLE</h2>
                            <hr className="vertical d-none d-sm-block" />
                            <ALink href="/pages/blog" className="with-icon mr-sm-auto ml-4 mr-4 ml-sm-0">VIEW BLOG<i
                                className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="row post d-flex">
                            <div className="col-md-6">
                                <ALink href="/pages/blog/top-quality-flooring-and-parquets/">
                                    <div className="post-media">
                                        <figure className="mb-0">
                                            <LazyLoadImage
                                                alt="Post"
                                                src="images/home/banners/banner-article.jpg"
                                                threshold={ 500 }
                                                effect="black and white"
                                                width="100%"
                                                height="auto"
                                            />
                                        </figure>

                                        <div className="post-date">
                                            <span className="day ls-0">24</span>
                                            <span className="month">JUL-19</span>
                                        </div>
                                    </div>
                                </ALink>
                            </div>

                            <div className="col-md-6 d-flex align-items-center">
                                <div className="post-body">
                                    <ALink href="/pages/blog" className="post-category">DESIGN TRENDS</ALink>
                                    <h3 className="post-title">Top quality flooring and parquets</h3>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                    non placerat
                                    mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet
                                            dapibus...</p>
                                    <ALink href="/pages/blog" className="btn with-icon">READ MORE</ALink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="section-title d-flex align-items-center mt-1 mb-1">
                            <h2 className="mb-0">FROM INSTAGRAM</h2>
                            <hr className="vertical d-none d-sm-block" />
                            <a href="#" className="with-icon mr-sm-auto ml-4 mr-4 ml-sm-0">@PORTODECOR<i
                                className="fas fa-long-arrow-alt-right"></i></a>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-4 mt-2 mb-2">
                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="Instagram"
                                        src="images/home/instagram/instagram1.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </div>

                            <div className="col-sm-4 mt-2 mb-2">
                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="Instagram"
                                        src="images/home/instagram/instagram2.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </div>

                            <div className="col-sm-4 mt-2 mb-2">
                                <figure className="mb-0">
                                    <LazyLoadImage
                                        alt="Instagram"
                                        src="images/home/instagram/instagram3.jpg"
                                        threshold={ 500 }
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
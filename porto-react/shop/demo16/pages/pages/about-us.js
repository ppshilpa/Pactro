import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from "../../components/features/owl-carousel";
import { membersSlider } from '../../utils/data/slider';

export default function AboutUs() {
    return (
        <main className="main about-us">
            <div className="page-header page-header-bg text-left"
                style={{ backgroundImage: 'url(images/home/banners/category-bg-1.jpg)' }}>
                <div className="container">
                    <h1 className="text-uppercase">
                        <span>check our</span>
                        history</h1>
                </div>
            </div>
            <section className="info-section">
                <div className="section-content mx-auto">
                    <h4 className="section-subtitle">what we are</h4>
                    <h3 className="section-title">about us</h3>
                    <p className="section-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry’s standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of
                        Letraset sheets containing Lorem Ipsum passages
                    </p>
                </div>
            </section>
            <section className="service-section"
                style={{ backgroundImage: 'url(images/home/banners/category-bg-2.jpg)' }}>
                <div className="container">
                    <div className="section-content ml-auto">
                        <h4 className="section-subtitle">speciality</h4>
                        <h3 className="section-title">why choose us</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="icon-support"></i>
                                    <div className="info-box-content">
                                        <h4>Online support</h4>
                                        <p className="body-text">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="icon-shipping"></i>
                                    <div className="info-box-content">
                                        <h4>Free shipping & return</h4>
                                        <p className="text-body">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="icon-money"></i>
                                    <div className="info-box-content">
                                        <h4>Money back guarantee</h4>
                                        <p className="text-body">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="icon-cat-shirt"></i>
                                    <div className="info-box-content">
                                        <h4>New styles every day</h4>
                                        <p className="text-body">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h4 className="section-subtitle">our</h4>
                            <h3 className="section-title">team</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and Lorem typesetting industry looking
                            Ipsum has been.</p>
                        </div>
                        <div className="col-lg-9">
                            <OwlCarousel adClass="owl-simple" options={membersSlider}>
                                <div className="member">
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/home/team/1.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                    <h3 className="member-title">JANE DOE</h3>
                                </div>
                                <div className="member">
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/home/team/2.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                    <h3 className="member-title">JESSICA DOE</h3>
                                </div>
                                <div className="member">
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/home/team/3.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                    <h3 className="member-title">RICK EDWARD DOE</h3>
                                </div>
                                <div className="member">
                                    <LazyLoadImage
                                        alt="member"
                                        src="images/home/team/4.jpg"
                                        threshold={500}
                                        effect="black and white"
                                        width="100%"
                                        height="auto"
                                    />
                                    <h3 className="member-title">MELINDA WOLOSKY</h3>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
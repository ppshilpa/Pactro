import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { InstaSlider } from '../../../utils/data/slider';

export default function Instagram() {
    return (
        <div className="instagram-section">
            <h2 className="subtitle text-uppercase">Follow On Instagram</h2>
            <div className="heading-spacer"></div>

            <OwlCarousel adClass="instagram-feed-carousel instagram-feed-list media-with-lazy" options={InstaSlider}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/1.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/2.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/3.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/4.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/5.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/6.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/7.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/8.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/9.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/instagram/10.jpg"
                            effect="black and white"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                </a>
            </OwlCarousel>
        </div>
    );
}
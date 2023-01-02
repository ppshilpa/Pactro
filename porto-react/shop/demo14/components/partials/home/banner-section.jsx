import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '../../features/owl-carousel';
import ALink from '../../common/ALink';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';

export default function BannerSection() {
    return (
        <div className="banners-section container mt-4">
            <OwlCarousel adClass="banners-slider dots-mt-1" options={categorySlider}>
                <div className="banner">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banners/banner1.jpg"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content bg-dark text-center">
                        <h5 className="m-b-1">
                            <ALink href="/shop">Save Up To</ALink>
                        </h5>
                        <h4 className="text-white m-b-1">$100</h4>
                        <h5 className="text-white mb-0">on Porto Watch Series 5</h5>
                    </div>
                </div>
                <div className="banner">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banners/banner2.jpg"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content bg-dark text-center">
                        <h5 className="m-b-1">
                            <ALink href="/shop">Save Up To</ALink>
                        </h5>
                        <h4 className="text-white m-b-1">$80</h4>
                        <h5 className="text-white mb-0">on Porto Pods Professional</h5>
                    </div>
                </div>
                <div className="banner">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banners/banner3.jpg"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content bg-dark text-center">
                        <h5 className="m-b-1">
                            <ALink href="/shop">Save Up To</ALink>
                        </h5>
                        <h4 className="text-white m-b-1">$90</h4>
                        <h5 className="text-white mb-0">on Bluetooth Speaker</h5>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
} 
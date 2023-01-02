import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading, glasses } = props;
    const glass = props.glasses;

    return (
        <section className="section-4 product-collection bg-fixed" style={{ backgroundImage: 'url(images/home/bg-3.jpg)' }}>
            <div className="container text-center">
                <div className="title-group">
                    <h2 className="text-white m-b-1">{glass ? 'Sunglasses On Sale' : 'Styled Outfits'}</h2>
                    <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pt-2 text-white mb-4">Starting at&nbsp;
                            <span>$ <strong>{glass ? '19' : '29'}</strong>99</span>
                    </h5>
                </div>
            </div>
            <div className="container">
                <OwlCarousel adClass="products-slider nav-image-center show-nav-hover nav-outer nav-white" options={productSlider}>
                    {
                        loading ?
                            [0, 1, 2, 3, 4].map((item, index) =>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            )
                            :
                            product.map((item, index) => (
                                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce
                                    key={"product-one" + index}>
                                    <ProductOne
                                        product={item}
                                    />
                                </Reveal>
                            ))
                    }
                </OwlCarousel>
            </div>
        </section>
    );
}
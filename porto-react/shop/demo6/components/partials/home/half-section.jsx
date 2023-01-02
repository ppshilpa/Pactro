import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { simpleproductSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'
import ALink from '../../common/ALink';

export default function HalfSection(props) {
    const { product, loading, arrange } = props;

    return (
        arrange === 'leftbanner'
            ?
            <div className="d-flex flex-wrap">
                <div className="col-md-6 col-12 order-md-last half-img banner banner-md-vw-small banner-5 bg-img d-flex align-items-center"
                    style={{ backgroundImage: 'url(images/home/bg-1.jpg)' }}>
                    <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce>
                        <div className="banner-content">
                            <h3 className="ls-n-10 m-b-3 text-left">WOMEN'S<br />COLLECTION</h3>
                            <p className="line-height-1 m-b-4 text-left">Check out this week's hottest styles.</p>
                            <div className="mb-0">
                                <ALink href="/shop" className="btn btn-borders btn-lg btn-outline-dark ls-10">SHOP NOW</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-md-6 col-12 half-content d-flex align-items-center justify-content-center">
                    <OwlCarousel adClass="products-slider owl-theme" options={simpleproductSlider}>
                        {
                            loading ?
                                [0, 1].map((item, index) =>
                                    <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                                )
                                :
                                product.slice(0, 2).map((item, index) => (
                                    <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce
                                        key={"product-one" + index}>
                                        <ProductOne
                                            product={item}
                                        />
                                    </Reveal>
                                ))

                        }
                    </OwlCarousel>
                </div>
            </div >
            :
            < div className="d-flex flex-wrap right-section" >
                < div className="col-md-6 col-12 half-img banner banner-md-vw-small xbanner banner-5 bg-img d-flex align-items-center justify-content-end"
                    style={{ backgroundImage: 'url(images/home/bg-2.jpg)' }}>
                    <div className="banner-content">
                        <h3 className="ls-n-10 m-b-3 text-right">MEN'S<br />COLLECTION</h3>
                        <p className="line-height-1 m-b-4 text-right">Check out this week's hottest styles.</p>
                        <div className="mb-0 text-right">
                            <ALink href="/shop" className="btn btn-borders btn-lg btn-outline-dark">SHOP NOW</ALink>
                        </div>
                    </div>
                </div >
                <div className="col-md-6 col-12 half-content d-flex align-items-center justify-content-center">
                    <OwlCarousel adClass="products-slider owl-theme" options={simpleproductSlider}>
                        {
                            loading ?
                                [0, 1].map((item, index) =>
                                    <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                                )
                                :
                                product.slice(0, 2).map((item, index) => (
                                    <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce
                                        key={"product-one" + index}>
                                        <ProductOne
                                            product={item}
                                        />
                                    </Reveal>
                                ))

                        }
                    </OwlCarousel>
                </div>
            </div >
    )
}
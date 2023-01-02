// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';
import ProductFour from '../../features/products/product-four';

export default function FeaturedCollection(props) {
    const { productbestSelling, productlatest, loading } = props;

    return (
        <div className="home-products-container text-center">
            <div className="row">
                <div className="col-md-6 mb-2">
                    <div className="home-products bg-gray p-y-5">
                        <h3 className="section-sub-title">Best Sellers Products</h3>

                        <OwlCarousel adClass="owl-theme nav-image-center nav-thin px-3" options={{
                            dots: false,
                            nav: true,
                            responsive: {
                                480: {
                                    items: 2
                                },
                                768: {
                                    items: 1
                                }
                            }
                        }}>
                            {
                                loading ?
                                    [0, 1].map((item, index) =>
                                        <div className="skel-pro skel-pro-grid" key={"product-four" + index}></div>
                                    )
                                    :
                                    productbestSelling.slice(0, 2).map((item, index) => (
                                        <ProductFour product={item} key={"product-four" + index} />
                                    ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="home-products bg-gray p-y-5">
                        <h3 className="section-sub-title">New Arrival Products</h3>

                        <OwlCarousel adClass="owl-theme nav-image-center nav-thin px-3" options={{
                            dots: false,
                            nav: true,
                            responsive: {
                                480: {
                                    items: 2
                                },
                                768: {
                                    items: 1
                                }
                            }
                        }}>
                            {
                                loading ?
                                    [0, 1].map((item, index) =>
                                        <div className="skel-pro skel-pro-grid" key={"product-four" + index}></div>
                                    )
                                    :
                                    productlatest.slice(0, 2).map((item, index) => (
                                        <ProductFour product={item} key={"product-four" + index} />
                                    ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
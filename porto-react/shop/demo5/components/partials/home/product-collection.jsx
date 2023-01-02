// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';
import ProductFour from '../../features/products/product-four';

export default function FeaturedCollection(props) {
    const { productfeatured, productbestSelling, productlatest, loading, homepage } = props;

    return (
        <div className="home-products-container text-center">
            <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="home-products bg-white px-4 pb-2 pt-4">
                        <h3 className="section-sub-title mt-1 m-b-1">Featured Products</h3>

                        <OwlCarousel adClass="owl-theme nav-image-center nav-thin px-3" options={{
                            dots: false,
                            nav: true,
                            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
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
                                    productfeatured.map((item, index) => (
                                        <ProductFour product={item} key={"product-four" + index} />
                                    ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="home-products bg-white px-4 pb-2 pt-4">
                        <h3 className="section-sub-title mt-1 m-b-1">Best Sellers</h3>

                        <OwlCarousel adClass="owl-theme nav-image-center nav-thin px-3" options={{
                            dots: false,
                            nav: true,
                            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
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
                                    productbestSelling.map((item, index) => (
                                        <ProductFour product={item} key={"product-four" + index} />
                                    ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="home-products bg-white px-4 pb-2 pt-4">
                        <h3 className="section-sub-title mt-1 m-b-1">New Arrivals</h3>

                        <OwlCarousel adClass="owl-theme nav-image-center nav-thin px-3" options={{
                            dots: false,
                            nav: true,
                            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
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
                                    productlatest.map((item, index) => (
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
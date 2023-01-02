// Import Custom Component
import ALink from '../../common/ALink';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner banner bg-gray overflow-hidden py-3 ${adClass}` }>
            <div className="row m-0 no-gutters align-items-center">
                <div className="col-sm-4">
                    <h2 className="font1 ls-10 text-left text-sm-right text-uppercase mb-0">Smart</h2>
                    <h3 className="font1 ls-10 text-left text-sm-right text-uppercase m-0">Phone Deals</h3>
                </div>
                <div className="col-sm-4">
                    <figure>
                        <LazyLoadImage
                            alt="product"
                            src="images/home/banners/category-banner.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height={ 247 }
                        />
                    </figure>
                </div>
                <div className="col-sm-4">
                    <div className="coupon-sale-text d-flex flex-column align-items-start mb-4">
                        <h4 className="m-b-2 font1 ls-10 text-white bg-dark skew-box">Exclusive
                                            COUPON</h4>
                        <h5 className="mb-0 font1 d-inline-block bg-dark skew-box"><i
                            className="text-dark ls-0">UP TO</i><b className="text-white">$100</b><sub className="text-dark">OFF</sub>
                        </h5>
                    </div>

                    <ALink href="/shop" className="btn btn-light btn-lg font1 ml-0">View All Now</ALink>
                </div>
            </div>
        </div>
    )
}
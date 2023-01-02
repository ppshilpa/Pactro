import ALink from '../../common/ALink';

export default function ShopBanner(props) {
    const { hasgap } = props;

    return (
        <div className={`category-banner-container bg-gray ${hasgap ? 'mb-2' : ''}`}>
            <div className="category-banner banner text-uppercase"
                style={{ background: 'no-repeat 50%/cover url(images/home/banners/banner-top.jpg) #ee3d43' }}>
                <div className="container position-relative">
                    <div className="banner-body text-uppercase">
                        <h4 className="banner-subtitle text-white">over 200 products with discounts</h4>
                        <h3 className="banner-title text-white">great deals</h3>
                        <h5 className="banner-text text-white d-inline-block ls-n-20 align-text-bottom">Starting At&nbsp;
								<b className="coupon-sale-text bg-secondary text-white d-inline-block">$&nbsp;
									<em>299</em>99</b>
                        </h5>
                        <ALink href="/shop" className="btn btn-primary btn-md ls-10 align-bottom">Get Yours!</ALink>
                    </div>
                </div>
            </div>
        </div>
    )
}
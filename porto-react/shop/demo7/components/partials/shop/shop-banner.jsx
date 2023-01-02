import ALink from '../../common/ALink';

export default function ShopBanner(props) {
    const { hasgap } = props;

    return (
        <div className={`category-banner ${hasgap ? "mb-2" : ''} `} style={{ backgroundImage: "url(images/home/banners/banner-top-2.jpg)" }}>
            <div className="container">
                <div className="promo-content d-sm-flex align-items-center">
                    <div>
                        <h2 className="m-b-1">New Season Sale</h2>
                        <h3 className="mb-0 ml-0">40% OFF</h3>
                    </div>
                    <hr className="divider-short-thick" />
                    <ALink href="/shop" className="btn btn-light">Shop Now <i className="fas fa-long-arrow-alt-right ml-2 pl-1"></i></ALink>
                </div>
            </div>
        </div >
    )
}
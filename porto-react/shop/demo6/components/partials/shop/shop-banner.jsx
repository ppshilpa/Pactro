export default function ShopBanner(props) {
    const { hasmargin } = props;

    return (
        <div className={`category-banner home-slide-2 banner banner-sm-vw-xx d-flex justify-content-between bg-img bg-primary ${hasmargin ? 'mb-2' : ''}`}
            style={{ backgroundImage: 'url(images/home/banners/category-banner.jpg)' }}>
            <div className="banner-content banner-layer-left">
                <h2 className="text-white font3 font-weight-normal p-l-1">Summer Trends</h2>
                <h3 className="text-white mb-0 text-left text-uppercase ml-0 ls-10">sale</h3>
            </div>
            <div className="banner-content banner-layer-right">
                <h4 className="text-white pl-2 font-weight-light text-left text-uppercase">prices up to</h4>
                <h3 className="text-white mb-0 text-sale m-l-n-xs text-left text-uppercase ml-0">80%<small>OFF</small>
                </h3>
            </div>
        </div>
    )
}
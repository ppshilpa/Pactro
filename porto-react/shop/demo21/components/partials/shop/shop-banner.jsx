export default function ShopBanner () {
    return (
        <div className="category-banner-container bg-gray">
            <div className="category-banner"
                style={ { background: "no-repeat 60%/cover url('images/home/banners/shop-banner.jpg')" } }>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-md-center">
                            <div>
                                <h4 className="font1 font-weight-normal ls-n-10 text-uppercase m-b-2">start the revolution</h4>
                                <h2 className="font1 font-weight-bold text-uppercase">drone pro 4</h2>
                                <h3 className="font1 font-weight-normal ls-n-10 line-height-1 text-uppercase mb-0 ml-0">
                                    from <strong>$499</strong></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
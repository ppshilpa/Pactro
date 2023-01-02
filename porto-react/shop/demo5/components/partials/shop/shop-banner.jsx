import ALink from '../../common/ALink';

export default function ShopBanner ( props ) {
    const { hasgap } = props;

    return (
        <div className={ `outer-container category-banner banner banner-big-sale ${ hasgap ? 'mx-0 mb-2' : '' }` }
            style={ { backgroundImage: 'url(images/home/banners/banner-top.jpg)' } }>
            <div className="banner-content align-items-center px-5">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="text-white text-uppercase mb-md-0 text-center text-sm-left">
                            <b className="d-inline-block mb-1">Big Sale</b>
                                All new fashion brands items up to 70% off
                                <small className="text-transform-none align-middle">Online Purchases Only</small>
                        </h2>
                    </div>
                    <div className="col-md-3 text-center text-md-right">
                        <ALink className="btn btn-light bg-white btn-lg ls-10" href="/shop">View Sale</ALink>
                    </div>
                </div>
            </div>
        </div>
    )
}
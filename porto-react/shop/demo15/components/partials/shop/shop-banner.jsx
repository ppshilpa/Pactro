import React from 'react';

function ShopBanner ( props ) {
    const { hasgap } = props;

    return (
        <div className={ `sale-banner ${ hasgap ? 'mb-2' : '' }` }>
            <div className="banner banner-caty" style={ { backgroundColor: '#ffab8c' } }>
                <img src="images/home/banners/banner-4.jpg" width="1120" height="380"
                    alt="banner" />
                <div className="banner-layer banner-layer-middle banner-layer-left">
                    <h5 className="font-weight-normal font3 text-left">Outlet Selected Items</h5>
                    <h4 className="mb-0 text-left text-uppercase text-white">big sale up to</h4>
                    <h3 className="text-sale text-left text-white mb-0">80% <small>OFF</small>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default React.memo( ShopBanner );
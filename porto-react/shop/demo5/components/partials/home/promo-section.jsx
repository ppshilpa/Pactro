import React, { useEffect } from 'react';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { setParallax } from '../../../utils/index';

function PromoSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    return (
        <section className="promo-section bg-dark banner-big-sale parallax overflow-hidden" style={ { backgroundImage: `url(images/home/banners/banner-4.jpg)` } }>
            <div className="promo-banner banner container text-uppercase">
                <div className="banner-content row align-items-center py-3 mx-0">
                    <div className="col-xl-9 col-sm-8 py-3">
                        <h2 className="text-white text-uppercase mb-md-0 px-3 text-center text-sm-left">
                            <b className="d-inline-block mr-3">Big Sale</b>
                                All new fashion brands items up to 70% off
                                <small className="text-transform-none align-middle">Online Purchases Only</small>
                        </h2>
                    </div>
                    <div className="col-xl-3 col-sm-4 py-3 text-center text-sm-right">
                        <ALink href="/shop" className="btn btn-light btn-lg mr-3 ls-10">View Sale</ALink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( PromoSection );
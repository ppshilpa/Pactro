import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

function SaleBanner() {
    return (
        <div className="sale-banner banner">
            <div className="container banner-content">
                <Reveal keyframes={fadeIn} delay={100} duration={1500} triggerOnce>
                    <div className="row no-gutter bg-secondary">
                        <div className="col-auto col-md-4 d-flex flex-column justify-content-center col-1">
                            <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                            <h3 className="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                        </div>
                        <div className="col-auto col-md-4 col-2">
                            <h5 className="text-white mb-0 position-relative align-left">50<small>%<ins>OFF</ins></small>
                            </h5>
                        </div>
                        <div className="mb-0 col-md-4 col-3 col-auto btn-shop">
                            <ALink href="/shop" className="btn btn-lg btn-primary">Shop Now!</ALink>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}

export default React.memo(SaleBanner);
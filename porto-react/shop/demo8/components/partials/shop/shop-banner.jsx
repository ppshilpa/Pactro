import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';

import { fadeIn } from '../../../utils/data/keyframes'

export default function ShopBanner(props) {
    const { hasgap } = props;

    return (
        <div className={`sale-banner banner mt-0 ${hasgap ? 'mb-2' : ''} `}>
            <Reveal keyframes={fadeIn} delay={100} duration={1500} triggerOnce>
                <div className="container banner-content">
                    <div className="row no-gutter bg-primary mb-0">
                        <div className="col-auto col-md-4 d-flex flex-column justify-content-center col-1">
                            <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                            <h3 className="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                        </div>
                        <div className="col-auto col-md-4 col-2">
                            <h2 className="text-white mb-0 position-relative align-left">50<small>%<ins>OFF</ins></small>
                            </h2>
                        </div>
                        <div className="mb-0 col-md-4 col-3 col-auto">
                            <ALink href="/shop" className="btn btn-lg btn-dark">Shop Now!</ALink>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}
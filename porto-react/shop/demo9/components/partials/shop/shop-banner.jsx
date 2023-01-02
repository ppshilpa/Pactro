import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';
import { fadeIn } from '../../../utils/data/keyframes'

export default function ShopBanner(props) {
    const { hasgap } = props;

    return (
        <div className={`category-banner pt-0 pb-0 bg-img banner banner-md-vw-small ${hasgap ? 'mb-2 mt-0' : ''}`}
            style={{ backgroundImage: 'url(images/home/banners/category-banner.jpg)' }}>
            <div className="banner-content w-md-100 slide-1 text-xl-right banner-layer-middle">
                <div className="row d-block d-sm-inline-flex flex-sm-nowrap align-items-center">
                    <div className="col-auto mt-1 col-md-6 pl-sm-4 pl-0">
                        <h4 className="text-md-right slide-title">Find the Boundaries. Push Through!</h4>
                        <Reveal keyframes={fadeIn} delay={100} duration={1500} triggerOnce>
                            <h2 className="mb-0 text-md-right text-uppercase sub-title">Shoes Sale</h2>
                        </Reveal>
                    </div>
                    <div className="col-auto col-md-6 content-right">
                        <h4 className="d-inline-block text-left text-uppercase line-height-1 d-inline-block">
                            Starting At</h4>
                        <h5 className="text-left coupon-sale-text mb-2">$<b>119</b>99</h5>
                        <div className="mb-0">
                            <ALink href="/shop" className="btn btn-modern btn-md btn-dark">SHOP NOW!</ALink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';

import { fadeInRightShorter, blurIn } from '../../../utils/data/keyframes'

export default function BannerOne () {
    return (
        <section className="section-1 large-banner section-bg bg-img bg-fixed overflow-hidden" style={ { backgroundImage: 'url(images/home/bg-1.jpg)' } }>
            <div className="container position-relative h-100">
                <div className="banner-layer banner-layer-middle float-right ml-auto text-right">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 700 } duration={ 1000 }>
                        <h2 className="m-b-2">New Season Shirts</h2>
                    </Reveal>
                    <Reveal keyframes={ blurIn } delay={ 700 } duration={ 1200 }>
                        <h3 className="text-uppercase rotated-upto-text mb-0 position-relative"><small>Up to</small>50% Off</h3>
                    </Reveal>
                    <Reveal keyframes={ blurIn } delay={ 1200 } duration={ 1200 }>
                        <hr className="divider-short-thick" />
                    </Reveal>
                    <Reveal keyframes={ blurIn } delay={ 1900 } duration={ 1200 }>
                        <>
                            <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">Starting at&nbsp;
                            <span>$ <strong>39</strong>99</span>
                            </h5>
                            <ALink href="/shop" className="btn btn-dark btn-xl btn-icon-right" role="button">Shop Now&nbsp;
                            <i className="fas fa-long-arrow-alt-right"></i>
                            </ALink>
                        </>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
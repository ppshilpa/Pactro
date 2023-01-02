import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';

import { fadeInRightShorter, blurIn } from '../../../utils/data/keyframes'

export default function BannerOne () {
    return (
        <section className="section-2 large-banner slider-left overflow-hidden section-bg bg-img bg-fixed" style={ { backgroundImage: 'url(images/home/bg-2.jpg)' } }>
            <div className="container position-relative h-100">
                <div className="banner-layer banner-layer-middle float-right ml-auto text-left">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 700 } duration={ 1000 }>
                        <h2 className="m-b-2 text-white">Summer Fashion Hats</h2>
                    </Reveal>
                    <Reveal keyframes={ blurIn } delay={ 700 } duration={ 1200 }>
                        <h3 className="text-uppercase rotated-upto-text mb-0 position-relative text-white"><small>Up to</small>50% Off</h3>
                    </Reveal>
                    <Reveal keyframes={ blurIn } delay={ 1200 } duration={ 1200 }>
                        <hr className="divider-short-thick border-white" />
                    </Reveal>
                    <Reveal keyframes={ blurIn } delay={ 1900 } duration={ 1200 }>
                        <>
                            <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2 text-white">Starting at&nbsp;
                            <span>$ <strong>39</strong>99</span>
                            </h5>
                            <ALink href="/shop" className="btn btn-light btn-xl btn-icon-right" role="button">Shop Now&nbsp;
                            <i className="fas fa-long-arrow-alt-right"></i>
                            </ALink>
                        </>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
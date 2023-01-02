import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';

import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function CategroySection () {
    return (
        <section className="section-3 category-section d-block d-md-flex">
            <div className="col-md-6 col-12 banner banner-1 bg-img d-flex align-items-center"
                style={ { backgroundImage: 'url(images/home/banners/banner-1.jpg)' } }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1200 } triggerOnce>
                    <div className="banner-content">
                        <h3 className="title">DRESSES
                            <br />COLLECTION</h3>
                        <p className="subtitle font2">Check out this week's hottest styles.</p>
                        <div className="mb-0">
                            <ALink href="/shop" role="button"
                                className="btn btn-primary btn-borders btn-lg btn-outline-dark btn-dark">
                                SHOP NOW
                            </ALink>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="col-md-6 col-12 banner banner-1 bg-img d-flex align-items-center"
                style={ { backgroundImage: 'url(images/home/banners/banner-2.jpg)' } }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1200 } triggerOnce>
                    <div className="banner-content">
                        <h3 className="title">HANDBAGS
                            <br />COLLECTION</h3>
                        <p className="subtitle font2">Check out this week's hottest styles.</p>
                        <div className="mb-0">
                            <ALink href="/shop" role="button"
                                className="btn btn-primary btn-borders btn-lg btn-outline-dark btn-dark">
                                SHOP NOW
                            </ALink>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
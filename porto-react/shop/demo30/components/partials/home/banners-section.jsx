import React from 'react';
import Reveal from 'react-awesome-reveal';

//Import Custom Component
import ALink from '../../common/ALink';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'

function BannersSection () {
    return (
        <section className="bg-gray pt-5 pb-5">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container mt-1 mb-1">
                    <div className="row">
                        <div className="col-md-4 mb-md-0 mb-2">
                            <div className="home-banner5" style={ { color: '#d66a79' } }>
                                <div className="banner-background" style={ { backgroundImage: 'url(images/home/banners/home-banner5.jpg)' } }>
                                    <div className="banner-content">
                                        <span>Shop Gifts</span>
                                        <h3>For Her</h3>
                                        <ALink href={ { pathname: '/shop', query: { category: 'for-her-1' } } } className="btn">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-md-0 mb-2">
                            <div className="home-banner5" style={ { color: '#293871' } }>
                                <div className="banner-background" style={ { backgroundImage: 'url(images/home/banners/home-banner6.jpg)' } }>
                                    <div className="banner-content">
                                        <span>Shop Gifts</span>
                                        <h3>For Him</h3>
                                        <ALink href={ { pathname: '/shop', query: { category: 'for-him-1' } } } className="btn">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="home-banner5" style={ { color: '#c6a99b' } }>
                                <div className="banner-background" style={ { backgroundImage: 'url(images/home/banners/home-banner7.jpg)' } }>
                                    <div className="banner-content">
                                        <span>Shop Gifts</span>
                                        <h3>For Kids</h3>
                                        <ALink href={ { pathname: '/shop', query: { category: 'for-kids-1' } } } className="btn">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( BannersSection );
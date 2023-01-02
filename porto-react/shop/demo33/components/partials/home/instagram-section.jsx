import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Utils
import ALink from '../../common/ALink';
import { fadeIn } from '../../../utils/data/keyframes';

function InstagramSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <div className="instagram-feed">
                <div className="insta-items row">
                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/1.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/2.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/3.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/4.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/5.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/6.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/7.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/8.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/9.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/10.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/11.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>

                    <div className="insta-item overlay-dark col-lg-2 col-md-3 col-sm-4 col-6 media-with-lazy">
                        <figure>
                            <LazyLoadImage
                                alt="instagram"
                                src="images/home/insta/12.jpg"
                                threshold={ 500 }
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </figure>

                        <ALink href="#">
                            <i className="icon-instagram"></i>
                        </ALink>
                    </div>
                </div>

                <div className="instagram-feed-content">
                    <i className="icon-instagram"></i>
                    <h3 className="text-uppercase">Instagram</h3>
                    <p className="text">@portoecommerce</p>
                    <ALink href="#" className="btn btn-outline">Follow</ALink>
                </div>
            </div>
        </Reveal>
    );
}

export default React.memo( InstagramSection );
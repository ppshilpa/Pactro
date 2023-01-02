import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settings
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function NewsletterSection () {
    return (
        <section className="newsletter-section">
            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <div className="widget-newsletter">
                        <div className="row no-gutters m-0">
                            <div className="col-md-5">
                                <div className="info-box info-box-icon-left justify-content-start align-itmes-center">
                                    <i className="far fa-envelope line-height-1 text-primary"></i>
                                    <div className="info-content">
                                        <h4 className="line-height-1 text-dark">Get Special Offers and Savings</h4>
                                        <p className="font2 text-body">Get all the latest information on Events, Sales and
                                            Offers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <form className="newsletter-form" action="#" method="get">
                                    <input type="email" className="form-control font2 mb-0"
                                        placeholder="Enter Your E-mail Address..." required />

                                    <button type="submit" className="btn btn-submit text-white">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( NewsletterSection );
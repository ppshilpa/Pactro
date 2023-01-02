import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes';

function NewsletterSection () {
    return (
        <section className="newsletter-section bg-white text-center" >
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce >
                <div className="container">
                    <p className="text-dark m-b-2"><i className="far fa-envelope"></i></p>
                    <h2 className="ls-n-10 mb-0">Subscribe to Our Newsletter</h2>
                    <h5 className="font-weight-normal text-body m-b-4">Get all the latest information on Events, Sales and
                        Offers.</h5>
                    <form className="newsletter-form" action="#" method="get">
                        <input type="email" className="form-control font2 mb-0" placeholder="Enter Your E-mail Address..."
                            required />

                        <button type="submit" className="btn btn-submit text-white">Subscribe</button>
                    </form>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo( NewsletterSection );
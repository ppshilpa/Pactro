import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'

function NewsletterSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
            <div className="newsletter-section pt-3">
                <div className="container text-center">
                    <h3 className="ls-n-10">Get Special Offers and Savings</h3>
                    <p>Get all the latest information on Events, Sales and Offers.</p>

                    <form action="#" method="get" className="mb-0">
                        <div className="submit-wrapper">
                            <input type="email" className="form-control" name="q" id="qqq"
                                placeholder="Enter Your E-mail Address..." required />
                            <button className="btn btn-primary" type="submit">OK</button>
                        </div>
                    </form>
                </div>
            </div>
        </Reveal>
    );
}

export default React.memo( NewsletterSection );
import Reveal from 'react-awesome-reveal';

// Import Settings
import { fadeIn } from '../../../utils/data/keyframes'

export default function NewsletterSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="newsletter-section mb-5">
                <div className="info-box icon-top text-center justify-content-center">
                    <i className="far fa-envelope"></i>

                    <div className="info-box-content">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Get all the latest information on Events, Sales and Offers.</p>
                    </div>
                </div>

                <div className="col-md-10 offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 offset-md-1">
                    <form action="#" className="mb-0 d-flex newsletter-form">
                        <input type="email" className="form-control" placeholder="Enter Your E-mail Address..." size="40" required />
                        <button type="submit" className="btn btn-dark">Subscribe</button>
                    </form>
                </div>
            </section>
        </Reveal>
    );
}
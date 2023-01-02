export default function NewsletterSection() {
    return (
        <section className="section-7 newsletter-section bg-image bg-fixed"
            style={{ backgroundImage: 'url(images/home/bg-6.jpg)' }}>
            <div className="container d-flex justify-content-center">
                <div className="col-md-10 col-xl-7 col-lg-8 p-0">
                    <div className="info-box icon-top text-center justify-content-center">
                        <div className="info-box-content">
                            <h2 className="ls-n-20 text-white">Subscribe to Our Newsletter</h2>
                            <p>Get all the latest information on events, sales and
                                    <br />offers. Sign up for newsletter:</p>
                        </div>
                    </div>

                    <form action="#" className="mb-0 d-flex newsletter-form">
                        <input type="email" className="form-control border-0" placeholder="Email address" size="40"
                            required />
                        <button type="submit" className="btn btn-dark bg-primary border-0">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
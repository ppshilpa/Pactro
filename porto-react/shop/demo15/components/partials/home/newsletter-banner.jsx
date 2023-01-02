export default function NewsletterBanner() {
    return (
        <div className="newsletter-banner">
            <div className="d-flex flex-wrap">
                <div className="col-md-6 px-3">
                    <h2 className="text-center ls-n-20 m-b-1 text-md-right">Subscribe To Our Newsletter</h2>
                    <h5 className="font-weight-normal text-center text-md-right">Get all the latest information on
                                events, sales and offers.</h5>
                </div>
                <div className="col-md-5 widget-newsletter px-3">
                    <form action="#" className="d-flex justify-content-center mb-0">
                        <input type="email" className="form-control mb-0" placeholder="Email address" required />
                        <button className="btn btn-primary">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
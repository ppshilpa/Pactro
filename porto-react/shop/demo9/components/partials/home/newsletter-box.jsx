export default function NewsletterBox() {
    return (
        <div className="banner newsletter-banner bg-img"
            style={{ backgroundImage: 'url(images/home/banners/banner.jpg)' }}>
            <div className="banner-content col-md-9 col-xl-6 col-lg-8 col-11 p-l-5 pr-0">
                <h2 className="text-center ls-n-20 m-b-2 text-uppercase">subscribe to our newsletter</h2>
                <h5 className="text-center text-body font-weight-normal m-b-3 p-x-4">Get all the latest information
                on events, sales and  offers. Sign up for newsletter:</h5>
                <div className="widget-newsletter">
                    <form action="#" className="d-flex justify-content-center mb-0">
                        <input type="email" className="form-control mb-1" placeholder="Email address" required />
                        <button className="btn btn-primary">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
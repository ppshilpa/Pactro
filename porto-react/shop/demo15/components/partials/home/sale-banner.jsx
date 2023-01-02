import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function SaleBanner() {
    return (
        <section className="sale-banner m-t-3">
            <div className="banner" style={{ backgroundColor: '#ffab8c' }}>
                <LazyLoadImage
                    alt="banner"
                    src="images/home/banners/banner-4.jpg"
                    width="100%"
                    height="auto"
                />
                <div className="banner-layer banner-layer-middle banner-layer-left">
                    <h5 className="font-weight-normal m-b-3 font3 text-left">Outlet Selected Items</h5>
                    <h4 className="mb-0 text-left text-uppercase text-white">big sale up to</h4>
                    <h3 className="text-sale text-left text-white mb-0">80% <small>OFF</small>
                    </h3>
                </div>
            </div>
        </section>
    )
}
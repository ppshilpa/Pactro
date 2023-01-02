import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ShopBanner(props) {
    const { nogap } = props;

    return (
        <div className="sub-page">
            <div className="banner" style={{ backgroundColor: '#0188ca' }}>
                <figure>
                    <img src="images/home/banners/category-bg.jpg" alt="banner" width="1903" height="347px" />
                </figure>
                <div className="container">
                    <div className="banner-layer banner-layer-middle float-right ml-auto text-left">
                        <h2 className="text-white">Summer Trends</h2>
                        <h3 className="text-uppercase mb-0 position-relative text-white">sale</h3>
                    </div>
                    <div className="banner-layer banner-layer-middle mr-auto text-right">
                        <h2 className="text-white text-uppercase">prices up to</h2>
                        <h3 className="text-uppercase mb-0 position-relative text-white">80%
                            <small>off</small>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
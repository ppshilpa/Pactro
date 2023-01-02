import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

function HomeSection() {
    const [mediaRef, setMediaRef] = useState(null);

    const events = {
        onTranslate: function (e) {
            document.querySelector(`.home-slider-thumbs a.active`) && document.querySelector(`.home-slider-thumbs a.active`).classList.remove('active');
            let thumbs = document.querySelectorAll(`.home-slider-thumbs a`);
            thumbs[e.item.index].classList.add('active');
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', animationHandler, { passive: true });

        return (() => {
            window.removeEventListener('mousemove', animationHandler);
        })
    }, [])

    function animationHandler(e) {
        let offsetX = e.clientX - window.innerWidth / 2,
            offsetY = e.clientY - window.innerHeight / 2;

        let images = document.querySelectorAll('.layer img');
        for (let i = 0; i < images.length; i++) {
            let x = 0,
                y = 0;
            if (images[i].parentNode.getAttribute('data-depth')) {
                x =
                    offsetX *
                    images[i].parentNode.getAttribute('data-depth');
                y =
                    offsetY *
                    images[i].parentNode.getAttribute('data-depth');
            } else {
                x = offsetX;
                y = offsetY;
            }
            x = x * (1903 / images[i].width / 300);
            y = y * (1903 / images[i].width / 300);
            images[i].parentNode.style.position = 'absolute';
            images[i].parentNode.style.display = 'block';
            images[i].parentNode.style.left = '0';
            images[i].parentNode.style.top = '0';
            images[i].parentNode.style.transform = 'translate3d(' + -x + '%, ' + -y + '%, 0)';
        }
    }

    function changeMediaIndex(e, index) {
        e.preventDefault();
        mediaRef.current.goTo(index);
    }

    return (
        <section className="home-slider-container">
            <OwlCarousel adClass="home-slider with-dots-container" events={events} onChangeRef={setMediaRef}  >
                <div className="home-slide home-slide1 banner" style={{ backgroundImage: 'url(images/home/slider/home-slide-back.jpg)', backgroundColor: '#111' }}>
                    <ul className="slide-bg scene w-100 h-100" >
                        <li className="layer" data-depth="0.06"><img src="images/home/slider/white-shoes.png" className="bg-img" alt="Bg Image" /></li>
                        <li className="layer" data-depth="0.01"><img style={{ position: 'absolute', top: '31%', left: '46.5%' }} src="images/home/slider/blurflake1.png" alt="" /></li>
                        <li className="layer" data-depth="0.003"><img className="animation-spin" style={{ position: 'absolute', top: '25%', left: '66%' }}
                            src="images/home/slider/blurflake2.png" alt="" /></li>
                        <li className="layer" data-depth="0.01"><img className="animation-wave" style={{ position: 'absolute', top: '50%', left: '80%' }} src="images/home/slider/blurflake3.png" alt="" /></li>
                        <li className="layer" data-depth="0.01"><img style={{ position: 'absolute', top: '70%', left: '55%' }} src="images/home/slider/blurflake4.png" alt="" /></li>
                    </ul>
                    <div className="home-slide-content">
                        <h2 className="text-white text-transform-uppercase line-height-1">Spring / Summer Season</h2>
                        <h3 className="text-white d-inline-block line-height-1 ls-0 text-center">up<br />
                                to</h3>
                        <h4 className="text-white text-uppercase line-height-1 d-inline-block">50% off</h4>
                        <div></div>
                        <h5 className="float-left text-white text-uppercase line-height-1 ls-n-20">Starting At</h5>
                        <h6
                            className="float-left coupon-sale-text line-height-1 ls-n-20 font-weight-bold text-secondary">
                            <sup>$</sup>19<sup>99</sup></h6>
                        <ALink href="/shop" className="btn btn-light d-inline-block">Shop Now</ALink>
                    </div>
                </div>

                <div className="home-slide home-slide2 banner" style={{ backgroundImage: 'url(images/home/slider/home-slide-back.jpg)', backgroundColor: '#111' }}>
                    <ul className="slide-bg scene w-100 h-100">
                        <li className="layer" data-depth="0.06"><img src="images/home/slider/ball2.png" className="bg-img" alt="Bg Image" /></li>
                        <li className="layer" data-depth="0.01"><img style={{ position: 'absolute', top: '70%', left: '42%' }}
                            src="images/home/slider/blurflake1.png" alt="" /></li>
                        <li className="layer" data-depth="0.003"><img className="animation-spin" style={{ position: 'absolute', top: '25%', left: '45%' }}
                            src="images/home/slider/blurflake2.png" alt="" /></li>
                        <li className="layer" data-depth="0.01"><img className="animation-wave" style={{ position: 'absolute', top: '49%', left: '21%' }}
                            src="images/home/slider/blurflake3.png" alt="" /></li>
                        <li className="layer" data-depth="0.01"><img style={{ position: 'absolute', top: '25%', left: '23%' }}
                            src="images/home/slider/blurflake4.png" alt="" /></li>
                    </ul>
                    <div className="home-slide-content">
                        <h2 className="text-white text-transform-uppercase line-height-1">Spring / Summer Season</h2>
                        <h3 className="text-white d-inline-block line-height-1 ls-0 text-center">up<br />
                                to</h3>
                        <h4 className="text-white text-uppercase line-height-1 d-inline-block">50% off</h4>
                        <div></div>
                        <h5 className="float-left text-white text-uppercase line-height-1 ls-n-20">Starting At</h5>
                        <h6
                            className="float-left coupon-sale-text line-height-1 ls-n-20 font-weight-bold text-secondary">
                            <sup>$</sup>19<sup>99</sup></h6>
                        <ALink href="/shop" className="btn btn-light d-inline-block">Shop Now</ALink>
                    </div>
                </div>
            </OwlCarousel>

            <OwlCarousel adClass="home-slider-thumbs" options={{ margin: 10, items: 2 }}>
                <a href="#" className="active" onClick={e => { changeMediaIndex(e, 0); }}>
                    <LazyLoadImage
                        alt="Thumbnail"
                        src="images/home/slider/slide-1-thumb.jpg"
                        width={138}
                        height={91}
                    />
                </a>
                <a href="#" onClick={e => { changeMediaIndex(e, 1); }}>
                    <LazyLoadImage
                        alt="Thumbnail"
                        src="images/home/slider/slide-2-thumb.jpg"
                        width={138}
                        height={91}
                    />
                </a>
            </OwlCarousel>
        </section>
    );
}

export default React.memo(HomeSection);
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'rc-tree/assets/index.css';
import 'react-input-range/lib/css/index.css';
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';


// Import Custom Coponent
import StickyNavbar from "./common/partials/sticky-navbar";
import Header from "./common/header";
import Footer from "./common/footer";
import MobileMenu from "./common/partials/mobile-menu";
import QuickModal from "../components/features/modals/quickview";
import VideoModal from "../components/features/modals/video-modal";

// Import Modal Action
import { actions } from '../store/modal'

// Import Utils
import { stickyInit, scrollTopHandlder, scrollTopInit } from "../utils";
import { useRouter } from "next/router";
import ALink from "./common/ALink";

function Layout ( { children, hideQuickView, hideVideo } ) {
    const router = useRouter();
    const [ showTopNotice, setShowTopNotice ] = useState( !Cookie.get( "closeTopNotice" ) );

    function closeTopNotice () {
        setShowTopNotice( false );
        Cookie.set( "closeTopNotice", true, { expires: 7, path: router.basePath } );
    }

    useEffect( () => {
        window.addEventListener( "scroll", stickyInit, { passive: true } );
        window.addEventListener( "scroll", scrollTopInit, { passive: true } );
        window.addEventListener( "resize", stickyInit );
        hideQuickView();
        hideVideo();

        return () => {
            window.removeEventListener( "scroll", stickyInit, { passive: true } );
            window.removeEventListener( "scroll", scrollTopInit, { passive: true } );
            window.removeEventListener( "resize", stickyInit );
        }
    }, [] )

    return (
        <>
            <div className="page-wrapper">
                {
                    showTopNotice ?
                        <div className="top-notice">
                            <div className="container d-flex flex-wrap align-items-center justify-content-center text-center">
                                <img src="images/home/banners/header-item.png" alt="Top Ads" width="237" height="49" />

                                <div className="notice-content my-2">
                                    <h3 className="d-inline-block font1 text-secondary mb-0">PortoPlus X Pro Only</h3>
                                    <div className="d-inline-block">
                                        <span
                                            className="d-inline-block skew-box product-price font1 font-weight-bold bg-secondary">$199</span>
                                        <span className="d-inline-block font1 old-price text-secondary mr-0">$299</span>
                                    </div>
                                </div>

                                <ALink href="#" className="btn btn-dark font1 ls-n-10 round-box my-2">code: <strong>portoplusx</strong></ALink>
                            </div>

                            <button title="Close (Esc)" type="button" onClick={ closeTopNotice } className="mfp-close">×</button>
                        </div>
                        : ''
                }

                {
                    router.pathname === '/' ?
                        <Header adClass="home" />
                        : <Header />
                }

                { children }

                <Footer />

                <ToastContainer
                    autoClose={ 3000 }
                    duration={ 300 }
                    newestOnTo={ true }
                    draggable={ false }
                    className="toast-container"
                    position="bottom-right"
                    closeButton={ false }
                    hideProgressBar={ true }
                    newestOnTop={ true }
                />

                <QuickModal />
                <VideoModal />

                <div className="wishlist-popup"><div className="wishlist-popup-msg">Product added!</div></div>
            </div>

            <MobileMenu />
            <StickyNavbar />

            <a id="scroll-top" href="#" title="Top" role="button" className="btn-scroll" onClick={ scrollTopHandlder }><i className="icon-angle-up"></i></a>
        </>
    )
}

export default connect( null, actions )( Layout );
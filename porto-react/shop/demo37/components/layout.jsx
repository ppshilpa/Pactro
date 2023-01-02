import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'rc-tree/assets/index.css';
import 'react-input-range/lib/css/index.css';
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';


// Import Custom Coponent
import ALink from "./common/ALink";
import Header from "./common/header";
import Footer from "./common/footer";
import MobileMenu from "./common/partials/mobile-menu";
import QuickModal from "../components/features/modals/quickview";
import StickyNavbar from "./common/partials/sticky-navbar";
import VideoModal from "../components/features/modals/video-modal";

// Import Modal Action
import { actions } from '../store/modal'

// Import Utils
import { stickyInit, scrollTopHandlder, scrollTopInit } from "../utils";

function Layout ( { children, hideQuickView, hideVideo } ) {
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
                        <div className="top-notice bg-dark text-white">
                            <div className="container text-center">
                                <h5 className="d-inline-block">Get Up to <b>40% OFF</b> New-Season Styles</h5>
                                <ALink href={ { pathname: '/shop', query: { category: 'men' } } } className="category mr-1">MEN</ALink>
                                <ALink href={ { pathname: '/shop', query: { category: 'women' } } } className="category ml-2 mr-3">WOMEN</ALink>
                                <small className="ml-1 pl-1">* Limited time only.</small>
                                <button title="Close (Esc)" type="button" onClick={ closeTopNotice } className="mfp-close">×</button>
                            </div>
                        </div>
                        : ''
                }

                <Header />

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
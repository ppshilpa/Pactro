import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';

// Import Custom Coponent
import StickyNavbar from "./common/partials/sticky-navbar";
import Header from "./common/header";
import Footer from "./common/footer";
import MobileMenu from "./common/partials/mobile-menu";
import QuickModal from "../components/features/modals/quickview";
import VideoModal from "../components/features/modals/video-modal";
import TopNotice from "./common/top-notice";

// Import Modal Action
import { actions } from '../store/modal'

// Import Utils
import { stickyInit, scrollTopHandlder, scrollTopInit } from "../utils";
import { useRouter } from "next/router";

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
                <TopNotice />

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
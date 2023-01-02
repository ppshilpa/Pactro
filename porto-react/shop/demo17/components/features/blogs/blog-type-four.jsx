import React, { useState } from 'react';
import LightBox from 'react-image-lightbox';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from "../../common/ALink";
import OwlCarousel from '../owl-carousel';

// Import Utils
import { postSlider } from '../../../utils/data/slider';

// Import Action
import { actions as ModalAction } from "../../../store/modal";

function BlogTypeFour ( props ) {
    const { adClass = '', blog } = props;
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    let date = new Date( blog.date );
    let monthArray = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    const events = {
        onTranslated: function ( e ) {
            setPhotoIndex( e.item.index );
        }
    };

    function openModal ( e ) {
        e.preventDefault();
        props.showVideo();
    }

    function openLightBox () {
        setOpenLB( true );
    }

    function closeLightBox () {
        setOpenLB( false );
    }

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % blog.picture.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + blog.picture.length - 1 ) % blog.picture.length );
    }

    return (
        <article className={ `post d-sm-flex d-block align-items-center media-with-zoom mb-0 media-with-lazy ${adClass}` }>
            {
                blog.picture &&
                ( blog.picture.length > 1 ?
                    <OwlCarousel adClass="owl-theme post-slider mb-0 show-nav-hover" options={ postSlider } events={ events } >
                        {
                            blog.picture.map( ( picture, index ) => (
                                <figure className="post-media position-relative ml-auto mr-auto mb-sm-0" key={ "Blog:", index }>
                                    <ALink href={ `/pages/blog/${blog.slug}` }>
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="post_image"
                                            src={ process.env.NEXT_PUBLIC_ASSET_URI + picture.url }
                                            threshold={ 500 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </ALink>

                                    <div className="post-date">
                                        <span className="day">{ `${date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate()}` }</span>
                                        <span className="month">{ monthArray[ date.getUTCMonth() ] }</span>
                                    </div>

                                    {
                                        blog.video &&
                                        <a className="btn-play btn-iframe" onClick={ openModal } href="https://www.youtube.com/watch?v=vBPgmASQ1A0"><i className="fas fa-play"></i></a>
                                    }

                                    <span className="prod-full-screen" onClick={ openLightBox }>
                                        <i className="fas fa-search"></i>
                                    </span>
                                </figure>
                            ) )
                        }
                    </OwlCarousel>
                    :
                    <figure className="post-media position-relative ml-auto mr-auto mb-sm-0">
                        <ALink href={ `/pages/blog/${blog.slug}` }>
                            <div className="lazy-overlay"></div>

                            <LazyLoadImage
                                alt="post_image"
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ 0 ].url }
                                threshold={ 500 }
                                width="100%"
                                height="auto"
                                effect="blur"
                            />
                        </ALink>

                        {
                            blog.video &&
                            <a className="btn-play btn-iframe" onClick={ openModal } href="https://www.youtube.com/watch?v=vBPgmASQ1A0"><i className="fas fa-play"></i></a>
                        }

                        <div className="post-date">
                            <span className="day">{ `${date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate()}` }</span>
                            <span className="month">{ monthArray[ date.getUTCMonth() ] }</span>
                        </div>

                        <span className="prod-full-screen" onClick={ openLightBox }>
                            <i className="fas fa-search"></i>
                        </span>
                    </figure>
                )
            }

            <div className="post-body border-0 text-center text-sm-left">
                <h2 className="post-title">
                    <ALink href={ `/pages/blog/${blog.slug}` }>{ blog.title }</ALink>
                </h2>

                <div className="post-content">
                    <p>{ blog.content }</p>
                </div>

                <ALink href={ `/pages/blog/${blog.slug}` } className="post-comment">
                    <i className="far fa-comments m-r-1"></i>0 COMMENTS</ALink>
            </div>

            {
                openLB && (
                    <LightBox
                        mainSrc={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ photoIndex ].url }
                        prevSrc={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ ( photoIndex + blog.picture.length - 1 ) % blog.picture.length ].url }
                        nextSrc={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ ( photoIndex + 1 ) % blog.picture.length ].url }
                        onCloseRequest={ closeLightBox }
                        onMoveNextRequest={ moveNextPhoto }
                        onMovePrevRequest={ movePrevPhoto }
                    />
                )
            }
        </article >
    )
}

export default connect( null, ModalAction )( BlogTypeFour );
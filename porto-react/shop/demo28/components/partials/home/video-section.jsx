import React from 'react';
import { connect } from 'react-redux';
import Reveal from 'react-awesome-reveal';

// Import Action
import { actions as ModalAction } from "../../../store/modal";

// Import Keyframes
import { fadeIn } from '../../../utils/data/keyframes';

function VideoSection ( props ) {
    function openModal ( e ) {
        e.preventDefault();
        props.showVideo();
    }

    return (
        <section className="video-section" style={ { background: '#bb3a1b url(images/home/bg.jpg)' } }>
            <div className="section-body d-flex flex-column align-items-center justify-content-center">
                <h2 className="product-title text-white">EXPLORE THE BEST FOR YOU</h2>
                <a href="https://www.youtube.com/watch?v=YbJOTdZBX1g" className="btn play-btn btn-iframe" onClick={ openModal }>
                    <i className="fas fa-play"></i>
                </a>
            </div>
        </section>
    );
}

export default connect( null, ModalAction )( VideoSection );
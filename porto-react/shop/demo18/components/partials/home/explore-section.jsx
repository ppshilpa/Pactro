import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Cusom Component
import ALink from '../../common/ALink';

// Import Utils
import { setParallax } from '../../../utils/index';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function ExploreSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    return (
        <section className="explore-section d-flex align-items-center parallax" style={ { backgroundImage: 'url(images/home/bg-2.jpg)', backgroundColor: '#111' } } >
            <div className="container-fluid text-center position-relative">
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <>
                        <h3 className="line-height-1 ls-n-25 text-white text-uppercase m-b-4">Explore the best of you</h3>
                        <ALink href="/shop" className="btn btn-light">Shop Now</ALink>
                    </>
                </Reveal>
            </div>
        </section>
    );
}

export default React.memo( ExploreSection );
import React from 'react';
import Reveal from 'react-awesome-reveal';

//Import Custom Component
import Blog from './blog';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'
import { blogSlider } from '../../../utils/data/slider';

export default function BlogSection ( { blog } ) {
    return (
        <section className="blog-section post-date-in-media media-with-zoom bg-gray">
            <div className="container">
                <OwlCarousel options={ blogSlider }>
                    {
                        blog ?
                            blog.map( ( item, index ) => (
                                <Blog blog={ item } key={ "blog" + index } />
                            ) )

                            :
                            new Array( 3 ).fill( 1 ).map( ( item, index ) => (
                                <div className="skel-pro skel-pro-grid" key={ "Blog Skeleton:" + index }></div>
                            ) )
                    }
                </OwlCarousel>
            </div>
        </section>
    );
}
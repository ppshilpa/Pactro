import React from 'react';
import Reveal from 'react-awesome-reveal';

//Import Custom Component
import Blog from './blog';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'
import { blogSlider } from '../../../utils/data/slider';

export default function BlogSection ( { blog } ) {
    const slideOption = { ...blogSlider, responsive: { ...blogSlider.responsive, 768: { items: 2 }, 992: { items: 3 } } };

    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 250 } duration={ 1000 } triggerOnce>
            <section className="blog-section font2 media-with-zoom">
                <div className="heading">
                    <h2 className="text-uppercase">FROM THE BLOG</h2>
                </div>

                <OwlCarousel adClass="mb-0" options={ slideOption }>
                    {
                        blog ?
                            blog.slice( 0, 3 ).map( ( item, index ) => (
                                <Blog blog={ item } key={ "blog" + index } />
                            ) )

                            :
                            new Array( 3 ).fill( 1 ).map( ( item, index ) => (
                                <div className="skel-pro skel-pro-grid" key={ "Blog Skeleton:" + index }></div>
                            ) )
                    }
                </OwlCarousel>
            </section>
        </Reveal>
    );
}
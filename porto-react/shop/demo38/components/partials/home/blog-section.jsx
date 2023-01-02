import React from 'react';
import Reveal from 'react-awesome-reveal';

//Import Custom Component
import Blog from './blog';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'
import { blogSlider } from '../../../utils/data/slider';

export default function BlogSection ( { blog } ) {
    const slideOption = { ...blogSlider, responsive: { ...blogSlider.responsive, 768: { items: 2 }, 992: { items: 3 } } };

    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 250 } duration={ 1000 } triggerOnce>
            <section className="blog-section media-with-zoom">
                <div className="heading text-uppercase text-center">
                    <h5>OUR BLOG</h5>

                    <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                        <h2 className="text-transform-none mb-0">Recent Articles and News</h2>
                    </Reveal>

                    <p className="text-transform-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            imperdiet libero idnisl euis</p>
                </div>

                <OwlCarousel adClass="post-slider mb-0" options={ slideOption }>
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
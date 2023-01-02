import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';
import Blog from './blog';

// Import Utils
import { fadeInUpShorter } from '../../../utils/data/keyframes'
import { blogSlider } from '../../../utils/data/slider';

export default function BlogSection ( props ) {
    const { blog } = props;
    const sliderOptions = { ...blogSlider, responsive: { ...blogSlider.responsive, 768: { items: 2 } } }

    return (
        <section className="blog-section post-date-in-media media-with-zoom" style={ { backgroundImage: 'url(images/home/blogs/blog-text.png)' } }>
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title m-b-2">Beauty Inspiration</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                    <h5 className="section-info border-0 m-b-4">Only the best seller products added recently in our catalog</h5>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                    <OwlCarousel options={ sliderOptions }>

                        {
                            blog ?
                                blog.slice( 0, 2 ).map( ( item, index ) => (
                                    <Blog blog={ item } key={ "product-one" + index } />
                                ) )

                                :
                                [ 0, 1 ].map( ( item, index ) =>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                )
                        }

                    </OwlCarousel>
                </Reveal>
            </div>
        </section>
    );
}
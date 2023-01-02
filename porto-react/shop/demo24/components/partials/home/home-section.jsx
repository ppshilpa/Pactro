import React from 'react';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import Product from './product';
import { HomeSlider } from '../../../utils/data/slider';

function HomeSection ( { product } ) {
    return (
        <section className="intro-section mb-3">
            <OwlCarousel adClass="home-slider curved-border nav-big" options={ HomeSlider }>
                <div className="home-slide home-slide-1" style={ { backgroundImage: 'url(images/home/slider/slide-1.jpg)', backgroundColor: '#d85c50' } }>
                    <div className="container">
                        {
                            product ?
                                product.slice( 2, 3 ).map( ( item, index ) => (
                                    <Product product={ item } key={ "Home Product:" + index } />
                                ) )
                                :
                                <div className="row">
                                    <div className="skel-pro skel-magnifier col-sm-7"></div>
                                    <div className="skel-pro skel-detail col-sm-5"></div>
                                </div>
                        }
                    </div>
                </div>

                <div className="home-slide home-slide-2" style={ { backgroundImage: 'url(images/home/slider/slide-2.jpg)', backgroundColor: '#d85c50' } }>
                    <div className="container">
                        {
                            product ?
                                product.slice( 3, 4 ).map( ( item, index ) => (
                                    <Product product={ item } key={ "Home Product:" + index } />
                                ) )
                                :
                                ''
                        }
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );
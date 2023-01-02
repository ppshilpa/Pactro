import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

import { fadeIn } from '../../../utils/data/keyframes'
import { productSlider } from "../../../utils/data/slider";

export default function FeaturedCollection ( props ) {
    const { product, loading, homepage, fashion } = props;

    return (
        <section className="featured-products-section">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1500 }>
                <h2 className={ `section-title title-decorate text-center d-flex align-items-center ${ homepage ? 'index-products' : '' }` }>
                    { fashion ? 'fashion selection' : 'Featured Products' }</h2>
            </Reveal>
            {
                loading ?
                    <OwlCarousel adClass="nav-image-center" options={ productSlider }>
                        {
                            [ 0, 1, 2, 3, 4 ].map( ( item, index ) => (
                                <div className="skel-pro skel-pro-grid" key={ "prod-default-list" + index }></div>
                            ) )
                        }
                    </OwlCarousel>
                    :
                    <OwlCarousel adClass="nav-image-center" options={ productSlider }>
                        {
                            product.map( ( item, index ) => (
                                <ProductOne product={ item } key={ "propopular-list" + index } />
                            ) )
                        }
                    </OwlCarousel>
            }
        </section >
    );
}
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';

// Import Settings
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function PopularCollection ( props ) {
    const { product } = props;

    return (
        <section className="popular-section">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce >
                    <h2 className="section-title pb-3 m-b-4">Popular Items</h2>

                    <div className="row m-b-2">
                        {
                            product ?
                                product.slice( 0, 6 ).map( ( item, index ) => (
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "product-one" + index }>
                                        <ProductOne
                                            product={ item }
                                            adClass="inner-quickview inner-icon"
                                        />
                                    </div>
                                ) )
                                :

                                [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ "Featured Product:" + index }>
                                        <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                    </div>
                                )
                        }
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce >
                    <div className="tagcloud d-flex flex-wrap justify-content-between bg-gray mb-4">
                        <ALink href={ { pathname: '/shop', query: { category: 'cadillac' } } } scroll={ false }>Cadillac</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'chevy' } } } scroll={ false }>Chevy</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'dodge' } } } scroll={ false }>Dodge</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'ford' } } } scroll={ false }>Ford</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'honda' } } } scroll={ false }>Honda</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'hyundai' } } } scroll={ false }>Hyundai</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'jeep' } } } scroll={ false }>Jeep</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'nissan' } } } scroll={ false }>Nissan</ALink>
                        <ALink href={ { pathname: '/shop', query: { category: 'toyota' } } } scroll={ false }>Toyota</ALink>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
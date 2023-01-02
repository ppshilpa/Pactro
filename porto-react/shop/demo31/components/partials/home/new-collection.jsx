import React from 'react';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

export default function NewCollection ( props ) {
    const { product } = props;

    return (
        <section className="product-panel bar-bottom">
            <div className="section-title">
                <h2 className="mr-5 ls-0 mb-0">Recently Released</h2>
                <ALink href="/shop">view all products<i className="icon-right"></i></ALink>
            </div>

            <div className="row products-grid">
                {
                    product ?
                        product.slice( 0, 8 ).map( ( item, index ) => (
                            index === 0 ?
                                <React.Fragment key={ "Grid" + index }>
                                    <div className="height-xxl">
                                        <OwlCarousel adClass="product-slider dots-small" options={ { dots: true } }>
                                            {
                                                product && product.slice( 9, 12 ).map( ( item, index ) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon center-details"
                                                        product={ item }
                                                        key={ "product-one" + index }
                                                    />
                                                ) )
                                            }
                                        </OwlCarousel>
                                    </div>

                                    <div className="height-xl" key={ "product-one" + index }>
                                        <ProductOne
                                            adClass="inner-quickview inner-icon"
                                            product={ item }
                                        />
                                    </div>
                                </React.Fragment>
                                :
                                <div className="height-xl" key={ "product-one" + index }>
                                    <ProductOne
                                        adClass="inner-quickview inner-icon"
                                        product={ item }
                                    />
                                </div>

                        ) )
                        :
                        new Array( 8 ).fill( 1 ).map( ( item, index ) =>
                            index === 0 ?
                                <React.Fragment key={ "Grid" + index }>
                                    <div className="height-xxl">
                                        <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                    </div>

                                    <div className="height-xl">
                                        <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                    </div>
                                </React.Fragment>
                                :
                                <div className="height-xl" key={ "Grid" + index }>
                                    <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                </div>
                        )
                }
            </div>
        </section>
    );
}
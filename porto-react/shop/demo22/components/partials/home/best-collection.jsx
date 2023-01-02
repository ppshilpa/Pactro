import React from 'react';
import ProductFour from '../../features/products/product-four';

export default function BestCollection ( props ) {
    const { product } = props;

    return (
        <section className="best-sellers bg-gray">
            <div className="container">
                <h2 className="section-title ls-n-10 pb-3 m-b-4">Best Sellers on Electronics</h2>

                <div className="grid grid1">
                    <div className="grid-item height-x2">
                        {
                            product && product.slice( 0, 1 ).map( ( item, index ) => (
                                <ProductFour product={ item } key={ "Grid:", index } />
                            ) )
                        }
                    </div>

                    {
                        product && product.slice( 0, 6 ).map( ( item, index ) => (
                            <div className="grid-item height-x1" key={ "Grid:", index }>
                                <ProductFour product={ item } />
                            </div>
                        ) )
                    }
                </div>
            </div>
        </section>
    );
}
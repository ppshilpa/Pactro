import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

import { GET_PRODUCTS } from '../../../server/queries';

export default function LoadMoreProduct(props) {
    const { product = [], loading, perPage, total } = props;
    const [loadmore, { data, loading: ajaxLoading }] = useLazyQuery(GET_PRODUCTS);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(product);
    }, [product])

    useEffect(() => {
        if (data) {
            setProducts([...products, ...data.products.data]);
        }
    }, [data])

    function onLoadMoreProducts() {
        loadmore({
            variables: {
                from: products.length,
                to: products.length + 5
            }
        })
    }

    return (
        <div className="products-container bg-white text-center mb-2">
            <div className="row product-ajax-grid mb-2">
                {
                    loading ?
                        new Array(parseInt(perPage)).fill(1).map((item, index) =>
                            <div className="col-6 col-sm-4 col-md-3 col-xl-5col" key={`skel-pro-${index}`}>
                                <div className="skel-pro skel-pro-grid"></div>
                            </div>
                        )
                        :
                        products && products.map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-3 col-xl-5col" key={"product-one" + index}>
                                <ProductOne product={item} />
                            </div>
                        ))
                }
            </div>
            {
                total && products.length < total ?
                    <button className="btn btn-dark btn-md font1 loadmore mb-1" onClick={onLoadMoreProducts}>{ajaxLoading ? "Loading..." : "Load more..."}</button>
                    :
                    ''
            }
        </div>
    );
}
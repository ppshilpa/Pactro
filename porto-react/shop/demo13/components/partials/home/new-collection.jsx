// Import Custom Component
import ProductOne from '../../features/products/product-one';

export default function FeaturedCollection(props) {
    const { product, loading } = props;

    return (
        <>
            {
                loading ?
                    [0, 1, 2, 3, 4].map((item, index) =>
                        <div className="col-6 col-sm-4" key={"product-one" + index}>
                            <div className="skel-pro skel-pro-grid"></div>
                        </div>
                    )
                    :
                    product.map((item, index) => (
                        <div className="col-6 col-sm-4" key={"product-one" + index}>
                            <ProductOne
                                product={item} featured={true}
                            />
                        </div>
                    ))
            }
        </>

    );
}
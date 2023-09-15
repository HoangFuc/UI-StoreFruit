import React from "react";
import './ListProduct.scss';
import Product from "../Product/Product";

class ListProduct extends React.Component {
    render() {
        let { listProduct } = this.props;
        return (
            <>
                <div className="wrap">
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <>
                                    {console.log("check ", item)}
                                    <div className="listproduct" key={item.id}>
                                        <Product product={item} />
                                    </div>
                                </>
                            )
                        })}
                </div>
            </>
        )
    }
}

export default ListProduct;

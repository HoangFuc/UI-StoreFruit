import React from "react";
import './ListProduct.scss';
import Product from "../Product/Product";
import axios from 'axios';

class ListProduct extends React.Component {
    render() {
        let { listProduct } = this.props;
        return (
            <>
                {console.log("check data : ", listProduct)}
                {console.log("checkk data length : ", listProduct.length)}
                <div className="wrap">
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <div className="listproduct">
                                    <Product name={item.name} />
                                </div>
                            )
                        })}
                </div>
            </>
        )
    }
}

export default ListProduct;

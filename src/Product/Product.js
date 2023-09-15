import React from 'react';
import "./Product.scss";

class Product extends React.Component {
    render() {
        const { id, name, price, code, status } = this.props.product
        return (
            <>
                <div className='ava'>
                    <img className="product" src={require(`../assets/${name}.jpg`)} alt={name} />
                </div>
                <span className='name'>{name}</span>
                <button className='watch' type='button' onClick={() => window.location.href = `productdetail/${id}/${name}/${price}/${code}/${status}`}>Xem</button>
            </>
            //function de window.show ra 1 window chi tiet san pham
        )
    }
}

export default Product;

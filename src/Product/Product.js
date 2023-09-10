import React from 'react';
import "./Product.scss";

class Product extends React.Component {
    render() {
        const { name } = this.props
        return (
            <>
                <div className='ava'>
                    <img className="product" src={require(`../assets/${name}.jpg`)} alt={name} />
                </div>
                <span className='name'>{name}</span>
                <button className='watch'>Xem</button>
            </>
            //function de window.show ra 1 window chi tiet san pham
        )
    }
}


export default Product;

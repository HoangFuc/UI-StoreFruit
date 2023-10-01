import React from "react";

class Cart extends React.Component {
    render() {
        let { cart, handleAddCart } = this.props;

        return (
            <>
                {/* {cart.map((index, item) => {
                    <li>{item}</li>
                })} */}
                {console.log("check cart =>>>>", cart)}
                <button onClick={() => handleAddCart}>Button</button>
            </>
        )
    }
}

export default Cart;
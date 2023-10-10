import React from "react";
import './Cart.scss'
import Nav from "../Nav/Nav";
class Cart extends React.Component {
    state = {
        items: []
    }

    render() {
        return (
            <>
                <div className="topnav">
                    <Nav />
                </div>
                <h1>Cart</h1>
                <div className="body">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Quatity</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            {this.state.items.map((item, index) => {
                                <>
                                    <img src={require(`../assets/${item.name}.jpg`)} alt="product" />
                                    <td>{item.name}</td>
                                    <td>{item.quatity}</td>
                                    <td>{item.price}</td>
                                    <button>x</button>
                                </>
                            })}

                        </tr>

                    </table>
                </div>

            </>
        )
    }
}

export default Cart;
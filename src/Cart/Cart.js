import React from "react";
import './Cart.scss'
import Nav from "../Nav/Nav";
import axios from "axios";
import { toast } from "react-toastify";
class Cart extends React.Component {
    state = {
        items: []
    }
    componentDidMount = async () => {
        const res = await axios.get('http://localhost:3000/orders');
        this.setState({
            items: res.data && res ? res.data : []
        })
    }

    handleDelete = async (item) => {
        await axios.delete(`http://localhost:3000/order-details/${item}`, {
        })
            .then((data) => {
                window.location.href = 'http://localhost:3001/cart'
            })
            .catch((err) => {
                toast.error(err)
            })
        await axios.delete(`http://localhost:3000/orders/${item}`)
    }

    render() {
        const { items } = this.state;
        let total = 0
        return (
            <>
                <div className="topnav">
                    <Nav />
                </div>
                <h1>Cart</h1>
                <div className="body">
                    <table>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quatity</th>
                            <th>Price</th>
                        </tr>
                        {items.length > 0 && items.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <img src={require(`../assets/${item.name}.jpg`)} alt="product" />
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.total}</td>
                                        <button onClick={() => this.handleDelete(item.id)}>x</button>
                                    </tr>
                                </>
                            )
                        })}

                    </table>
                </div>

                <div className="footer">
                    <div className="total">
                        Total: <span>
                            {items.map((item, index) => {
                                total = total + item.total;
                            })}
                            {total} VND
                        </span>
                    </div>
                    <button onClick={() => window.location.href = 'http://localhost:3001/cart/order-details'}>Order</button>
                </div>
            </>
        )
    }
}

export default Cart;
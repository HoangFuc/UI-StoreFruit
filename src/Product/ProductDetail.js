import React from "react";
import Nav from "../Nav/Nav";
import '../Nav/Nav.scss'
import './ProductDetail.scss'
import withRouter from "../withRouter";
import { toast } from "react-toastify";
import axios from "axios";


class ProductDetail extends React.Component {
    state = {
        quality: 1
    }

    handleChangeQuality = (event) => {
        this.setState({
            quality: event.target.value
        })
    }

    handleSub = () => {
        this.setState({
            quality: this.state.quality - 1
        })
    }

    handleIncrea = () => {
        this.setState({
            quality: this.state.quality + 1
        })
    }

    render() {
        const { name, price, status, code } = this.props.router.params;
        let total = price * this.state.quality
        const check = this.props;
        const discount = 0;
        return (
            <>
                {console.log('check', check)}
                <div className="topnav">
                    <Nav />
                </div>
                <h1>Product Detail</h1>
                <div className="container">
                    <div className="image">
                        <img className="ava-product" src={require(`../assets/${name}.jpg`)} alt={name} />
                    </div>
                    <div className="infoproduct">
                        <h1>{name}</h1>
                        <div className="inputvalue">
                            <button onClick={this.handleSub}>-</button><input className="value" type="text" value={this.state.quality} onChange={(event) => this.handleChangeQuality(event)} /><button onClick={this.handleIncrea}>+</button>
                        </div>
                        <div className="status">
                            {status && status.length > 0 && status === "10ACTIVE"
                                ?
                                <p style={{ backgroundColor: "green" }}>Active</p>
                                :
                                <p style={{ backgroundColor: "red" }}>Sold Out</p>
                            }
                            <h2>Total: {total}</h2>
                        </div>
                        <button className="add" type="POST" disabled={status !== "10ACTIVE"} onClick={async () => {
                            await axios.post('http://localhost:3000/orders', {
                                'products': [
                                    {
                                        'code': code,
                                        'quantity': this.state.quality
                                    }
                                ],
                                'discount': discount,
                                'total': total,
                                'total_paid': total - discount,
                                'customer_id': 1
                            })
                                .then((data) => {
                                    toast.success('ADD CART SUCCESSFULLY');
                                })
                                .catch((err) => {
                                    console.log(err);
                                    toast.error(err)
                                })
                        }
                        }>Add Cart</button><br />
                        <button className="submit" disabled={status !== "10ACTIVE"}>Order</button>
                    </div>

                </div >
            </>
        )
    }
}

export default withRouter(ProductDetail);
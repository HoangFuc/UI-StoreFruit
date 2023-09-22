import React from "react";
import Nav from "../Nav/Nav";
import '../Nav/Nav.scss'
import './ProductDetail.scss'
import { toast } from 'react-toastify';
import withRouter from "../withRouter";

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

    handleAddCart = () => {
        toast.success("Nice")
    }

    render() {
        const { id, name, price, code, status } = this.props.router.params;
        let total = price * this.state.quality
        return (
            <>
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
                        <button className="add" disabled={status !== "10ACTIVE"} onClick={this.handleAddCart}>Add Cart</button><br />
                        <button className="submit" disabled={status !== "10ACTIVE"}>Order</button>
                    </div>

                </div >
            </>
        )
    }
}

export default withRouter(ProductDetail);
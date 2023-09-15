import React from "react";
import Nav from "../Nav/Nav";
import "./Home.scss";
import axios from "axios";
import ListProduct from "../ListProducts/ListProduct";

class Home extends React.Component {
    state = {
        listProduct: []
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:3000/products')
        this.setState({
            listProduct: res && res.data ? res.data : []
        })

    }
    render() {
        return (
            <>
                <div className="topnav">
                    <Nav />
                </div>
                <h1>Products</h1>
                <div className="body">
                    <ListProduct listProduct={this.state.listProduct} />
                </div>
            </>
        )
    }
}


export default Home;
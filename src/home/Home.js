import React from "react";
import Nav from "../Nav/Nav";
import "./Home.scss";
import axios from "axios";
import ListProduct from "../ListProducts/ListProduct";

class Home extends React.Component {
    state = {
        listProduct: [],
        check: localStorage.getItem('name'),
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:3000/products')
        this.setState({
            listProduct: res && res.data ? res.data : []
        })
    }



    render() {
        const { customer } = this.state
        if (this.state.check !== null)
            return (
                <>
                    {console.log(customer)}
                    {sessionStorage.getItem
                        ?
                        <>
                            <div className="topnav">
                                <Nav />
                            </div>
                            <h1>Products</h1>
                            <div className="body">
                                <ListProduct listProduct={this.state.listProduct} />
                            </div>
                        </>
                        :
                        window.location.href = '/'
                    }
                </>
            )
        else window.location.href = '/'
    }
}


export default Home;


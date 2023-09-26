import React from "react";
import Nav from "../Nav/Nav";
import "./Home.scss";
import axios from "axios";
import ListProduct from "../ListProducts/ListProduct";
import withRouter from "../withRouter";

class Home extends React.Component {
    state = {
        listProduct: [],
        check: localStorage.getItem('name')
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:3000/products')
        this.setState({
            listProduct: res && res.data ? res.data : []
        })

    }
    render() {
        let validate = this.props.router.params;
        if (this.state.check !== null)
            return (
                <>
                    {sessionStorage.getItem
                        ?
                        <>
                            <div className="topnav">
                                <Nav validate={validate} />
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


export default withRouter(Home);


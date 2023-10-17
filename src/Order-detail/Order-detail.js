import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

class OrderDetail extends React.Component {
    state = {
        items: []
    }
    componentDidMount = async () => {
        const res = await axios.get('http://localhost:3000/orders');
        this.setState({
            items: res && res.data ? res.data : []
        })
    }
    render() {
        const { items } = this.state
        console.log(items)
        return (
            <>
                <Container>
                    <div> a</div>
                </Container>
            </>
        )
    }
}


export default OrderDetail
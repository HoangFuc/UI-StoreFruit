import React from "react";
import axios from "axios";
import './Profile.scss'
import { Container } from "react-bootstrap";
import Nav from "../Nav/Nav";

class Profile extends React.Component {
    state = {
        customer: []
    }
    async componentDidMount() {
        let id = localStorage.getItem('id')
        await axios.get(`http://localhost:3000/customers/${id}`)
            .then((data) => {
                this.setState({
                    customer: data && data.data ? data.data : []
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const { customer } = this.state
        return (
            <>
                <div className="topnav">
                    <Nav />
                </div>
                <Container>
                    <div className="userProfile">
                        {
                            <>
                                <span>{customer.full_name}</span><br />
                                <span>{customer.birthday}</span><br />
                                <span>{customer.address}</span><br />
                                <span>{customer.email}</span><br />
                                <span>{customer.phone}</span>
                            </>
                        }
                    </div>
                    <div className="picture">
                        <img></img>
                    </div>
                </Container>
            </>
        )
    }
}

export default Profile;
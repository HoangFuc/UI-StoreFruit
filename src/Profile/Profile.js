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
                                <p>Full Name: <span>{customer.full_name}</span></p>
                                <p>Birthday: <span>{customer.birthday}</span></p>
                                <p>Address: <span>{customer.address}</span></p>
                                <p>Email: <span>{customer.email}</span></p>
                                <p>Phone: <span>{customer.phone}</span></p>
                            </>
                        }
                    </div>
                    <div className="picture">
                        <img className="profileavatar" src={require(`../assets/${localStorage.getItem('name')}.jpg`)} alt="avatar" type="button" />
                    </div>
                </Container>
            </>
        )
    }
}

export default Profile;
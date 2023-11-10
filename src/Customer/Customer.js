import React from "react";
import './Customer.scss'
import CloseButton from 'react-bootstrap/CloseButton';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import NavAdmin from "../NavAdmin/NavAdmin";
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";


class Customer extends React.Component {
    state = {
        customer: [],
        show: false,
        fullname: '',
        address: '',
        email: '',
        phone: ''
    }

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:3000/customers');
        this.setState({
            customer: res.data ? res.data : []
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleAddCustomer = async () => {
        await axios.post('http://localhost:3000/customers', {
            full_name: this.state.fullname,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email
        })
            .then((data) => {
                window.location.reload()
            })
            .catch((err) => toast.error(err))
    }

    deleteCustomer = async (id) => {
        await axios.delete(`http://localhost:3000/customers/${id}`)
            .then((data) => {
                window.location.reload()
            })
            .catch((err) => {
                toast.error(err)
            })
    }

    render() {
        const { customer, show } = this.state;
        return (
            <>
                {Number(localStorage.getItem('role')) === 1
                    ?
                    <>
                        <NavAdmin />
                        <Button className="button-add" variant="primary" onClick={() => { this.handleShow() }}>Add Customer</Button>{' '}
                        <Table className="table-data" striped="columns">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Full Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer && customer.map((item, index) => {
                                    return (
                                        <tr>
                                            <th>{item.id}</th>
                                            <th>{item.full_name}</th>
                                            <th>{item.address}</th>
                                            <th>{item.email}</th>
                                            <th>{item.phone}</th>
                                            <CloseButton onClick={(id) => this.deleteCustomer(item.id)} />
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                        <Modal
                            show={show}
                            onHide={() => this.handleClose()}
                            backdrop="static"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Add Customer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                        Full Name
                                    </InputGroup.Text>
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={(event) => {
                                            this.setState({
                                                fullname: event.target.value
                                            })
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                        Address
                                    </InputGroup.Text>
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={(event) => {
                                            this.setState({
                                                address: event.target.value
                                            })
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                        Email
                                    </InputGroup.Text>
                                    <Form.Control
                                        aria-label="Default"
                                        type="email"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={(event) => {
                                            this.setState({
                                                email: event.target.value
                                            })
                                        }}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                        Phone
                                    </InputGroup.Text>
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={(event) => {
                                            this.setState({
                                                phone: event.target.value
                                            })
                                        }}
                                    />
                                </InputGroup>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.handleClose()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => this.handleAddCustomer()}>Add</Button>
                            </Modal.Footer>
                        </Modal >
                    </>
                    :
                    ''
                }
            </>
        )
    }
}

export default Customer
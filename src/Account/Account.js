import React from "react";
import axios from "axios";
import NavAdmin from "../NavAdmin/NavAdmin";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { toast } from "react-toastify";

class Account extends React.Component {
    state = {
        account: [],
        show: false,
        username: '',
        password: '',
        customer_id: 0,
        role: 0
    }
    componentDidMount = async () => {
        const res = await axios.get('http://localhost:3000/accounts')
        this.setState({
            account: res.data ? res.data : []
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

    handleAddAccount = async () => {
        await axios.post('http://localhost:3000/accounts', {
            username: this.state.username,
            password: this.state.password,
            customer_id: Number(this.state.customer_id)
        })
            .then((data) => {
                window.location.reload()
            })
            .catch((err) => {
                toast.error(err)
            })
    }

    deleteAccount = async (id) => {
        await axios.delete(`http://localhost:3000/accounts/${id}`)
            .then((data) => {
                window.location.reload();
            })
            .catch((err) => {
                toast.error(err)
            })
    }

    render() {
        const { account, show } = this.state
        return (
            <>
                <NavAdmin />
                <Button className="button-add" variant="primary" onClick={() => { this.handleShow() }}>Add Account</Button>{' '}
                <Table className="table-data" striped="columns">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Create At</th>
                            <th>Update At</th>
                            <th>Username</th>
                            <th>Customer_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {account && account.map((item, index) => {
                            return (
                                <tr>
                                    <th>{item.id}</th>
                                    <th>{item.createAt}</th>
                                    <th>{item.updatedAt}</th>
                                    <th>{item.username}</th>
                                    <th>{item.customer_id}</th>
                                    <CloseButton onClick={(id) => this.deleteAccount(item.id)} />
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
                        <Modal.Title>Add Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Username
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    })
                                }}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Password
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                type="password"
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    })
                                }}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Customer_id
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(event) => {
                                    this.setState({
                                        customer_id: event.target.value
                                    })
                                }}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleAddAccount()}>Add</Button>
                    </Modal.Footer>
                </Modal >
            </>
        )
    }
}

export default Account;
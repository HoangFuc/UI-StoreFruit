import React from 'react';
import logo from './logo.jpg'
import "./Login.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        validate: false
    }
    handleInputUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    validateAccount = async () => {
        let data = await axios.post('http://localhost:3000/auth/login', {
            username: this.state.username,
            password: this.state.password
        })

        if (data.status === 200) {
            this.setState({
                validate: true
            })
        }
    }
    render() {
        let { validate } = this.state;
        return (
            <>
                <img src={logo} alt="Logo" />
                <div className='login'>
                    <input type='text' placeholder='Nhap ten tai khoan' onChange={(event) => this.handleInputUserName(event)}></input> <br />
                    <input type='password' placeholder='Nhap mat khau' onChange={(event) => this.handleInputPassword(event)}></input> <br />
                    <button type='button' onClick={() => this.validateAccount()}>Dang Nhap</button>
                    {validate && (< Navigate to="/home" />)}
                </div >
            </>
        )
    }
}


export default Login;
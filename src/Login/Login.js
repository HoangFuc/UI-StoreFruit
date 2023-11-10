import React from 'react';
import "./Login.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from "react-toastify";


class Login extends React.Component {
    state = {
        username: '',
        password: '',
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
        axios.post('http://localhost:3000/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then((data) => {
                localStorage.setItem('name', `${this.state.username}`);
                localStorage.setItem('id', `${data.data.userProfile.customer_id}`);
                localStorage.setItem('role', `${data.data.userProfile.role}`)
                if (Number(data.data.userProfile.role) === 0) { window.location.href = '/home' }
                else
                    window.location.href = '/admin/customer';
            }
            )
            .catch((err) => {
                toast.error("Invalid Username or Password");
            })
    }

    render() {
        return (
            <>
                {localStorage.removeItem('name')}
                {localStorage.removeItem('id')}
                <div className='login'>
                    <input type='text' placeholder='Nhap ten tai khoan' onChange={(event) => this.handleInputUserName(event)}></input> <br />
                    <input type='password' placeholder='Nhap mat khau' onChange={(event) => this.handleInputPassword(event)}></input> <br />
                    <button type='button' className="validatebutton" onClick={() => this.validateAccount()}>Login</button>
                </div >
            </>
        )
    }
}


export default Login;
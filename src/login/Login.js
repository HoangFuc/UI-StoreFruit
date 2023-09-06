import React from 'react';
import logo from './logo.jpg'
import "./Login.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Login extends React.Component {
    state = {
        username: '',
        password: ''
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
        let user = await axios.get("http://localhost:3000/accounts");
        console.log(this.state.username);
        console.log(user.data.username);
    }
    render() {
        return (
            <>
                <img src={logo} alt="Logo" />
                <div className='login'>
                    <input type='text' placeholder='Nhap ten tai khoan' onChange={(event) => this.handleInputUserName(event)}></input> <br />
                    <input type='password' placeholder='Nhap mat khau' onChange={(event) => this.handleInputPassword(event)}></input> <br />
                    <button type='button' onClick={this.validateAccount()}>Dang Nhap</button>
                </div >
            </>
        )
    }
}


export default Login;
import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss"

class Nav extends React.Component {

    handleShow = () => {
        return (
            <ul>
                <li>
                    a
                </li>
                <li>
                    b
                </li>
            </ul>
        )
    }

    render() {
        let { validate } = this.props;
        return (
            <>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/abc" activeClassName="active" >A</NavLink>
                <NavLink to="/xys" activeClassName="active">B</NavLink>
                <NavLink to="/z" activeClassName="active">C</NavLink>
                {validate.validate == "true"
                    ?
                    <nav id="login">
                        <img src={require(`../assets/Phuc.jpg`)} type="button" onClick={() => this.handleShow()} />
                    </nav>
                    :
                    <nav id="login">
                        <NavLink to="/login" activeClassName="active">Login</NavLink>
                    </nav>
                }
            </>
        )
    }
}

export default Nav;
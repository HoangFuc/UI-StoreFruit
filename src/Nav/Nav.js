import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss"

class Nav extends React.Component {
    render() {
        let validate = this.props.validate;
        console.log("check validate ", validate)
        return (
            <>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/abc" activeClassName="active" >A</NavLink>
                <NavLink to="/xys" activeClassName="active">B</NavLink>
                <NavLink to="/z" activeClassName="active">C</NavLink>
                {validate && validate.length > 0
                    ?
                    <div>a</div>
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
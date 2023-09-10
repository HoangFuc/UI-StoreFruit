import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss"

class Nav extends React.Component {
    render() {
        return (
            <>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/abc" activeClassName="active" >A</NavLink>
                <NavLink to="/xys" activeClassName="active">B</NavLink>
                <NavLink to="/z" activeClassName="active">C</NavLink>
            </>
        )
    }
}



export default Nav;
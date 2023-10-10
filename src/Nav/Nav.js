import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss"


class Nav extends React.Component {
    state = {
        open: false
    }
    handleOpen = () => {
        if (this.state.open === true) this.setState({ open: false });
        if (this.state.open === false) this.setState({ open: true });
    }
    render() {
        let { open } = this.state
        return (
            <>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/abc" activeClassName="active" >A</NavLink>
                <NavLink to="/xys" activeClassName="active">B</NavLink>
                <nav id="login">
                    <img src={require(`../assets/Phuc.jpg`)} alt="avatar" type="button" onClick={() => this.handleOpen()} />
                    {open && <DropDownMenu />}
                </nav>
                <NavLink to="/cart" activeClassName="active" style={{ float: "right" }}>Cart</NavLink>
            </>
        )
    }
}

export default Nav;

const DropDownMenu = () => {
    return (
        <div className="dropDownProfile">
            <ul className="choise">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/" onClick={() => {
                    localStorage.removeItem('name')
                }}>Sign Out</a></li>
            </ul>
        </div>
    )
}
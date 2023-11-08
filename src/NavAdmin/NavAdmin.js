import React from "react";
import Nav from 'react-bootstrap/Nav';

class NavAdmin extends React.Component {
    render() {
        return (
            <Nav fill variant="tabs" defaultActiveKey="/admin/customer">
                <Nav.Item>
                    <Nav.Link href="/admin/customer">List Customer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href='/admin/account'>List Accounts</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavAdmin;
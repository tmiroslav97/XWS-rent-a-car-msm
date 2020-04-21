import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { history } from '../index';

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={() => { history.push('/') }}>Reant A Car</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link  onClick={() => { history.push('/') }}>Home</Nav.Link>
                   
                </Nav>
                <Nav className="ml-auto">
                    
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
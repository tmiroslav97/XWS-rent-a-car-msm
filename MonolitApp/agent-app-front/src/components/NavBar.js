import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, } from 'react-bootstrap';
import { history } from '../index';
import { tokenSelector } from '../store/user/selectors';

const NavBar = () => {
    const token = useSelector(tokenSelector);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={() => { history.push('/') }}>Reant A Car</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => { history.push('/') }}>Home</Nav.Link>

                </Nav>
                <Nav className="ml-auto">
                    {token == null && <Nav.Link href="#" onClick={() => { history.push('/login') }}>Login</Nav.Link>}
                    {token == null && <Nav.Link href="#" onClick={() => { history.push('/reg') }}>Sign up</Nav.Link>}
                    {token != null && <Nav.Link href="#" onClick={() =>  handleSignOut()}>Sign out</Nav.Link>}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
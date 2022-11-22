import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    let activeStyle = {
        color: 'blue',
        fontWeight: 'bold'
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="home">Navbar</Navbar.Brand>
                    <Nav className="me-auto custom-nav">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to='/'>Home</NavLink>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to='/services'>Services</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
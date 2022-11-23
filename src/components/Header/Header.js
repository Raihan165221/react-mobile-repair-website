import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    let activeStyle = {
        color: '#03fff3',
        fontWeight: 'bold'
    };
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon> Solve-It</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto custom-nav">
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/'>Home</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/services'>Services</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/about'>About</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/contact'>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;






{/* <Navbar bg="dark" variant="dark">
<Container>
    <Navbar.Brand to="home">Navbar</Navbar.Brand>
    <Nav className="me-auto custom-nav">
        
    </Nav>
</Container>
</Navbar> */}
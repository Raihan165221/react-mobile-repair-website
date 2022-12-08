import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from "react-router-dom";
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    let activeStyle = {
        color: '#03fff3',
    };
    return (
        <div>
            <Navbar className='custom-container' fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                            {
                                user ?
                                    <div>
                                        <span className='text-secondary user-name ms-4'>{user.displayName}</span>
                                        <NavLink style={{ border: '1px solid red' }} className="text-danger px-3 w-25 text-center" onClick={handleSignOut}>Sign Out</NavLink>
                                    </div>
                                    :
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to='/login'>Log In</NavLink>
                            }
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
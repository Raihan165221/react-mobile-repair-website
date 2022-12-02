
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='w-75 pt-5 mt-5 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <h2 className='text-center mb-5'>Log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-grid'>
                    {
                        loading && <Spinner animation="border" variant="dark" size='sm' />
                    }
                    <p className='text-danger'>{error?.message}</p>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </div>

            </Form>
            <div className='w-75 mx-auto text-center mb-4'>
                <p className='text-center mt-4'>New to Fix-It? <Link to='/signup'>Create New Account</Link></p>
                <p>--------or--------</p>
                <Button onClick={handleGoogleSignIn} variant='warning' size='lg'>Sign In With Google</Button>
            </div>
        </div>
    );
};

export default LogIn;
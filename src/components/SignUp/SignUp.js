import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/services');
    }
    const handleCreateAccount = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password Must be 6 Character or long.');
            return;
        }
        if (password.length < 6) {
            setError('Your Two Passwords Did Not Matched! Try Again.');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='w-75 pt-5 mt-5 mx-auto'>
            <Form onSubmit={handleCreateAccount}>
                <h2 className='text-center mb-5'>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <div className="d-grid">
                    <p className='text-danger'>{error}</p>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </div>
                {/* <input type="submit" value="submit" /> */}
            </Form>
            <div className='w-75 mx-auto text-center mb-4'>
                <p className='text-center mt-4'>Already have an Account? <Link to='/login'> Please Log In</Link></p>
                <p>--------or--------</p>
                <Button variant='warning' size='lg'>Sign In With Google</Button>
            </div>
        </div>
    );
};

export default SignUp;
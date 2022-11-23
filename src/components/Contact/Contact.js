import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope, faLocation, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='mt-5 bg-dark text-light'>
            <div className='text-center pb-5'>
                <h1>Contact Us</h1>
                <p>Here you will find my contact details. You can knock me, I <br /> will respond as soon as possible.</p>
            </div>
            <div className='text-center w-75 mx-auto pb-5'>
                <Row lg={3} md={2} xs={1}>
                    <Col>
                        <h1><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h1>
                        <h3>Call Us</h3>
                        <p>+88019900999099</p>
                    </Col>
                    <Col>
                        <h1><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></h1>
                        <h3>Email Us</h3>
                        <p>fixit@gmail.com</p>
                    </Col>
                    <Col>
                        <h1><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon></h1>
                        <h3>Visit Our Office</h3>
                        <p>Level-4, Gulshan, Dhaka</p>
                    </Col>
                </Row>
            </div>
            <div className='w-75 mx-auto mt-5'>
                <Form>
                    <Row xs={1} md={2} className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Your Name*</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Your Email*</Form.Label>
                            <Form.Control type="password" placeholder="Enter Your Email" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Subject*</Form.Label>
                        <Form.Control placeholder="Your Subject..." />
                    </Form.Group>
                    <Form.Label>Your Message*</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">

                        <Form.Control
                            as="textarea"
                            placeholder="Send a Message. . ."
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Button className='mt-3' variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-dark text-light p-5'>
            <Row className='ms-5 g-5' md={2} lg={3} xs={1}>
                <Col>
                    <h1><FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon> Solve-It</h1>
                    <p>© Designed & Developed By Raihan</p>
                </Col>
                <Col>
                    <p><FontAwesomeIcon className='me-2 text-danger' size='lg' icon={faLocationDot}></FontAwesomeIcon>Level-4, Gulshan, Dhaka</p>
                    <p><FontAwesomeIcon className='me-2 text-danger' size='lg' icon={faPhone}></FontAwesomeIcon> +9999999999</p>
                    <p><FontAwesomeIcon className='me-2 text-danger' size='lg' icon={faEnvelope}></FontAwesomeIcon> fixit123@gmail.com</p>
                </Col>
                <Col>
                    <h3>About Us</h3>
                    <p>we have a powerful community.we provides all things for out customers.</p>
                    <h1><FontAwesomeIcon className='me-4' icon={faEnvelope}></FontAwesomeIcon> <FontAwesomeIcon className='me-4' icon={faUser}></FontAwesomeIcon> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h1>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
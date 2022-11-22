import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setHomeServices(data.slice(0, 2)));
    }, []);
    return (
        <div>
            <h1 className='mt-5 text-center'>Get Your Repair Started</h1>
            <Row xs={1} md={2} className="g-4 w-75 mx-auto my-5">
                {
                    homeServices.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            <Row className='bg-success p-5 w-75 mx-auto rounded text-light' xs={1} md={2}>
                <Col className='col-12'>
                    <h2>Are You Intersted to see our all Services?</h2>
                    <h5>Click All Services</h5>
                </Col>
                <Col className='text-center mt-4'>
                    <NavLink to='/services'><Button variant='dark' size='lg'>All Services</Button></NavLink>
                </Col>
            </Row>
        </div>
    );
};

export default HomeServices;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = ({ service }) => {
    const { name, title, img } = service;
    // console.log(service)
    return (
        <Col>
            <Card className='custom-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
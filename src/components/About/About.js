import React from 'react';
import { Card, Col } from 'react-bootstrap';

const About = ({ about }) => {
    const { honorarium, name, designation, gender } = about;
    return (
        <Col>
            <Card className='bg-primary text-light text-center'>
                <Card.Img variant="top" style={{ width: '200px', borderRadius: '50%', margin: '18px auto' }} src={about.picture} />
                <Card.Body>
                    <Card.Title>{about.name}</Card.Title>
                    <Card.Text>
                        <h6>Gender: {gender}</h6>
                        {designation}
                        <p>Salary Per Month: ${about.honorarium}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default About;
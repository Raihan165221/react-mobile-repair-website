import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import About from '../About/About';

const Abouts = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch('./abouts.json')
            .then(res => res.json())
            .then(data => setAbouts(data))
    }, [])
    return (
        <div className='mt-5'>
            <div className='w-75 text-center mx-auto'>
                <h1 className='pt-4'>About Us</h1>
                <p style={{ fontSize: '20px' }}>We are all every different. We were born in different cities, But we have something that unites us all. It is Our Company.We are it's heart.We are not just a team, We are a family.</p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 m-5">
                {
                    abouts.map(about => <About key={about.key} about={about}></About>)
                }
            </Row>
        </div>
    );
};

export default Abouts;
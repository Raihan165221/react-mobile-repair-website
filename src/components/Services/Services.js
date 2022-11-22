
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='text-center'>
            <h1>Our Services</h1>
            <div className='mt-5 w-50 mx-auto'>
                <h2>Get Your Repair Started</h2>
                <p>Explore new ways to see what's working and fix what's not. Vivamus sed finibus nulla. Suspendisse ac ex sed sem consequat pellentesque ain nulla.</p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 w-75 mx-auto my-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;
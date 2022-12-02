import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div id='banner-img' className='d-flex align-items-center justify-content-center flex-column'>
            <h1>We are fixing all Electric Device problems</h1>
            <p>If you face any problem, you can visit our website.</p>
            <Link to='/services'>Hire Us</Link>
        </div>
    );
};

export default Banner;
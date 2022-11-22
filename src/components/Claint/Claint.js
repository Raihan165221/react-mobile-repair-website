import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Claint.css';
const Claint = ({ claint }) => {
    const { name, img, said, rating } = claint;
    return (

        <div className='w-75 mx-auto text-center claint-card'>
            <img className='mx-auto' src={img} alt="" />
            <h2>{name}</h2>
            <p>{said}</p>
            <p className='text-danger'>Ratings: {rating}</p>
        </div >

    );
};

export default Claint;
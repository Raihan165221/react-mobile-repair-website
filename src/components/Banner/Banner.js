import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className=' pt-5' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='banner-img'>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcmVwYWlyJTIwYmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='banner-img'>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1312330553/photo/circuit-board-processing-information.jpg?b=1&s=170667a&w=0&k=20&c=xyI2GOeLoOLjH02-HwgSejXQWHZG6doST1L-TNs3EkM="
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='banner-img'>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGFibGV0JTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;



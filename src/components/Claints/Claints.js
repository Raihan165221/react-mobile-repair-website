import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Claint from '../Claint/Claint';
import './Claints.css';
const Claints = () => {
    const [claints, setClaints] = useState([]);
    useEffect(() => {
        fetch('./claints.json')
            .then(res => res.json())
            .then(data => setClaints(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='text-center my-5 all-claints'>
            <h1 className='my-5'>Happy Claint Says</h1>
            <Slider {...settings}>
                {
                    claints.map(claint => <Claint key={claint.id} claint={claint}></Claint>)
                }
            </Slider>
        </div>
    );
};

export default Claints;
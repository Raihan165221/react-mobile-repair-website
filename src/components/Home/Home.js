import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Claints from '../Claints/Claints';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css'
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Claints></Claints>
        </div>
    );
};

export default Home;
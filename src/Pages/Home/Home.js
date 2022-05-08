import React from 'react';
import Carusel from '../Carusel/Carusel';
import Section1 from '../Sections/Section1/Section1';
// import Section2 from '../Sections/Section2/Section2';
import StockCar from '../StockCar/StockCar';

const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <StockCar></StockCar>
            {/* <Section2></Section2> */}
            <Section1></Section1>
        </div>
    );
};

export default Home;
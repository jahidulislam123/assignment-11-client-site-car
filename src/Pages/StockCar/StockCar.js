import React, { useEffect, useState } from 'react';
import StockCars from '../StockCars/StockCars';
import './StockCar.css'

const StockCar = () => {
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div className=''>
            <h2>The amount of Brands : {cars.length}</h2>
            <div className='container-grid'>
                {
                    cars.slice(0,6).map(car=><StockCars
                    key={car._id}
                    car={car}
                    
                    ></StockCars>)
                }
            </div>
            
        </div>
    );
};

export default StockCar;
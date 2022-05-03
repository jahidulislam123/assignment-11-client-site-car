import React, { useEffect, useState } from 'react';
import StockCars from '../StockCars/StockCars';
import './StockCar.css'

const StockCar = () => {
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch('stockCar.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <h2>The amount of Brands : {cars.length}</h2>
            <div className='container-grid'>
                {
                    cars.map(car=><StockCars
                    key={car._id}
                    car={car}
                    
                    ></StockCars>)
                }
            </div>
            
        </div>
    );
};

export default StockCar;
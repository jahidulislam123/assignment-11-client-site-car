import React from 'react';
import './StockCars.css'

const StockCars = ({car}) => {
    
    const{img,name,quantity,description,price}=car;
    const text=description.slice(0,75);
    return (
        <div className='car-container'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Quantity: {quantity}</h4>
            <p>{text}</p>
            <button className='button'>Update</button>
            
        </div>
    );
};

export default StockCars;
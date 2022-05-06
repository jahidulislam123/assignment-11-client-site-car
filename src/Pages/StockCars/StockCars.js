import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StockCars.css'

const StockCars = ({car}) => {
    
    const navigate =useNavigate();
    
    const{_id,img,name,quantity,description,price}=car;
    const text=description.slice(0,75);
    const navigateToCarsDetails=_id=>{
        navigate(`/carDetails/${_id}`);
    }
    return (
        <div className='car-container'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Quantity: {quantity}</h4>
            <p>{text}</p>
            <button onClick={()=>navigateToCarsDetails(_id)} className='button'>Update</button>
            
        </div>
    );
};

export default StockCars;
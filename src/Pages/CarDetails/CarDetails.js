import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CarDetails.css'

const CarDetails = () => {
    const {carDetailsId}=useParams();
    const [cars,setCars]=useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/car/${carDetailsId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    const navigate =useNavigate()
    
    const handleMangeInventory=()=>{
        navigate('/manageInventory')


    }
    
    return (
        <div className='hole-container'>
            <div className='container mx-auto individual-car'>
            <img src={cars.img
            } alt="" />
         <h2>name: {cars.name}</h2>
         <h3>Price : {cars.price}</h3>
         <h4>Quantity: {cars.quantity}</h4>
         <h4>Supplier : {cars.supliar}</h4>
         <p>{cars.description}</p>
         <button onClick={handleMangeInventory}>Manage Inventory</button>

        
         
        </div>
        </div>
        
    );
};

export default CarDetails;
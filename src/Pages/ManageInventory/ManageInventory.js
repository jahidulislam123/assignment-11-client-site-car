import { faHourglass2 } from '@fortawesome/free-regular-svg-icons';
import { linkWithCredential } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInventory.css'


const ManageInventory = () => {
    const [cars,setCars2]=useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-server-site-red.vercel.app/cars')
        .then(res=>res.json())
        .then(data=>setCars2(data))
    },[])
    return (
        <div>
            
                <h2>there are {cars.length} Car</h2>
                <div className='container-grid'>
                    {
                        cars.map(car=> <div className='container car-container'>
                            <div><img src={car.img} alt="" /></div>
                            <div>
                                <h2>{car.name}</h2>
                            </div>
                            <div>
                                <h2>Suppliar :{car.supliar}</h2>
                            </div>
                            <div>
                                <h2>Price:{car.price}</h2>
                            </div>
                            <div>
                                <h2>Quantity{car.quantity}</h2>
                            </div>
                            <div>
                                <p>{car.description.slice(0,100)}</p>
                            </div>
                            <div className='d-flex btn-design ms-2'>
                                <Link to='/addItem'> <button className='btn-add'>Add Item</button> </Link>
                                <Link to='/myItem'> <button className='btn-add'>My Item</button> </Link>
                           
                                </div>
                             

                            </div>)
                    }
                </div>
        
            
            
        </div>
    );
};

export default ManageInventory;
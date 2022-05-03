import React from 'react';

const StockCars = ({car}) => {
    const{img,name,quantity,description,price}=car;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Quantity: {quantity}</h4>
            <p>{description}</p>
            
        </div>
    );
};

export default StockCars;
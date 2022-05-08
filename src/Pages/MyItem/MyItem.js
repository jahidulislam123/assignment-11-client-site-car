import React, { useEffect, useState } from 'react';

const MyItem = () => {
    const [myItems,setMyItem]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setMyItem(data));
    },[])

    const handleDelete =id=>{
        const procced=window.confirm('Are you sure you want to delete ?');
        if(procced){
            const url =`http://localhost:5000/car/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining =myItems.filter(items =>items._id!==id);
                setMyItem(remaining);
            })
        }

    }
    return (
        <div className='container-grid'>
            
            {
                myItems.slice(13,100).map(item=><div className='container car-container'>

                    <img src={item.img} alt="" />
                    <h2>Name: {item.name}</h2>
                    <h3>Suppliar : {item.supliar}</h3>
                    <h3>Price : {item.price}</h3>
                    <h4>Quantity: {item.quantity}</h4>
                    <p>{item.description}</p>

                    <div className='btn-design'>
                    <button onClick={()=>handleDelete(item._id)} className='btn-add'>Delete Item</button> 


                    </div>
                </div>)
            }
            
          


         
        </div>
    );
};

export default MyItem;
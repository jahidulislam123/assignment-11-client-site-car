import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CarDetails.css'

const CarDetails = () => {
    const {carDetailsId}=useParams();
    const [cars,setCars]=useState({});
    
    const [isReload,setReload] = useState(false);
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
    



    

    // delivered 
    const deliverHandle =(e)=>{
        // console.log(carDetailsId);
        const quantity =cars?.quantity;
        // console.log(quantity);
        const updateDeliver ={quantity};
        const url2 =`http://localhost:5000/car/${carDetailsId}`;
        console.log(url2);
        fetch(url2,{
            method:"PUT",
            headers:{
                'Content-type':'application/json',

            },
            body: JSON.stringify(updateDeliver),

        })
        .then(Response =>Response.json())
        .then(data=>{
            setReload(!isReload)
            
            console.log(data);
            window.location.reload(false);
            
            
        })
    }



    const handleSubmit = e =>{
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity)+parseInt(cars?.quantity)
        console.log(newQuantity);
        const updateQuantity= {newQuantity};
        if(!quantity){
            alert("added")
        }
        else{
            const url=`http://localhost:5000/car/${carDetailsId}`
            fetch(url,{
                method:"PUT",
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updateQuantity),

            })
            .then(response => response.json())
            .then(data => {
                setReload(!isReload);
            console.log('Success:', data);
            })
        }

    }

    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     const quantity =e.target.quantity.value;
    //     const newQuantity =parseInt(quantity)+parseInt(cars?.quantity);
    //     // console.log(newQuantity);
    //     const updateQuantity ={newQuantity};
    //     if(!quantity){
    //         alert('added');
    //     }
    //     else{
    //         const url =`http://localhost:5000/car/${carDetailsId}`
    //         console.log(url);
    //         fetch(url,{
    //             method:'PUT',
    //             headers:{
    //                 'Content-Type':'application/json',
    //             },
    //             body :JSON.stringify(updateQuantity),
    //         })
    //         .then(res=>res.json())
    //         .then(result=>{
    //             setReload(!isReload)
    //             // console.log(result)
    //             // window.location.reload(false)
    //         })
    //     }

    // }


    // delivered

   
    
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
         <button className='manage-inventory-button' onClick={handleMangeInventory}>Manage Inventory</button>



        <div>
        <button onClick={()=>deliverHandle(cars._id)} className="btn btn-outline-dark mt-4 fw-bolder fs-6 px-5 py-2 m-auto" type="submit"> Delivered</button> 
        </div>

        <div class="mb-3 ms-5 ps-5 mt-4">
                        
                        <form onSubmit={handleSubmit}>
                        <input type="text" name='quantity' class="form-control" placeholder='Add Quantity' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <input className='btn btn-outline-dark mt-4 fw-bolder px-3 py-1 m-auto' type="submit" value="submit" />
                        </form>  
                     
                     {/* <button className="btn btn-outline-dark mt-4 fw-bolder px-3 py-1 m-auto" type="submit"> Restock  </button>  */}
                     </div>



         </div>  
        </div>
    );
};

export default CarDetails;
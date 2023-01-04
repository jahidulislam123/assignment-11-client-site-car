import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        

        console.log(data);
        const url =`https://assignment-11-server-site-red.vercel.app/cars`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })

    };
    return (

        <div className='w-50 mt-5 mb-5 mx-auto'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
      <input className='mb-2' placeholder='Supplier' type="text" {...register("supliar")} />
      <input className='mb-2' placeholder='photoUrl' type="text" {...register("img")} />
      <input value="Add newCar" type="submit" />
    </form>
        </div>
    );
};

export default AddItem;
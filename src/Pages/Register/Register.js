import React, { useState } from 'react';
import './Register.css'

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';
import Loading from '../Loading/Loading';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

const Register = () => {
    const [agree,setAgree]=useState(false);
    const navigate =useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateLogin =()=>{
        Navigate('/login')
    }
    if(loading){
        return <Loading></Loading>
    }

    const handleRegister =async(event)=>{
        event.preventDefault();
        const name =event.target.name.value;
        const email=event.target.email.value;
        const password =event.target.password.value;
        console.log(name,email,password);
        if(email,password){
            
            toast("sent a verification email");
          await  createUserWithEmailAndPassword(email,password);
          await updateProfile({ displayName:name });
        //   alert('Updated profile');
            navigate('/login');
        }
               
        
       
         
         
    }



    return (
        <div className='container register-container'>
           <div className='register-form'>
               <h2 style={{textAlign:'center'}}>Please Registration</h2>
               <form onSubmit={handleRegister}>
                   <input type="text" name="name" id="" placeholder='Your Name '/> <br />
                   <input type="email" name="email" id="" placeholder='Your Email ' /> <br />
                   <input type="password" name="password" id="" placeholder='Your Password'/> <br />  
                   <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                   <label className={`ps-2 ${agree?'':'text-danger'}`}  >Accept genious Terms and conditions</label>
                   <input 
                   disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-2'
                 type="submit"
                  value="register"
                  
                  />
                     
               </form>
               <p>
          Already have an account?  <Link to="/login" className='text-danger  pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link>
          </p>
          <SocialMediaLogin></SocialMediaLogin>
                
           </div>

            
        </div>
    );
};

export default Register;
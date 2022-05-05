import React from 'react';
import './Register.css'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigateLogin =()=>{
        Navigate('/login')
    }

    const handleRegister =(event)=>{
        event.preventDefault();
        const name =event.target.name.value;
        const email=event.target.email.value;
        const password =event.target.password.value;
        console.log(name,email,password);
         createUserWithEmailAndPassword(email,password);
    }



    return (
        <div className='container register-container'>
           <div className='register-form'>
               <h2 style={{textAlign:'center'}}>Please Registration</h2>
               <form onSubmit={handleRegister}>
                   <input type="text" name="name" id="" placeholder='Your Name '/> <br />
                   <input type="email" name="email" id="" placeholder='Your Email ' /> <br />
                   <input type="password" name="password" id="" placeholder='Your Password'/> <br />
                    
                   <input 
                className='w-50 mx-auto btn btn-primary mt-2'
                 type="submit"
                  value="register"
                  
                  />
                     
               </form>
               <p>
          Already have an account?  <Link to="/login" className='text-danger  pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link>
          </p>
                
           </div>

            
        </div>
    );
};

export default Register;
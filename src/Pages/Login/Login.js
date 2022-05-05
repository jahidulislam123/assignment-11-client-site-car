import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, NavigationType } from 'react-router-dom';


const Login = () => {
    const emailRef =useRef('');
    const passwordRef=useRef('');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit =event=>{

        event.preventDefault();
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
    }
    const navigateRegister =event=>{
        Navigate('/register');
    }

    return (
        <div className='container register-container w-50 mx-auto'>
            <h2 className='text-black mt-2 text-center'>Please Login</h2>
           <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
</Form>
<p>If you are new <Link to='/register' className='text-black pe-auto text-decoration-none ' onClick={navigateRegister} >Please Register</Link></p>
            
        </div>
    );
};

export default Login;
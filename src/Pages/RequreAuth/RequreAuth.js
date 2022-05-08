import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequreAuth = ({children}) => {
    const [user,loading]=useAuthState(auth);
    const location =useLocation();
    const [sendEmailVerification,sending,error]=useSendEmailVerification(auth);
    if(loading){
        <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login " state={{ from: location }} replace/>
    }
    // if(user.providerData[0]?.providerId=='password' && !user.emailVerified){
    //     return <div className='text-center mt-5'>
    //         <h3 className='text-danger'>Your Email Is not Verified</h3>
    //         <h5 className='text-success'>Please verify your email address</h5>
    //         <button className='btn btn-primary'
    //         onClick={async()=>{
    //             await sendEmailVerification();
    //             toast('sent email')
    //         }}
    //         >
    //             Verify Email

    //         </button>
            <ToastContainer></ToastContainer>
        // </div>
    // }
    return children;
};

export default RequreAuth;
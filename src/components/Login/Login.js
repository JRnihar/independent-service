import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import './Login_module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigateRegister = (e) => {
        navigate('/register')
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const pasword = passwordRef.current.value
        signInWithEmailAndPassword(email, pasword);

    }


    return (
        <div>
            <section>
                <div class="container py-5">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="img-fluid" alt="Phone image" />
                        </div>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={handelSubmit}>

                                <div class="form-outline mb-4">
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        id="form1Example13"
                                        class="form-control form-control-lg"
                                        placeholder='Your Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>


                                <div class="form-outline mb-4">
                                    <input ref={passwordRef} type="password" id="form1Example23" class="form-control form-control-lg" placeholder='Your Password' required />
                                </div>

                                <div class="  mb-4">
                                    <p>Do not have an account?<span onClick={navigateRegister} className=' btn btn-link'>Please Register</span></p>
                                    <button className=' btn btn-link' onClick={async () => {
                                        await sendPasswordResetEmail(email);
                                        toast('Sent email');
                                    }} >Forgot password?</button>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block me-3">Sign in</button>

                                <p className='mt-3'> {errorElement}</p>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <p class="text-center fw-bold mx-3 mb-0 text-muted mb-5">OR</p>
            <div className='d-flex align-items-center justify-content-center mb-5'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
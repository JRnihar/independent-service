import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate()
    let errorElement;

    if (loading||loading1) {
        return <Loading></Loading>
    }

    if (error ||error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} </p>
    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} class="btn btn-outline-primary btn-lg btn-block me-3 mb-3" >
                <i class="fab fa-google me-2" style={{ backgroundColor: '#3b599' }}></i>Continue with Google
            </button>
            <button onClick={() => signInWithGithub()} class="btn btn-outline-primary btn-lg btn-block mb-3" >
                <i class="fab fa-github me-2"></i>Continue with Github</button>
        </div>
    );
};

export default SocialLogin;
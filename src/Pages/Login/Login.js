import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading />
    }


    return (
        <div className='h-screen  flex justify-center items-center'>
            <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Login with Google</button>
        </div>
    )
};

export default Login;
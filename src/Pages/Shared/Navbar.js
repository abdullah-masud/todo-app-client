import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">To Do App</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end">
                <Link to='/home' className="btn btn-outline mr-2">Home</Link>
                {
                    user ?
                        <Link to='/login' onClick={logout} className="btn">Logout</Link>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div >
    );
};

export default Navbar;
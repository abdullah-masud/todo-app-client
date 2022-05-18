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
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">To Do App</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
            </div>
            <div class="navbar-end">
                <Link to='/home' class="btn btn-outline mr-2">Home</Link>
                {
                    user ?
                        <Link to='/login' onClick={logout} class="btn">Logout</Link>
                        :
                        <Link to='/login' class="btn">Login</Link>
                }
            </div>
        </div >
    );
};

export default Navbar;
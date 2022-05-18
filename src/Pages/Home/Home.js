import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen  flex justify-center items-center'>
            <Link className='btn btn-outline mr-2' to='/todos'>To Do App</Link>
        </div >

    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-popins bg-base-200'>
            <header className='py-5 w-9/12 mx-auto'>
            <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;
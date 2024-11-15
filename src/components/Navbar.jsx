import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="login flex gap-4">
                <button><img src={userImg} alt="" /></button>
                <Link to='/auth/login'><button className='btn btn-neutral rounded-none w-32 text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;
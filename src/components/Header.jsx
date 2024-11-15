import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='flex flex-col py-2 justify-center items-center mx-auto gap-4'>
            <div className='logo'>
                <img className='w-[24rem]' src={logo} alt="" />
            </div>
                <p className='text-slate-500 '>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;
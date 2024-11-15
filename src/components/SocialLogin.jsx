import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login with</h2>
            <div className="flex flex-col gap-4">
                <button className='btn bg-white rounded-md border-blue-400 w-full flex gap-2'><FcGoogle className='text-xl' />Login with Google</button>
                <button className='btn bg-white rounded-md border-black w-full flex gap-2'><FaGithub className='text-xl' />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
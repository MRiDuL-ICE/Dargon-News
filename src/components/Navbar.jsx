import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h2>{user && user.email}</h2>
      </div>
      <div className="nav flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-4">
        <button className="rounded-full">
          <img className="rounded-full" src={userImg} alt="" />
        </button>
        {user && user?.email ? (
          <Link onClick={signoutUser} to="/auth/login">
            <button className="btn btn-neutral rounded-none w-32 text-white">
              Logout
            </button>
          </Link>
        ) : (
          <Link  to="/auth/login">
            <button className="btn btn-neutral rounded-none w-32 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

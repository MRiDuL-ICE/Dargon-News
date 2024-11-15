import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="my-8">
      <h2 className="font-semibold">Find Us On</h2>
      <div className="join join-vertical rounded-sm text-left justify-start w-full my-4">
        <button className="flex gap-2 btn justify-start items-center border  text-blue-700 border-slate-200 h-16 p-4 rounded-sm rounded-t-md w-full bg-white text-left">
          <FaSquareFacebook className="text-xl"></FaSquareFacebook>Facebook
        </button>
        <button className="flex gap-2 btn justify-start items-center border  text-blue-400 border-slate-200 h-16 p-4 rounded-none w-full bg-white text-left">
          <FaSquareTwitter className="text-xl"></FaSquareTwitter>Twitter
        </button>
        <button className="flex gap-2 btn justify-start items-center border text-rose-500 border-slate-200 h-16 p-4 rounded-sm rounded-b-md w-full bg-white text-left">
          <FaSquareInstagram className="text-xl"></FaSquareInstagram>Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;

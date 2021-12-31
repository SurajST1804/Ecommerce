import React from "react";
import { GrMail } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-[#fff] shadow-xl rounded my-8">
      <div className="text-center text-gray-600 py-4 font-bold">
        Sign in with
      </div>
      <div className="flex justify-center mb-10">
        <button className="flex items-center bg-white shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
          <div className="flex text-blue-700">
            <BsFacebook className="text-2xl pr-1" />
          </div>
        </button>
        <button className="flex items-center bg-white shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
          <div className="">
            <FcGoogle />
          </div>
        </button>
      </div>
      <div className="bg-white pt-8 pb-16">
        <div className="text-center text-gray-600 mb-6 font-bold">
          Or sign in with Email &amp; Password
        </div>
        <div className="w-4/5 mx-auto">
          <div className="flex items-center bg-white rounded shadow-md mb-4">
            <span className="px-3">
              <GrMail className="text-[#FDAA4B] text-2xl pr-1" />
            </span>
            <input
              className="w-full h-12 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center bg-white rounded shadow-md mb-4">
            <span className="px-3">
              <FaLock className="text-[#FDAA4B] text-2xl pr-1" />
            </span>
            <input
              className="w-full h-12 focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input type="checkbox" name="remember" className="mr-1" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <button className="bg-[#FDAA4B] block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

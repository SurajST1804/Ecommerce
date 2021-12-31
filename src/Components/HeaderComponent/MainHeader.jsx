import React from "react";
import { BsBasket } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainHeader = () => {
  let { basket } = useSelector((state) => state.CartReducers);
  return (
    <section className="h-20 bg-white shadow-sm">
      <article className="h-20 bg-white mx-auto w-[95%] flex">
        <div className="flex justify-start basis-[20%] items-center">
          <span>
            <Link to="/">
              <img src="Shopitlogo.png" alt="Logo" className="h-9" />
            </Link>
          </span>
          <span className="text-4xl">
            <Link to="/">SHOP</Link>
          </span>
          <span className="text-4xl text-[#FDAA4B]">
            <Link to="/">IT</Link>
          </span>
        </div>
        <div className="flex justify-start basis-[50%] items-center">
          <ul className="text-black flex space-x-12 uppercase">
            <li className=" hover:text-[#FDAA4B]">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[#FDAA4B]">
              <a href="">Special</a>
            </li>
            <li className=" hover:text-[#FDAA4B]">
              <a href="">Site</a>
            </li>
            <li className="hover:text-[#FDAA4B]">
              <a href="">Return</a>
            </li>
            <li className="hover:text-[#FDAA4B]">
              <a href="">Brand</a>
            </li>
            <li className="hover:text-[#FDAA4B]">
              <a href="">Blog</a>
            </li>
            <li className="hover:text-[#FDAA4B]">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end basis-[30%]">
          <ul className="flex items-center space-x-6 ">
            <li className="flex items-center justify-end">
              <span className="hover:text-[#FDAA4B] text-3xl">
                <RiUserLine />
              </span>
              <select name="My Account">
                <option value="">Login</option>
              </select>
              <div className="hidden">
                <button>Login</button>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-3xl hover:text-[#FDAA4B] flex">
                <BsBasket />
                <sup>{basket && basket.length}</sup>
              </span>
              <span className="">My Cart</span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default MainHeader;

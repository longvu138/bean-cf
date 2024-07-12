import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import search from "../assets/search.svg";
import heart from "../assets/heart.svg";
import bag from "../assets/bag.svg";

const Header = ({ onMobileMenuToggle }) => {
  return (
    <div className="header flex items-center justify-between">
      <div className="flex-1 py-10 pl-4 lg:pl-[34px] border-t border-b flex gap-[50px] items-center justify-between  text-textMenu uppercase text-lg font-normal">
        <div className="hidden md:flex gap-4 lg:gap-[50px]">
          <span className="text-active cursor-pointer">Home</span>
          <span className="cursor-pointer">Shop</span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">Pages</span>
        </div>
        <button
          className="md:hidden"
          onClick={onMobileMenuToggle}
        >
          <svg
            className="w-6 h-6 text-textMenu"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <img src={Logo} alt="Logo" className="w-20 h-20 md:w-[228px] md:h-[210px]" />
      <div className="flex-1 pr-4 lg:pr-[34px] py-[28px] border-t border-b text-right hidden md:flex items-center justify-end">
        <div className="flex items-center relative w-full lg:w-[260px]">
          <input
            type="text"
            className="border border-[#B4B3B2] text-primary text-sm rounded-full h-12 pl-[22px] w-full placeholder:text-[#362C27] placeholder:italic focus:border-transparent focus-visible:border-none"
            placeholder="Search here..."
          />
          <img
            src={search}
            alt="Search"
            className="absolute top-1/2 -translate-y-1/2 right-4"
          />
        </div>
        <img src={heart} alt="Heart" className="ml-[20px] lg:ml-[50px] cursor-pointer" />
        <span className="ml-[20px] lg:ml-[50px] flex items-center gap-1 cursor-pointer">
          <img src={bag} alt="Bag" />
          <span className="text-2xl text-textMenu">(01)</span>
        </span>
      </div>
    </div>
  );
};

export default Header;

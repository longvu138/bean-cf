import React from "react";
import leafLeft from "../assets/leafLeft.png";
import leafRight from "../assets/leafRight.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import tw from "../assets/tw.png";
import linked from "../assets/linked.png";
import yt from "../assets/yt.png";

const Subscribe = () => {
  return (
    <div className="relative mt-16 p-8 lg:p-20">
      <img
        src={leafLeft}
        alt="Leaf Left"
        className="absolute left-0 top-0 hidden lg:block w-64"
      />
      <div className="flex items-center flex-col text-center">
        <div className="uppercase text-5xl font-normal text-textMenu">
          Subscribe us
        </div>
        <div className="mt-2 text-base font-light text-textMenu">
          Subscribe to our newsletter for discount codes and updates.
        </div>
        <div className="flex items-center relative w-full max-w-[740px] lg:w-2/3 mt-10">
          <input
            type="text"
            className="border border-[#D2CFCC] w-full  bg-primary text-textMenu text-sm rounded-full h-12 pl-4 placeholder:text-gray-700 placeholder:italic focus:outline-none focus:border-transparent"
            placeholder="Write your email address here..."
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-0 border px-7 h-12 border-solid rounded-full text-textMenu border-textMenu font-semibold text-xs md:text-lg">
            Subscribe
          </button>
        </div>
        <div className="mt-10 flex gap-6 items-center">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={tw} alt="" />
          <img src={linked} alt="" />
          <img src={yt} alt="" />
        </div>
      </div>
      <img
        src={leafRight}
        alt="Leaf Right"
        className="absolute right-0 top-12 md:top-20 lg:top-28 xl:top-36 hidden lg:block w-64"
      />
    </div>
  );
};

export default Subscribe;

import React from "react";
import leafLeft from "../assets/leafLeft.png";
import leafRight from "../assets/leafRight.png";

const Subscribe = () => {
  return (
    <div className="relative mt-[60px] p-[100px] lg:p-[200px] ">
      <img
        src={leafLeft}
        alt="Leaf Left"
        className="hidden lg:block absolute left-0 top-0"
      />
      <img
        src={leafRight}
        alt="Leaf Right"
        className="hidden lg:block absolute right-0 top-[150px]"
      />
      <div className="flex items-center flex-col">
        <div className="uppercase text-[60px] font-normal text-textMenu">
          Subscribe us
        </div>
        <div className="mt-[10px] text-base font-light  text-textMenu">
          Subscribe to our newsletter for discount codes and updates.
        </div>
        <div className="flex items-center relative w-full lg:w-[740px] mt-10">
          <input
            type="text"
            className="border border-[#B4B3B2] w-full bg-primary  text-textMenu text-sm rounded-full h-[52px] pl-[22px] placeholder:text-[#362C27] placeholder:italic focus:border-transparent focus-visible:border-none"
            placeholder="Write your email address here..."
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-0 border px-7 h-[52px] border-solid rounded-full text-textMenu border-textMenu font-semibold text-lg">
            Subscribe
          </button>
        </div>
        <div className="mt-10 flex gap-[26px] items-center">
          <span>icon1</span>
          <span>icon1</span>
          <span>icon1</span>
          <span>icon1</span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

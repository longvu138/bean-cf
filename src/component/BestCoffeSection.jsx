import React from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import imgbest1 from "../assets/imgbest1.png";

const BestCoffeeSection = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="font-normal text-[40px] md:text-[50px] lg:text-[60px] uppercase text-textMenu">
          Shop Best Coffee
        </div>
        <div className="flex items-center gap-[20px] lg:gap-[50px] mt-4 lg:mt-0">
          <div className="text-lg text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0]">
            View all
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-3 lg:px-8 lg:py-7 rounded-2xl bg-[#e9e9e9] cursor-pointer">
              <img src={arrowLeft} alt="Arrow Left" />
            </span>
            <span className="px-4 py-3 lg:px-8 lg:py-7 rounded-2xl bg-textMenu cursor-pointer">
              <img src={arrowRight} alt="Arrow Right" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col lg:flex-row items-center justify-between">
        {[...Array(3)].map((_, index) => (
          <div className="mb-8 lg:mb-0" key={index}>
            <img
              src={imgbest1}
              className="w-full lg:w-[576px] h-auto lg:h-[640px] rounded-[10px]"
              alt="Best Coffee"
            />
            <div className="mt-6 flex flex-col gap-[6px] text-center lg:text-left">
              <span className="uppercase text-[24px] md:text-[30px] lg:text-[34px] font-normal text-textMenu">
                Caramelicious
              </span>
              <span className="text-active text-[24px] md:text-[30px] lg:text-[34px]">$29.00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCoffeeSection;

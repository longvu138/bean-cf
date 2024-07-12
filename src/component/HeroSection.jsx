import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const HeroSection = () => {
  return (
    <div className="mt-[60px] flex flex-col lg:flex-row items-baseline cursor-pointer h-auto">
      <div className="flex-1">
        <img src={img1} alt="Coffee" className="w-full lg:max-h-[820px]" />
      </div>
      <div className="flex-1 relative">
        <img src={img2} alt="Coffee" className="w-full lg:max-h-[820px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col w-full lg:w-[638px]">
          <div className="text-center text-[40px] md:text-[50px] lg:text-[65px] font-normal flex items-center gap-6 uppercase">
            <span>Special </span>
            <span className="text-active">coffee</span>
          </div>
          <div className="text-center mt-[10px] text-textMenu leading-[28px] md:leading-[38px] text-base md:text-xl font-light">
            Morbi justo vel diam non leo elementum massa. Molestie ipsum
            condimentum egestas vitae ut cras aenean enim. Laoreet odio
            adipiscing auctor scelerisque phasellus nisl faucibus.
          </div>
          <button className="button mt-10">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

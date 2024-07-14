
import React from "react";
import leafLeft from "../assets/leafLeft.png";
import leafRight from "../assets/leafRight.png";

const FeatureSection = () => {
  return (
    <div className="flex items-center justify-center relative">
      <img
        src={leafLeft}
        alt="Leaf Left"
        className="absolute left-0 top-0 hidden lg:block w-[260px]"
      />
      <div className="max-w-[1164px] md:w-[1000px] text-center text-[20px] md:text-[28px] py-10 md:py-20 lg:py-36 xl:py-44 xl:text-[38px] lg:text-[28px] leading-[28px] md:leading-[36px] lg:leading-[48px] xl:leading-[58px] font-light text-textMenu italic">
        Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum
        egestas vitae ut cras aenean enim. Laoreet odio adipiscing auctor
        scelerisque phasellus nisl faucibus.
      </div>
      <img
        src={leafRight}
        alt="Leaf Right"
        className="absolute right-0 top-[50px] md:top-[80px] lg:top-[120px] xl:top-[150px] hidden lg:block w-[260px]"
      />
    </div>
  );
};

export default FeatureSection;

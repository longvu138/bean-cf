import React from "react";
import cickleArrowLeft from "../assets/cickleArrowLeft.png";
import cickleArrowRight from "../assets/cickleArrowRight.png";

const TestimonialSection = () => {
  return (
    <div className="flex items-center justify-between mt-[200px] px-4 md:px-0 ">
      <img
        src={cickleArrowLeft}
        alt="Arrow Left"
        width={50}
        height={50}
        className="cursor-pointer"
      />
      <div className="text-center">
        <div className="text-textMenu font-light text-[20px] md:text-[38px] px-4 md:px-[200px] italic leading-[30px] md:leading-[68px]">
          “Habitant aliquet sed suspendisse lectus sit gravida sit morbi
          augue. Porta cursus diam sit velit mi. Maecenas scelerisque tellus
          nulla ut vitae amet morbi platea blandit vestibulum dignissim.”
        </div>
        <div className="text-lg md:text-2xl font-normal leading-[30px] text-textMenu mt-5">
          Sarah Anderson
        </div>
      </div>
      <img
        src={cickleArrowRight}
        alt="Arrow Right"
        width={50}
        height={50}
        className="cursor-pointer"
      />
    </div>
  );
};

export default TestimonialSection;

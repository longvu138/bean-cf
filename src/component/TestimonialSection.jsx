import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cickleArrowLeft from "../assets/cickleArrowLeft.png";
import cickleArrowRight from "../assets/cickleArrowRight.png";

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="mt-[80px] px-4 md:px-0">
      <div className="flex items-center justify-center md:justify-between">
        <img
          src={cickleArrowLeft}
          alt="Arrow Left"
          className="cursor-pointer w-10 h-10 xl:w-[50px] xl:h-[50px]"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <div className="w-full max-w-screen-lg px-4">
          <Slider ref={sliderRef} {...settings}>
            <div className="text-center">
              <div className="text-textMenu font-light text-[20px] md:text-[24px] lg:text-[28px] italic leading-[30px] md:leading-[68px]">
                “Habitant aliquet sed suspendisse lectus sit gravida sit morbi
                augue. Porta cursus diam sit velit mi. Maecenas scelerisque
                tellus nulla ut vitae amet morbi platea blandit vestibulum
                dignissim.”
              </div>
              <div className="text-lg md:text-2xl font-normal leading-[30px] text-textMenu mt-5">
                Sarah Anderson
              </div>
            </div>
            <div className="text-center">
              <div className="text-textMenu font-light text-[20px] md:text-[24px] lg:text-[28px] italic leading-[30px] md:leading-[68px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at odio vitae dui feugiat tincidunt.”
              </div>
              <div className="text-lg md:text-2xl font-normal leading-[30px] text-textMenu mt-5">
                John Doe
              </div>
            </div>
          </Slider>
        </div>
        <img
          src={cickleArrowRight}
          alt="Arrow Right"
          className="cursor-pointer w-10 h-10 xl:w-[50px] xl:h-[50px]"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;

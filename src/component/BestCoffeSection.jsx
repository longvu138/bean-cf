import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import imgbest1 from "../assets/imgbest1.png";
import imgbest2 from "../assets/imgbest2.png";
import imgbest3 from "../assets/imgbest3.png";

const BestCoffeeSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      img: imgbest1.png,
    },
  ];
  return (
    <div className="mt-10 md:mt-20 lg:mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="font-normal text-[40px] md:text-[50px] lg:text-[60px] uppercase text-textMenu ml-4">
          Shop Best Coffee
        </div>
        <div className="flex items-center gap-5 lg:gap-10 mt-4 lg:mt-0">
          <div className="text-lg text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0]">
            View all
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <span
              className="px-4 py-2 lg:px-8 lg:py-7 rounded-2xl bg-[#e9e9e9] cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={arrowLeft} alt="Arrow Left" />
            </span>
            <span
              className="px-4 py-2 lg:px-8 lg:py-7 rounded-2xl bg-textMenu cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={arrowRight} alt="Arrow Right" />
            </span>
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="p-4">
          <img
            src={imgbest1}
            className="w-full h-auto rounded-[10px]"
            alt="Best Coffee"
          />
          <div className="mt-6 flex flex-col gap-[6px] text-center lg:text-left">
            <span className="uppercase text-[24px] md:text-[30px] lg:text-[34px] font-normal text-textMenu">
              Caramelicious
            </span>
            <span className="text-active text-[24px] md:text-[30px] lg:text-[34px]">
              $29.00
            </span>
          </div>
        </div>
        <div className="p-4">
          <img
            src={imgbest2}
            className="w-full h-auto rounded-[10px]"
            alt="Best Coffee"
          />
          <div className="mt-6 flex flex-col gap-[6px] text-center lg:text-left">
            <span className="uppercase text-[24px] md:text-[30px] lg:text-[34px] font-normal text-textMenu">
              Hazelnut Heaven
            </span>
            <span className="text-active text-[24px] md:text-[30px] lg:text-[34px]">
              $29.00
            </span>
          </div>
        </div>
        <div className="p-4">
          <img
            src={imgbest3}
            className="w-full h-auto rounded-[10px]"
            alt="Best Coffee"
          />
          <div className="mt-6 flex flex-col gap-[6px] text-center lg:text-left">
            <span className="uppercase text-[24px] md:text-[30px] lg:text-[34px] font-normal text-textMenu">
              Maple Magic
            </span>
            <span className="text-active text-[24px] md:text-[30px] lg:text-[34px]">
              $29.00
            </span>
          </div>
        </div>
        <div className="p-4">
          <img
            src={imgbest2}
            className="w-full h-auto rounded-[10px]"
            alt="Best Coffee"
          />
          <div className="mt-6 flex flex-col gap-[6px] text-center lg:text-left">
            <span className="uppercase text-[24px] md:text-[30px] lg:text-[34px] font-normal text-textMenu">
              Caramelicious
            </span>
            <span className="text-active text-[24px] md:text-[30px] lg:text-[34px]">
              $29.00
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BestCoffeeSection;

import React from "react";
import Ellipse from "../assets/Ellipse.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";
import best1 from "../assets/best1.png";
import best2 from "../assets/best2.png";
import best3 from "../assets/best3.png";
import best4 from "../assets/best4.png";
import best5 from "../assets/best5.png";

const NewArrivals = () => {
  return (
    <div className="mt-[80px] md:mt-[200px] flex flex-col gap-[140px] justify-center lg:flex-row flex-wrap">
      <div className="grow">
        <div className="text-[60px] leading-[75px] text-textMenu">
          New arrivals
        </div>
        <div className="flex items-center mt-10 gap-[18px]">
          <img src={Ellipse} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Coconut Kiss
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A strong and concentrated shot of coffee.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={Ellipse1} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Pumpkin Spice Surprise
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$3.49</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A strong and concentrated shot of coffee.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={Ellipse2} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Toffee Temptation
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$3.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A strong and concentrated shot of coffee.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={Ellipse3} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Gingerbread Galore
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$4.49</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A strong and concentrated shot of coffee.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={Ellipse4} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Salted Caramel Sip
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A strong and concentrated shot of coffee.
            </div>
          </div>
        </div>
        <div className="text-lg text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0] w-fit mt-10 ">
          View all
        </div>
      </div>

      <div className="grow">
        <div className="text-[60px] leading-[75px] text-textMenu">
          Best Selling
        </div>
        <div className="flex items-center mt-10 gap-[18px]">
          <img src={best1} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Cinnamon Swirl
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A strong and concentrated shot of coffee.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={best2} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Hazelnut Heaven
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A shot of espresso diluted with hot water.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={best3} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Peppermint Perk{" "}
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              Equal parts of espresso, steamed milk, and foam, topped with
              cocoa.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={best4} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Berry Blast
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              Creamy espresso with steamed milk and a thin layer of foam.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-[18px]">
          <img src={best5} alt="" width={90} height={90} />
          <div className="w-full">
            <div className="flex items-baseline justify-start">
              <div className="text-lg md:text-2xl leading-[30px] text-textMenu whitespace-nowrap">
                Macadamia Nut Latte
              </div>
              <hr />
              <div className="text-textMenu text-xs md:text-2xl">$2.99</div>
            </div>
            <div className="mt-4 text-xs md:text-base text-textMenu">
              A nutty and indulgent latte with a hint of macadamia flavor.
            </div>
          </div>
        </div>
        <div className="text-lg text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0] w-fit mt-10 ">
          View all
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

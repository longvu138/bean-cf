import React from "react";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";

const CategoriesSection = () => {
  return (
    <div className="mt-[100px] md:mt-[200px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Row 1 */}
        <div className="flex flex-col justify-center">
          <img src={cat1} alt="Category 1" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center bg-primary p-4">
          <div className="border border-solid h-full flex flex-col justify-center px-4 py-4 md:px-[40px] md:py-[60px] text-center w-full">
            <div className="uppercase text-lg md:text-2xl leading-[30px] font-normal">
              Instant Coffees
            </div>
            <div className="mt-3 font-light text-sm md:text-base leading-[28px] tracking-wider">
              Euismod eget id posuere nisl ut me duis in lectus elementum
              tincidunt augue ut neger in tincidunt amet et ultrices.
            </div>
            <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
              Shop category
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src={cat2} alt="Category 2" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center bg-primary p-4">
          <div className="border border-solid h-full flex flex-col justify-center px-4 py-4 md:px-[40px] md:py-[60px] text-center w-full">
            <div className="uppercase text-lg md:text-2xl leading-[30px] font-normal">
              Instant Coffees
            </div>
            <div className="mt-3 font-light text-sm md:text-base leading-[28px] tracking-wider">
              Euismod eget id posuere nisl ut me duis in lectus elementum
              tincidunt augue ut neger in tincidunt amet et ultrices.
            </div>
            <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
              Shop category
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col justify-center bg-primary p-4">
          <div className="border border-solid h-full flex flex-col justify-center px-4 py-4 md:px-[40px] md:py-[60px] text-center w-full">
            <div className="uppercase text-lg md:text-2xl leading-[30px] font-normal">
              Instant Coffees
            </div>
            <div className="mt-3 font-light text-sm md:text-base leading-[28px] tracking-wider">
              Euismod eget id posuere nisl ut me duis in lectus elementum
              tincidunt augue ut neger in tincidunt amet et ultrices.
            </div>
            <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
              Shop category
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src={cat3} alt="Category 3" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center bg-primary p-4">
          <div className="border border-solid h-full flex flex-col justify-center px-4 py-4 md:px-[40px] md:py-[60px] text-center w-full">
            <div className="uppercase text-lg md:text-2xl leading-[30px] font-normal">
              Instant Coffees
            </div>
            <div className="mt-3 font-light text-sm md:text-base leading-[28px] tracking-wider">
              Euismod eget id posuere nisl ut me duis in lectus elementum
              tincidunt augue ut neger in tincidunt amet et ultrices.
            </div>
            <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
              Shop category
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src={cat4} alt="Category 4" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;

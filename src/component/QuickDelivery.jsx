import React from "react";
import cafe from "../assets/simple-icons_buymeacoffee.png";
import pick from "../assets/game-icons_coffee-pot.png";
import hotcoff from "../assets/game-icons_coffee-cup.png";
import beans from "../assets/game-icons_coffee-beans.png";

const QuickDelivery = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between w-full py-10">
      <div className="w-[322px] h-[164px] flex flex-col items-center justify-center">
        <img src={cafe} alt="" />
        <div className="text-2xl text-textMenu mt-[14px]">Quick Delivery</div>
        <div className="text-center font-light text-base text-textMenu mt-1">
          Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.
        </div>
      </div>
      <div className="w-[322px] h-[164px] flex flex-col items-center justify-center">
        <img src={pick} alt="" />
        <div className="text-2xl text-textMenu mt-[14px]">Pickup in store</div>
        <div className="text-center font-light text-base text-textMenu mt-1">
          Orci dictumst ellentesque ut sem partu rient purus pulvinar feugiat.
        </div>
      </div>
      <div className="w-[322px] h-[164px] flex flex-col items-center justify-center">
        <img src={hotcoff} alt="" />
        <div className="text-2xl text-textMenu mt-[14px]">
          No shipping charge
        </div>
        <div className="text-center font-light text-base text-textMenu mt-1">
          Eugiat orci dictumst ellentesque ut sem purus pulvinar partu rient.
        </div>
      </div>
      <div className="w-[322px] h-[164px] flex flex-col items-center justify-center">
        <img src={beans} alt="" />
        <div className="text-2xl text-textMenu mt-[14px]">Friendly Service</div>
        <div className="text-center font-light text-base text-textMenu mt-1">
          Dictumst ellentesque ut sem purus pulvinar feugiat orci partu rient.
        </div>
      </div>
    </div>
  );
};

export default QuickDelivery;

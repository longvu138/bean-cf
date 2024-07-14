import React from "react";
import flinsta1 from "../assets/flinsta1.png";
import flinsta2 from "../assets/flinsta1.png";
import flinsta3 from "../assets/flinsta3.png";
import flinsta4 from "../assets/flinsta4.png";
import flinsta5 from "../assets/flinsta5.png";
import flinsta6 from "../assets/flinsta6.png";
const FollowInstagram = () => {
  return (
    <div className="mt-[100px] md:mt-[200px]">
      <div className="text-center font-normal text-[34px] text-textMenu uppercase">
        Follow our INstagram #Beanie
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
        <img
          src={flinsta1}
          className="rounded-[20px]"
          alt=""
          width={278}
          height={278}
        />
        <img
          src={flinsta2}
          className="rounded-[20px]"
          alt=""
          width={278}
          height={278}
        />
        <img
          src={flinsta3}
          className="rounded-[20px]"
          alt=""
          width={278}
          height={278}
        />
        <img
          src={flinsta4}
          className="rounded-[20px]"
          alt=""
          width={278}
          height={278}
        />
        <img
          src={flinsta5}
          className="rounded-[20px]"
          alt=""
          width={278}
          height={278}
        />
        <img
          src={flinsta6}
          className="rounded-[20px]"
          alt=""
          width={278}
          height={278}
        />
      </div>
    </div>
  );
};

export default FollowInstagram;

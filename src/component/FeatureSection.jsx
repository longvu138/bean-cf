// import React from "react";
// import leafLeft from "../assets/leafLeft.png";
// import leafRight from "../assets/leafRight.png";

// const FeatureSection = () => {
//   return (
//     <div className="relative mt-[60px] p-[100px] lg:p-[200px] ">
//       <div className="left absolute top-0 left-0">
//         <img src={leafLeft} alt="Leaf Left" />
//       </div>
//       <div className="right absolute right-[-10px] top-[100px]">
//         <img src={leafRight} alt="Leaf Right" />
//       </div>
//       <div className="m-auto text-center text-[20px] md:text-[28px] lg:text-[38px] leading-[38px] md:leading-[48px] lg:leading-[68px] text-textMenu italic">
//         Morbi justo vel diam non leo elementum massa. Molestie ipsum
//         condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing
//         auctor scelerisque phasellus nisl faucibus.
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

import React from "react";
import leafLeft from "../assets/leafLeft.png";
import leafRight from "../assets/leafRight.png";

const FeatureSection = () => {
  return (
    <div className="flex items-center justify-center relative">
      <img
        src={leafLeft}
        alt="Leaf Left"
        className="absolute left-0 top-0 hidden lg:block"
      />
      <div className="max-w-[1164px] text-center text-[20px] md:text-[28px] py-[180px] lg:text-[38px] leading-[38px] md:leading-[48px] lg:leading-[68px] text-textMenu italic">
        Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum
        egestas vitae ut cras aenean enim. Laoreet odio adipiscing auctor
        scelerisque phasellus nisl faucibus.
      </div>
      <img
        src={leafRight}
        alt="Leaf Right"
        className="absolute right-0 top-[150px] hidden lg:block"
      />
    </div>
  );
};

export default FeatureSection;

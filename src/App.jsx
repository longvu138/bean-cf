// import "./App.css";
// import Logo from "./assets/Logo.png";
// import arrowLeft from "./assets/arrowLeft.png";
// import arrowRight from "./assets/arrowRight.png";
// import bag from "./assets/bag.svg";
// import cickleArrowLeft from "./assets/cickleArrowLeft.png";
// import cickleArrowRight from "./assets/cickleArrowRight.png";
// import heart from "./assets/heart.svg";
// import img1 from "./assets/img1.png";
// import img2 from "./assets/img2.png";
// import imgbest1 from "./assets/imgbest1.png";
// import leafLeft from "./assets/leafLeft.png";
// import leafRight from "./assets/leafRight.png";
// import search from "./assets/search.svg";

// function App() {
//   return (
//     <div className="max-w-[1920px] m-auto">
//       <div className="header flex items-center justify-between ">
//         <div className="py-10 pl-[34px] border-t border-b flex-1 text-textMenu gap-[50px] flex uppercase text-lg font-normal">
//           <span className="text-active cursor-pointer">HOME</span>
//           <span className="cursor-pointer">SHOP</span>
//           <span className="cursor-pointer">Blog</span>
//           <span className="cursor-pointer">Pages</span>
//         </div>
//         <img src={Logo} alt="" className="w-[228px] h-[210px]" />
//         <div className="flex-1 pr-[34px] py-[28px] border-t border-b text-right">
//           <div className="flex items-center justify-end">
//             <div className="flex items-center relative w-[260px]">
//               <input
//                 type="text"
//                 class="border border-[#B4B3B2] text-primary text-sm rounded-full h-12 pl-[22px] w-full placeholder:text-[#362C27] placeholder:italic focus:border-transparent focus-visible:border-none"
//                 placeholder="Search here..."
//               />

//               <img
//                 src={search}
//                 alt=""
//                 className="absolute top-1/2 -translate-y-1/2 right-4"
//               />
//             </div>
//             <img src={heart} alt="" className="ml-[50px] cursor-pointer" />
//             <span className="ml-[50px] flex items-center gap-1 cursor-pointer">
//               <img src={bag} alt="" />
//               <span className="text-2xl text-textMenu"> (01)</span>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-[60px] flex items-baseline cursor-pointer h-[820px]">
//         <div className="flex-1">
//           <img src={img1} alt="" />
//         </div>
//         <div className="flex-1 relative">
//           <img src={img2} alt="" />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center flex-col w-[638px] ">
//             <div className="text-center text-[65px] font-normal flex items-center gap-6 uppercase">
//               <span>Special </span>
//               <span className="text-active">coffee</span>
//             </div>
//             <div className="text-center mt-[10px] text-textMenu leading-[38px] text-xl font-light">
//               Morbi justo vel diam non leo elementum massa. Molestie ipsum
//               condimentum egestas vitae ut cras aenean enim. Laoreet odio
//               adipiscing auctor scelerisque phasellus nisl faucibus.
//             </div>
//             <button className="button mt-10">Order now</button>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-full mt-[60px] p-[200px]">
//         <div className="left absolute top-0 left-[-70px]">
//           <img src={leafLeft} className="" alt="" />
//         </div>
//         <div className="right absolute right-[-74px] top-[100px]">
//           <img src={leafRight} className="" alt="" />
//         </div>

//         <div className="m-auto max-w-[1164px] text-center text-[38px] leading-[68px] text-textMenu italic">
//           Morbi justo vel diam non leo elementum massa. Molestie ipsum
//           condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing
//           auctor scelerisque phasellus nisl faucibus.
//         </div>
//       </div>
//       <div>
//         <div className="flex items-center justify-between">
//           <div className="font-normal text-[60px] uppercase text-textMenu">
//             shop Best coffee
//           </div>
//           <div className="flex items-center gap-[50px]">
//             <div className="text-lg text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0]">
//               view all
//             </div>
//             <div className="flex items-center gap-4 ">
//               <span className="px-8 py-7 rounded-2xl bg-[#e9e9e9] cursor-pointer">
//                 <img src={arrowLeft} alt="" />
//               </span>
//               <span className="px-8 py-7 rounded-2xl bg-textMenu cursor-pointer">
//                 <img src={arrowRight} alt="" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-5 flex items-center justify-between">
//         <div className="">
//           <img
//             src={imgbest1}
//             width={576}
//             height={640}
//             className="rounded-[10px]"
//             alt=""
//           />
//           <div className="mt-6 flex flex-col gap-[6px]">
//             <span className="uppercase text-[34px] font-normal text-textMenu">
//               Caramelicious
//             </span>
//             <span className="text-active text-[34px]">$29.00</span>
//           </div>
//         </div>
//         <div className="">
//           <img
//             src={imgbest1}
//             width={576}
//             height={640}
//             className="rounded-[10px]"
//             alt=""
//           />
//           <div className="mt-6 flex flex-col gap-[6px]">
//             <span className="uppercase text-[34px] font-normal text-textMenu">
//               Caramelicious
//             </span>
//             <span className="text-active text-[34px]">$29.00</span>
//           </div>
//         </div>
//         <div className="">
//           <img
//             src={imgbest1}
//             width={576}
//             height={640}
//             className="rounded-[10px]"
//             alt=""
//           />
//           <div className="mt-6 flex flex-col gap-[6px]">
//             <span className="uppercase text-[34px] font-normal text-textMenu">
//               Caramelicious
//             </span>
//             <span className="text-active text-[34px]">$29.00</span>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-between mt-[200px]">
//         <img
//           src={cickleArrowLeft}
//           alt=""
//           width={100}
//           height={100}
//           className="cursor-pointer"
//         />
//         <div className="text-center">
//           <div className="text-textMenu font-light text-[38px] px-[200px] italic leading-[68px]">
//             “Habitant aliquet sed suspendisse lectus sit gravida sit morbi
//             augue. Porta cursus diam sit velit mi. Maecenas scelerisque tellus
//             nulla ut vitae amet morbi platea blandit vestibulum dignissim.”
//           </div>
//           <div className="text-2xl font-normal leading-[30px] text-textMenu mt-5">
//             Sarah Anderson
//           </div>
//         </div>
//         <img
//           src={cickleArrowRight}
//           alt=""
//           width={100}
//           height={100}
//           className="cursor-pointer"
//         />
//       </div>
//       <div className="flex flex-wrap justify-evenly mt-[200px]">
//         <div className="h-[440px] w-[468px] bg-active"></div>
//         <div className="h-[440px] w-[468px] bg-primary p-4">
//           <div className="border border-solid px-[40px] py-[120px] text-center">
//             <div className="uppercase text-2xl leading-[30px] font-normal">
//               Instant Coffees
//             </div>
//             <div className="mt-3 font-light text-base leading-[28px] tracking-wider	">
//               Euismod eget id posuere nisl ut me duis in lectus elementum
//               tincidunt augue ut neger in tincidunt amet et ultrices.
//             </div>
//             <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
//               Shop category
//             </span>
//           </div>
//         </div>
//         <div className="h-[440px] w-[468px] bg-active"></div>
//         <div className="h-[440px] w-[468px] bg-primary p-4">
//           <div className="border border-solid px-[40px] py-[120px] text-center">
//             <div className="uppercase text-2xl leading-[30px] font-normal">
//               Instant Coffees
//             </div>
//             <div className="mt-3 font-light text-base leading-[28px] tracking-wider	">
//               Euismod eget id posuere nisl ut me duis in lectus elementum
//               tincidunt augue ut neger in tincidunt amet et ultrices.
//             </div>
//             <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
//               Shop category
//             </span>
//           </div>
//         </div>
//         <div className="h-[440px] w-[468px] bg-primary p-4">
//           <div className="border border-solid px-[40px] py-[120px] text-center">
//             <div className="uppercase text-2xl leading-[30px] font-normal">
//               Instant Coffees
//             </div>
//             <div className="mt-3 font-light text-base leading-[28px] tracking-wider	">
//               Euismod eget id posuere nisl ut me duis in lectus elementum
//               tincidunt augue ut neger in tincidunt amet et ultrices.
//             </div>
//             <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
//               Shop category
//             </span>
//           </div>
//         </div>
//         <div className="h-[440px] w-[468px] bg-active"></div>
//         <div className="h-[440px] w-[468px] bg-primary p-4">
//           <div className="border border-solid px-[40px] py-[120px] text-center">
//             <div className="uppercase text-2xl leading-[30px] font-normal">
//               Instant Coffees
//             </div>
//             <div className="mt-3 font-light text-base leading-[28px] tracking-wider	">
//               Euismod eget id posuere nisl ut me duis in lectus elementum
//               tincidunt augue ut neger in tincidunt amet et ultrices.
//             </div>
//             <span className="mt-3 font-semibold text-lg leading-[28px] border-b-2 border-[#d0d0d0]">
//               Shop category
//             </span>
//           </div>
//         </div>
//         <div className="h-[440px] w-[468px] bg-active"></div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./component/Header";
import MobileMenu from "./component/MobileMenu";
import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/FeatureSection";
import TestimonialSection from "./component/TestimonialSection";
import CategoriesSection from "./component/CategoriesSection";
import BestCoffeeSection from "./component/BestCoffeSection";
import "./App.css";
import NewArrivals from "./component/NewArrivals";
import Subscribe from "./component/Subscribe";
import QuickDelivery from "./component/QuickDelivery";
import ReadOurBlog from "./component/ReadOurBlog";
import FollowInstagram from "./component/FollowInstagram";
import Footer from "./component/Footer";

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="md:px-[76px]">
        <Header
          onMobileMenuToggle={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
        {isMobileMenuOpen && <MobileMenu />}
        <HeroSection />
      </div>
      <FeatureSection />
      <div className="md:px-[76px] ">
        <BestCoffeeSection />
        <TestimonialSection />
        <CategoriesSection />
        <NewArrivals />
      </div>
      <Subscribe />
      <div className="md:px-[76px] border-t border-b">
        <QuickDelivery />
      </div>
      <div className="md:px-[76px] ">
        <ReadOurBlog />
        <FollowInstagram />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;

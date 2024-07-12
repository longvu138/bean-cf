import React from "react";

const MobileMenu = () => {
  return (
    <div className="md:hidden flex flex-col items-center bg-white text-textMenu text-lg font-normal uppercase">
      <span className="py-2 cursor-pointer">Home</span>
      <span className="py-2 cursor-pointer">Shop</span>
      <span className="py-2 cursor-pointer">Blog</span>
      <span className="py-2 cursor-pointer">Pages</span>
    </div>
  );
};

export default MobileMenu;

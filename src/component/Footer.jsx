import React from "react";

const Footer = () => {
  return (
    <div className=" mt-[150px]">
      <div className="px-[76px] flex justify-between items-center text-textMenu text-lg tracking-wider uppercase font-primary font-normal">
        <div className="flex flex-col gap-2">
          <div>Home</div>
          <div>About</div>
          <div>Shop</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Shop single</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Terms & condition</div>
          <div>Services</div>
          <div>Privacy Policy</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Address, Location, 123</div>
          <div>yourinfo@gmail.com</div>
          <div>111 333 444 555</div>
        </div>
      </div>
      <div className="text-center border-t mt-10 text-textMenu py-5">
        <span className="font-light text-balance">
          © 2023 Beanie. Designed by
        </span>{" "}
        <span className="underline text-base font-normal">TemplatesJungle</span>
      </div>
    </div>
  );
};

export default Footer;

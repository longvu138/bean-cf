import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 text-textMenu text-lg tracking-wider uppercase font-primary font-normal px-9 lg:px-12 xl:px-[72px]">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <div>Home</div>
          <div>About</div>
          <div>Shop</div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div>Shop single</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <div>Terms & condition</div>
          <div>Services</div>
          <div>Privacy Policy</div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2">
          <div>Address, Location, 123</div>
          <div>yourinfo@gmail.com</div>
          <div>111 333 444 555</div>
        </div>
      </div>
      <div className="text-center border-t mt-10 py-5 text-textMenu">
        <span className="font-light text-balance">
          © 2023 Beanie. Designed by
        </span>{" "}
        <span className="underline">TemplatesJungle</span>
      </div>
    </div>
  );
};

export default Footer;

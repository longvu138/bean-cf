import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
const ReadOurBlog = () => {
  return (
    <div className="md:mt-[180px] mt-[80px]">
      <div className="flex justify-between flex-wrap items-center">
        <div className="text-textMenu text-2xl lg:text-[60px] md:text-[38px]">
          Read Our Blogs
        </div>
        <div className="text-xs lg:text-lg md:text-base   text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0] w-fit ">
          Read Blog posts
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="">
          <img src={blog1} className="rounded-[20px]" alt="" />
          <div className="text-2xl text-textMenu font-normal mt-5">
            What is the best Coffee?
          </div>
          <div className="font-light text-base text-textMenu mt-[6px]">
            Ullamcorper ultrices elit viverra congue velit amet. Egestas
            bibendum leo odio fringilla quam netus sagittis non eu pellentesque
            facilisis.
          </div>
        </div>
        <div className="">
          <img src={blog2} height={489} className="rounded-[20px]" alt="" />
          <div className="text-2xl text-textMenu font-normal mt-5">
            How coffee works for your body
          </div>
          <div className="font-light text-base text-textMenu mt-[6px] ">
            Ullamcorper ultrices elit viverra congue velit amet. Egestas
            bibendum leo odio fringilla quam netus sagittis non eu pellentesque
            facilisis.
          </div>
        </div>
        <div className="">
          <img src={blog1} className="rounded-[20px]" alt="" />
          <div className="text-2xl text-textMenu font-normal mt-5">
            How coffee works for your body
          </div>
          <div className="font-light text-base text-textMenu mt-[6px] ">
            Ullamcorper ultrices elit viverra congue velit amet. Egestas
            bibendum leo odio fringilla quam netus sagittis non eu pellentesque
            facilisis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOurBlog;

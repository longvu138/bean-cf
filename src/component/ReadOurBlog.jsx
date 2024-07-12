import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
const ReadOurBlog = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex justify-between items-center">
        <div className="text-textMenu text-[60px]">Read Our Blogs</div>
        <div className="text-lg text-textMenu uppercase font-semibold border-b-2 border-[#d0d0d0] w-fit mt-10 ">
          Read Blog posts
        </div>
      </div>
      <div className="mt-10 flex items-start justify-between flex-wrap">
        <div className="w-[576px]">
          <img
            src={blog1}
            width={576}
            height={379}
            className="rounded-[20px]"
            alt=""
          />
          <div className="text-2xl text-textMenu font-normal mt-5">
            What is the best Coffee?
          </div>
          <div className="font-light text-base text-textMenu mt-[6px] w-[576px]">
            Ullamcorper ultrices elit viverra congue velit amet. Egestas
            bibendum leo odio fringilla quam netus sagittis non eu pellentesque
            facilisis.
          </div>
        </div>
        <div className="w-[576px]">
          <img
            src={blog2}
            width={576}
            height={489}
            className="rounded-[20px]"
            alt=""
          />
          <div className="text-2xl text-textMenu font-normal mt-5">
            How coffee works for your body
          </div>
          <div className="font-light text-base text-textMenu mt-[6px] w-[576px]">
            Ullamcorper ultrices elit viverra congue velit amet. Egestas
            bibendum leo odio fringilla quam netus sagittis non eu pellentesque
            facilisis.
          </div>
        </div>
        <div className="w-[576px]">
          <img
            src={blog1}
            width={576}
            height={379}
            className="rounded-[20px]"
            alt=""
          />
          <div className="text-2xl text-textMenu font-normal mt-5">
            How coffee works for your body
          </div>
          <div className="font-light text-base text-textMenu mt-[6px] w-[576px]">
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

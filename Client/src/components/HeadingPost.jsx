import React from "react";

const HeadingPost = ({ image, ctTitle, title, author, link, ctLink }) => {
  return (
    <div
      className="w-fit pb-10 self-start overflow-hidden border-b
      border-gray-300 flex flex-col gap-6 md:flex-row md:max-w-full md:gap-x-10 lg:flex-col lg:max-w-[50%] lg:border-0"
    >
      {/* Image */}
      <div className="w-full h-fit bg-transparent rounded-md border cursor-pointer overflow-hidden md:w-[600px] lg:max-w-full">
        <a href={link}>
          <img
            src={image}
            alt={title}
            className="w-full object-cover cursor-pointer hover:scale-105 transition duration-100  "
          />
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5">
        {/* Category */}
        <div className="text-base tracking-widest font-notoSans font-[600]  uppercase mb-2 text-orange-700 cursor-pointer hover:underline">
          <a href={ctLink} className="">
            {ctTitle}
          </a>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-merriweather font-[700] text-gray-800 mb-2 cursor-pointer hover:underline hover:text-orange-600 lg:text-4xl">
          <a href={link}>{title}</a>
        </h2>

        {/* Author */}
        <div className="text-sm font-notoSans font-[800] text-gray-800 tracking-wider">
          By <span className="">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default HeadingPost;

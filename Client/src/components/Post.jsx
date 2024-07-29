import React from "react";

const Post = ({
  image,
  ctTitle,
  title,
  author,
  link,
  ctLink,
}) => {
  return (
    <div className="w-full h-[150px] pb-5 mb-5 overflow-hidden border-b border-gray-300 flex flex-col gap-5 md:max-w-full md:flex-row md:h-auto lg:items-center lg:pb-0 lg:border-0">
      {/* Image */}
      <div className="cursor-pointer rounded-md overflow-hidden invisible md:max-w-[150px] md:h-fit md:visible">
        <a href={link}>
          <img
            src={image}
            alt={title}
            className="w-full object-cover cursor-pointer hover:scale-105 transition duration-100  "
          />
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col  md:gap-1 lg:gap-1">
        {/* Category */}
        <div className="text-base tracking-widest font-notoSans font-[600] text-orange-700 uppercase mb-2 cursor-pointer hover:underline"
        >
          <a href={ctLink}>{ctTitle}</a>
        </div>

        {/* Title */}
        <h2 className="text-lg font-merriweather font-[400] text-gray-800 mb-2 cursor-pointer hover:underline hover:text-orange-600 md:font-[600] lg:text-2xl"
        >
          <a href={link}>{title}</a>
        </h2>

        {/* Author */}
        <div className="text-sm font-notoSans font-[700] text-gray-800 tracking-wider">
          By <span className="">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

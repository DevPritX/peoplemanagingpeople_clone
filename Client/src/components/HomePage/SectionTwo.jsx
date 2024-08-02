import React from "react";

const SectionTwo = () => {
  return (
    <section
      className="w-full px-10 pb-20 bg-black flex flex-col lg:flex-row lg:gap-x-10 lg:items-center"
      id="section_2"
    >
      {/* Image Container */}
      <div className="w-full overflow-hidden lg:w-1/2">
        {/* Image */}
        <img
          src="./section_2_image.webp"
          alt="section 2 image"
          className="w-full object-cover hover:scale-110 transition ease-in duration-100"
        />
      </div>

      {/* Content */}
      <dir className="w-full px-0 flex flex-col gap-5 text-white font-notoSans lg:w-1/2 lg:gap-y-7">
        {/* category */}
        <div className="w-fit text-white text-sm font-[600] uppercase hover:underline">
          <a href="#">Strategy & Leadership</a>
        </div>

        {/* Heading */}
        <div className="text-white font-merriweather text-2xl font-[800] overflow-hidden text-ellipsis hover:underline lg:text-5xl">
          <a href="#">
            HR Predictions: The 2024 Workplace Trends on the Minds of HR Leaders
            Everywhere
          </a>
        </div>

        {/* Description */}
        <div className="w-full text-white text-md font-[500] overflow-hidden text-ellipsis">
          <a href="#" className="line-clamp-2">
            What do HR leaders and experts across industries think about AI, the
            talent marketplace and key initiatives around DEI
          </a>
        </div>

        {/* Button */}
        <button className="w-[200px] h-[40px] flex justify-center items-center rounded-full bg-orange-600 text-white font-[600] capitalize hover:bg-orange-700 transition ease-in duration-100">
          Learn More
        </button>
      </dir>
    </section>
  );
};

export default SectionTwo;

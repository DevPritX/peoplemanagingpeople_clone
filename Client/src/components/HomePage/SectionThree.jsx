import React from "react";

const SectionThree = () => {
  return (
    <section
      id="section3"
      className="mt-[50px] w-full min-h-[200px] px-7 flex flex-col lg:flex-row lg:h-[500px] lg:px-16"
    >
      {/* Content Container */}
      <div id="content" className="w-full min-h-[400px] font-notoSans bg-black text-white rounded-t-lg flex flex-col justify-center items-center gap-y-5 lg:w-1/2 lg:h-full lg:rounded-t-none lg:rounded-l-lg">
        <h3 className="text-2xl font-[500] font-merriweather text-center">The People Managing People Podcast</h3>
        <p className="font-[400] text-base text-justify tracking-tight max-w-[480px] w-[90%] text-wrap">
          Hosted by David Rice, the People Managing People Podcast is for people
          managers and culture creators on a mission to lead better.
        </p>
        <button className="w-[150px] h-[40px] text-base font-[600] flex flex-col justify-center items-center bg-orange-700 rounded-full hover:bg-orange-800 transition-colors ease-in duration-100">Listen Now</button>
      </div>
      {/* Image Container */}
      <div
        className="w-full h-[50vh] p-2 object-fill bg-no-repeat bg-center bg-cover rounded-b-lg lg:w-1/2 lg:h-full lg:rounded-b-none lg:rounded-r-lg"
        id="image"
        style={{backgroundImage: `url(${"https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2023/11/Podcast-David-2-1600x900.jpg"})`, filter: 'contrast(110%)',}}
      ></div>
    </section>
  );
};

export default SectionThree;

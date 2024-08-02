import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const socialBtns = ["about", "write for us", "member's login"];
  const navLinks = [
    "Topics",
    "Tools",
    "Podcast",
    "Interviews",
    "Insights",
    "Membership",
  ];
  return (
    <header className="h-[90px] w-full flex flex-col justify-center bg-white sticky left-0 top-0 z-50 lg:justify-between ">
      {/* Social Links */}
      <div
        id="social"
        className="px-5 py-1 flex self-end items-center gap-5 invisible lg:visible"
      >
        <div
          id="social-btns"
          className="inline-flex gap-3 capitalize font-notoSans text-[12px] font-[500] text-black"
        >
          {socialBtns.map((btn, key) => (
            <a
              href="#"
              className="block hover:underline hover:text-orange-600 cursor-pointer"
              key={key}
            >
              {btn}
            </a>
          ))}
        </div>
        <div
          id="social-link-btns"
          className="inline-flex gap-2 text-[12px] text-gray-500 "
        >
          <a
            href="#"
            className="block hover:text-black transition-colors ease-in duration-100 cursor-pointer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="block hover:text-black transition-colors ease-in duration-100 cursor-pointer"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="block hover:text-black transition-colors ease-in duration-100 cursor-pointer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-5">
        {/* Logo Section */}
        <div className="flex items-center gap-x-5 h-[37px] lg:h-[50px] xl:h-[60px]">
          <img
            src="https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/03/pmp-logo@2x.png"
            className="h-full"
            alt=""
            decoding="async"
          />
          <p id="logo-desc" className=" w-[150px] h-[40px] text-wrap text-xs font-notoSans font-[500] hidden lg:block">
          Practical guidance for leaders inspiring change.
          </p>
        </div>

        {/* Nav Links */}
        <div className="justify-center items-center gap-x-10 hidden xl:flex">
          <ul
            id="nav-links"
            className="inline-flex flex-row gap-6 text-base font-notoSans font-[400]"
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="inline-flex justify-center items-center gap-1 hover:text-orange-700 transition-colors ease-in duration-100"
              >
                <a href="#">{link}</a>
                <span className="text-2xl">
                  <MdKeyboardArrowDown />
                </span>
              </li>
            ))}
          </ul>
          {/* SignUp and Search Buttons */}
          <ul className="inline-flex justify-center items-center gap-5 ">
            <li className="w-[150px] h-[40px] flex justify-center items-center text-orange-700 text-base font-notoSans font-[500] capitalize border-2 border-orange-700 rounded-full hover:text-white hover:bg-orange-700 transition ease-in duration-100">
              <a href="#">Sign me up</a>
            </li>
            <li className="w-[30px] h-[30px] bg-orange-700 rounded-full flex justify-center items-center text-xl text-white hover:bg-transparent hover:text-orange-700 transition duration-75 ease-in">
              <a href="#">
                <IoSearchSharp />
              </a>
            </li>
          </ul>
        </div>
        {/* Menu Icons for Small Screens */}
        <div className="flex items-center space-x-6 xl:hidden">
          {/* Search Icon */}
          <button className="w-[30px] h-[30px] bg-orange-600 rounded-full flex justify-center items-center text-xl text-white hover:bg-transparent hover:text-orange-600 transition duration-75 ease-in">
            <IoSearchSharp />
          </button>

          {/* Hamburger Icon */}
          <button className="text-4xl text-black active:scale-90">
            <IoMdMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

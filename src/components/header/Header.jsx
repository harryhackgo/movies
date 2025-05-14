import React, { useState } from "react";
import logo from "@/assets/LOGOTYPE–MOVIE.svg";
import afisha from "@/assets/tv-2-fill.png";
import seansi from "@/assets/tablet-line.png";
import tickets from "@/assets/coupon-3-line.png";
import search from "@/assets/search-line.png";
import darktheme from "@/assets/dark_theme.png";
import menu from "@/assets/icons8-menu.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState("");

  return (
    <header>
      <div className="container mx-auto">
        <nav className="min-h-20 flex items-center justify-between">
          <img src={logo} alt="logo of the website" />
          <ul className=" grid-cols-4 hidden md:grid">
            <li className="w-20">
              <a href="#" className="flex flex-col items-center gap-1.5">
                <img src={afisha} alt="" />
                <span className="text-[#C61F1F]">Afisha</span>
              </a>
            </li>
            <li className="w-20">
              <a href="#" className="flex flex-col items-center gap-1.5">
                <img src={seansi} alt="" />
                <span className="text-[#a1a1a1]">Seanses</span>
              </a>
            </li>
            <li className="w-20">
              <a href="#" className="flex flex-col items-center gap-1.5">
                <img src={tickets} alt="" />
                <span className="text-[#a1a1a1]">Tickets</span>
              </a>
            </li>
            <li className="w-20">
              <a href="#" className="flex flex-col items-center gap-1.5">
                <img src={search} alt="" />
                <span className="text-[#a1a1a1]">Search</span>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-5 ">
            <button className="cursor-pointer rounded-2xl overflow-hidden">
              <img src={darktheme} alt="" className="w-10" />
            </button>
            <button className="bg-primary w-[180px] h-[56px] text-center text-white rounded-[12px] cursor-pointer">
              Sing In
            </button>
            <button
              className="md:hidden block cursor-pointer"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <img src={menu} alt="" className="w-10" />
            </button>
          </div>
        </nav>
      </div>
      {openMenu && (
        <div className="w-full absolute top-0 left-0 bg-dark transform transition-all duration-500 md:hidden">
          <button
            className="text-4xl absolute top-1 right-3 text-white cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            X
          </button>
          <ul className="flex flex-col gap-20 my-15 justify-center items-center md:grid text-3xl">
            <li className="">
              <a href="#">
                <span className="text-[#a1a1a1] hover:text-primary">
                  Afisha
                </span>
              </a>
            </li>
            <li className="">
              <a href="#">
                <span className="text-[#a1a1a1] hover:text-primary">
                  Seanses
                </span>
              </a>
            </li>
            <li className="">
              <a href="#">
                <span className="text-[#a1a1a1] hover:text-primary">
                  Tickets
                </span>
              </a>
            </li>
            <li className="">
              <a href="#">
                <span className="text-[#a1a1a1] hover:text-primary">
                  Search
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

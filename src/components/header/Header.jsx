import React, { useState } from "react";
import logo from "@/assets/LOGOTYPE–MOVIE.svg";
import menu from "@/assets/icons8-menu.svg";
import { NavLink } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import "./style.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState("");

  return (
    <header>
      <div className="container mx-auto">
        <nav className="min-h-20 flex items-center justify-between">
          <NavLink to={"/"}>
            <img src={logo} alt="logo of the website" />
          </NavLink>
          <div className="flex gap-10">
            <NavLink
              className={"flex flex-col items-center  text-text header-link"}
              to={"/"}
            >
              <RiHomeLine className="text-2xl" />
              <span>Home</span>
            </NavLink>
            <NavLink
              className={"flex flex-col items-center  text-text header-link"}
              to={"/movies"}
            >
              <MdOutlineLocalMovies className="text-2xl" />
              <span>Movies</span>
            </NavLink>
            <NavLink
              className={"flex flex-col text-text items-center header-link"}
              to={"/saved"}
            >
              <IoBookmarkOutline className="text-2xl" />
              <span>Saved</span>
            </NavLink>
            <NavLink
              className={"flex flex-col text-text items-center header-link"}
              to={"/search"}
            >
              <FiSearch className="text-2xl" />
              <span>Search</span>
            </NavLink>
          </div>
          <div className="flex items-center gap-5 ">
            <button className="cursor-pointer rounded-2xl overflow-hidden text-primary text-2xl">
              <MdDarkMode />
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
